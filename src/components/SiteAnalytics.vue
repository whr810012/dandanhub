<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

/** Hub 根站；下载页单独记到蛋蛋便签站点 */
const HUB_USTAT_SRC =
  'https://019fabb0-6891-7e89-9f51-89b2491f12a5.spst2.com/ustat.js'
const NOTE_USTAT_SRC =
  'https://019fabc0-013a-7ccb-8268-02d484882e94.spst2.com/ustat.js'

const envSrc = (import.meta.env.VITE_USTAT_SCRIPT_URL as string | undefined)?.trim()
const route = useRoute()

let scriptEl: HTMLScriptElement | null = null

function resolveScriptSrc(path: string): string | undefined {
  if (envSrc) return envSrc
  if (!import.meta.env.PROD) return undefined
  return path === '/toolbox' || path.startsWith('/toolbox/') ? NOTE_USTAT_SRC : HUB_USTAT_SRC
}

function ensureScript(src: string | undefined) {
  if (typeof document === 'undefined') return
  if (!src) {
    scriptEl?.remove()
    scriptEl = null
    return
  }
  if (scriptEl?.src === src) return
  scriptEl?.remove()
  scriptEl = document.createElement('script')
  scriptEl.async = true
  scriptEl.src = src
  document.head.appendChild(scriptEl)
}

watchEffect((onCleanup) => {
  ensureScript(resolveScriptSrc(route.path))
  onCleanup(() => {
    scriptEl?.remove()
    scriptEl = null
  })
})
</script>

<template>
  <span class="site-analytics" aria-hidden="true" />
</template>
