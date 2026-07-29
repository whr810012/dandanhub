/**
 * Cloudflare Pages：将 /pindou、/watermark、/caption 反代到各子站 Pages 源。
 * 在 Pages 项目 Settings → Environment variables 配置：
 *   PINDOU_ORIGIN=https://<pindou-project>.pages.dev
 *   WATERMARK_ORIGIN=https://<watermark-project>.pages.dev
 *   CAPTION_ORIGIN=https://<caption-project>.pages.dev
 *（不要带末尾斜杠；路径仍保留 /pindou 等前缀，与子站 Vite base 一致）
 */

/// <reference types="@cloudflare/workers-types" />

interface ProxyEnv {
  PINDOU_ORIGIN?: string
  WATERMARK_ORIGIN?: string
  CAPTION_ORIGIN?: string
}

interface ProxyMatch {
  origin: string
  addCoop: boolean
}

function resolveProxy(pathname: string, env: ProxyEnv): ProxyMatch | Response | null {
  if (pathname === '/pindou' || pathname.startsWith('/pindou/')) {
    const origin = env.PINDOU_ORIGIN?.replace(/\/$/, '')
    if (!origin) {
      return new Response('PINDOU_ORIGIN is not configured', { status: 503 })
    }
    return { origin, addCoop: false }
  }
  if (pathname === '/watermark' || pathname.startsWith('/watermark/')) {
    const origin = env.WATERMARK_ORIGIN?.replace(/\/$/, '')
    if (!origin) {
      return new Response('WATERMARK_ORIGIN is not configured', { status: 503 })
    }
    return { origin, addCoop: true }
  }
  if (pathname === '/caption' || pathname.startsWith('/caption/')) {
    const origin = env.CAPTION_ORIGIN?.replace(/\/$/, '')
    if (!origin) {
      return new Response('CAPTION_ORIGIN is not configured', { status: 503 })
    }
    return { origin, addCoop: false }
  }
  return null
}

const HOP_BY_HOP = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
  'host',
  'cf-connecting-ip',
  'cf-ray',
  'cf-visitor',
  'cf-ipcountry',
  'x-forwarded-for',
  'x-forwarded-proto',
])

function filterRequestHeaders(source: Headers, upstreamHost: string): Headers {
  const headers = new Headers()
  source.forEach((value, key) => {
    if (HOP_BY_HOP.has(key.toLowerCase())) return
    headers.set(key, value)
  })
  headers.set('Host', upstreamHost)
  return headers
}

function withCoopHeaders(headers: Headers): Headers {
  const next = new Headers(headers)
  next.set('Cross-Origin-Opener-Policy', 'same-origin')
  next.set('Cross-Origin-Embedder-Policy', 'require-corp')
  next.set('Cross-Origin-Resource-Policy', 'same-origin')
  return next
}

export const onRequest: PagesFunction<ProxyEnv> = async (context) => {
  const url = new URL(context.request.url)
  const match = resolveProxy(url.pathname, context.env)

  if (!match) {
    return context.next()
  }
  if (match instanceof Response) {
    return match
  }

  const targetUrl = `${match.origin}${url.pathname}${url.search}`
  const upstreamHost = new URL(match.origin).host
  const method = context.request.method
  const hasBody = method !== 'GET' && method !== 'HEAD'

  let upstream: Response
  try {
    const init: RequestInit = {
      method,
      headers: filterRequestHeaders(context.request.headers, upstreamHost),
      redirect: 'manual',
    }
    if (hasBody) {
      init.body = context.request.body
    }
    upstream = await fetch(new Request(targetUrl, init))
  } catch (error) {
    const message = error instanceof Error ? error.message : 'proxy fetch failed'
    return new Response(JSON.stringify({ error: 'Bad Gateway', detail: message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let responseHeaders = new Headers(upstream.headers)
  responseHeaders.delete('content-encoding')
  responseHeaders.delete('content-length')
  if (match.addCoop) {
    responseHeaders = withCoopHeaders(responseHeaders)
  }

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: responseHeaders,
  })
}
