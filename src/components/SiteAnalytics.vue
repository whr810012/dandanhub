<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

/** UStat 站点 dandanhub.vip 的公开统计脚本（可被环境变量覆盖） */
const DEFAULT_USTAT_SRC =
  'https://019fabb0-6891-7e89-9f51-89b2491f12a5.spst2.com/ustat.js'

const envSrc = (import.meta.env.VITE_USTAT_SCRIPT_URL as string | undefined)?.trim()
const scriptSrc = envSrc || (import.meta.env.PROD ? DEFAULT_USTAT_SRC : undefined)

let scriptEl: HTMLScriptElement | null = null

onMounted(() => {
  if (!scriptSrc || typeof document === 'undefined') return
  if (document.querySelector(`script[src="${scriptSrc}"]`)) return

  scriptEl = document.createElement('script')
  scriptEl.async = true
  scriptEl.src = scriptSrc
  document.head.appendChild(scriptEl)
})

onUnmounted(() => {
  scriptEl?.remove()
  scriptEl = null
})
</script>

<template>
  <span class="site-analytics" aria-hidden="true" />
</template>
