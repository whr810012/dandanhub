import { onMounted } from 'vue'

const SITE_URL = 'https://dandanhub.vip'

const pages = {
  hub: {
    path: '/',
    title: '蛋蛋中心 Dandan Hub - 好用的小工具与创作产品',
    description: '一颗蛋蛋，孵化好用的点子。探索 Pindou 拼豆工坊、蛋蛋便签与本地加水印工具。',
  },
  toolbox: {
    path: '/toolbox',
    title: '蛋蛋工具箱 - 蛋蛋便签 Windows 下载',
    description: '下载蛋蛋便签 Windows 桌面版，支持便签待办、桌面置顶、标签分类与本地数据保存。',
  },
} as const

function setMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    const [name, content] = attribute.split('=')
    element.setAttribute(name, content)
    document.head.appendChild(element)
  }
  element.content = value
}

export function usePageSeo(key: keyof typeof pages) {
  onMounted(() => {
    const page = pages[key]
    const canonical = `${SITE_URL}${page.path}`
    document.title = page.title
    setMeta('meta[name="description"]', 'name=description', page.description)
    setMeta('meta[property="og:title"]', 'property=og:title', page.title)
    setMeta('meta[property="og:description"]', 'property=og:description', page.description)
    setMeta('meta[property="og:url"]', 'property=og:url', canonical)

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
  })
}
