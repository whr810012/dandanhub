/**
 * Cloudflare Worker + Static Assets 入口。
 * 适配控制台 Deploy command: `npx wrangler deploy`
 *
 * 环境变量（Production）：
 *   PINDOU_ORIGIN / WATERMARK_ORIGIN / CAPTION_ORIGIN
 * （不要末尾斜杠；路径仍带 /pindou 等前缀）
 */

/// <reference types="@cloudflare/workers-types" />

export interface Env {
  ASSETS: Fetcher
  PINDOU_ORIGIN?: string
  WATERMARK_ORIGIN?: string
  CAPTION_ORIGIN?: string
}

interface ProxyMatch {
  origin: string
  addCoop: boolean
}

function resolveProxy(pathname: string, env: Env): ProxyMatch | Response | null {
  if (pathname === '/pindou' || pathname.startsWith('/pindou/')) {
    const origin = env.PINDOU_ORIGIN?.replace(/\/$/, '')
    if (!origin) return new Response('PINDOU_ORIGIN is not configured', { status: 503 })
    return { origin, addCoop: false }
  }
  if (pathname === '/watermark' || pathname.startsWith('/watermark/')) {
    const origin = env.WATERMARK_ORIGIN?.replace(/\/$/, '')
    if (!origin) return new Response('WATERMARK_ORIGIN is not configured', { status: 503 })
    return { origin, addCoop: true }
  }
  if (pathname === '/caption' || pathname.startsWith('/caption/')) {
    const origin = env.CAPTION_ORIGIN?.replace(/\/$/, '')
    if (!origin) return new Response('CAPTION_ORIGIN is not configured', { status: 503 })
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

async function proxyRequest(request: Request, match: ProxyMatch, url: URL): Promise<Response> {
  const targetUrl = `${match.origin}${url.pathname}${url.search}`
  const upstreamHost = new URL(match.origin).host
  const method = request.method
  const hasBody = method !== 'GET' && method !== 'HEAD'

  try {
    const init: RequestInit = {
      method,
      headers: filterRequestHeaders(request.headers, upstreamHost),
      redirect: 'manual',
    }
    if (hasBody) init.body = request.body
    const upstream = await fetch(new Request(targetUrl, init))

    let responseHeaders = new Headers(upstream.headers)
    responseHeaders.delete('content-encoding')
    responseHeaders.delete('content-length')
    if (match.addCoop) responseHeaders = withCoopHeaders(responseHeaders)

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'proxy fetch failed'
    return new Response(JSON.stringify({ error: 'Bad Gateway', detail: message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const match = resolveProxy(url.pathname, env)

    if (match instanceof Response) return match
    if (match) return proxyRequest(request, match, url)

    return env.ASSETS.fetch(request)
  },
}
