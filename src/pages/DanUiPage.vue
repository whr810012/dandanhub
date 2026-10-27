<script setup lang="ts">
import { usePageSeo } from '@/utils/seo'

usePageSeo('danui')

const links = {
  ui: 'https://www.npmjs.com/package/@dandan-ui/ui',
  theme: 'https://www.npmjs.com/package/@dandan-ui/theme',
  github: 'https://github.com/whr810012/dan-ui',
  hub: '/',
}

const features = [
  { title: 'Vue 3.5 + TypeScript', desc: '面向现代 Vue 工程，类型与组件导出齐全。' },
  { title: 'CSS 变量主题', desc: 'Token 前缀 dan-，支持业务侧覆盖与暗色。' },
  { title: '全量 / 按需', desc: '支持插件全量注册，也可用 Resolver 按需引入。' },
  { title: 'AI 与富文本', desc: '对话、流式、Markdown；RichText 基于 TipTap（可选）。' },
]

const groups = [
  {
    name: '基础',
    items: 'ConfigProvider · Button · Icon · Space · Divider',
  },
  {
    name: '表单',
    items: 'Input · Textarea · Checkbox · Radio · Switch · Select · Form · DatePicker · Slider · Rate',
  },
  {
    name: '展示',
    items: 'Tag · Badge · Avatar · Alert · Empty · Progress · Table · Card · Image · …',
  },
  {
    name: '反馈',
    items: 'Loading · Message · Dialog · Drawer · MessageBox',
  },
  {
    name: 'AI',
    items: 'Chat · Markdown · StreamText · Thinking · Suggestion · Attachment · …',
  },
  {
    name: '编辑器',
    items: 'RichText · EditorToolbar · EditorBubbleMenu',
  },
]
</script>

<template>
  <div class="site">
    <div class="site__sky" aria-hidden="true" />

    <header class="top">
      <a class="brand" href="/dan-ui" aria-label="dan-ui 官网">
        <span class="brand__mark">dan</span>
        <span>
          <strong>dan-ui</strong>
          <small>OFFICIAL SITE</small>
        </span>
      </a>
      <nav aria-label="站内导航">
        <a href="#install">安装</a>
        <a href="#features">特性</a>
        <a href="#components">组件</a>
        <a :href="links.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <router-link class="hub-link" :to="links.hub">蛋蛋中心</router-link>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero__copy">
          <p class="kicker">● VUE 3 COMPONENT LIBRARY</p>
          <h1>dan-ui</h1>
          <p class="lead">
            Vue 3 通用基础 UI 组件库。表单、展示、反馈，以及 AI 对话与富文本——用 CSS 变量主题，按你的方式接入。
          </p>
          <div class="cta">
            <a class="cta__primary" href="#install">开始使用</a>
            <a class="cta__ghost" :href="links.ui" target="_blank" rel="noopener noreferrer">npm 主包</a>
            <a class="cta__ghost" :href="links.github" target="_blank" rel="noopener noreferrer">源码</a>
          </div>
          <p class="ver">当前版本 <b>v1.0.1</b> · MIT</p>
        </div>
        <div class="hero__stage" aria-hidden="true">
          <div class="stage-card">
            <span class="dot" /><span class="dot" /><span class="dot" />
            <div class="stage-row"><i class="btn" /> <i class="btn btn--ghost" /></div>
            <div class="stage-row"><i class="input" /></div>
            <div class="stage-row"><i class="chip" /><i class="chip chip--warm" /><i class="chip chip--ok" /></div>
            <div class="stage-chat">
              <b /><b class="me" /><b />
            </div>
          </div>
        </div>
      </section>

      <section id="install" class="block">
        <div class="block__head">
          <p>GET STARTED</p>
          <h2>安装与接入</h2>
        </div>
        <div class="install-grid">
          <article>
            <h3>安装包</h3>
            <pre><code>pnpm add @dandan-ui/ui @dandan-ui/theme</code></pre>
            <p>富文本可选安装 TipTap peer 依赖，详见 GitHub README。</p>
          </article>
          <article>
            <h3>全量注册</h3>
<pre><code>import { createApp } from 'vue'
import DanUI from '@dandan-ui/ui'
import '@dandan-ui/theme'
import '@dandan-ui/ui/style.css'

createApp(App).use(DanUI).mount('#app')</code></pre>
          </article>
        </div>
        <div class="pkg-links">
          <a :href="links.ui" target="_blank" rel="noopener noreferrer">
            <strong>@dandan-ui/ui</strong>
            <span>组件库主包</span>
          </a>
          <a :href="links.theme" target="_blank" rel="noopener noreferrer">
            <strong>@dandan-ui/theme</strong>
            <span>设计 Token</span>
          </a>
          <a :href="links.github" target="_blank" rel="noopener noreferrer">
            <strong>GitHub</strong>
            <span>whr810012/dan-ui</span>
          </a>
        </div>
      </section>

      <section id="features" class="block">
        <div class="block__head">
          <p>WHY DAN-UI</p>
          <h2>为什么用它</h2>
        </div>
        <div class="feature-grid">
          <article v-for="item in features" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </section>

      <section id="components" class="block">
        <div class="block__head">
          <p>COMPONENTS</p>
          <h2>组件能力</h2>
        </div>
        <div class="group-grid">
          <article v-for="group in groups" :key="group.name">
            <h3>{{ group.name }}</h3>
            <p>{{ group.items }}</p>
          </article>
        </div>
      </section>

      <section class="closing">
        <h2>开源可用，继续孵化</h2>
        <p>dan-ui 是蛋蛋中心开源的 Vue 3 组件库。Issue 与 PR 欢迎来 GitHub。</p>
        <div class="cta">
          <a class="cta__primary" :href="links.github" target="_blank" rel="noopener noreferrer">打开仓库</a>
          <router-link class="cta__ghost" :to="links.hub">返回蛋蛋中心</router-link>
        </div>
      </section>
    </main>

    <footer>
      <div>
        <strong>dan-ui</strong>
        <span>官方站点 · dandanhub.vip/dan-ui</span>
      </div>
      <p>© Dandan Hub · MIT</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.site {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 86% 8%, rgba($hub-primary, 0.22), transparent 26%),
    radial-gradient(circle at 8% 40%, rgba($hub-accent, 0.12), transparent 22%),
    linear-gradient(165deg, #f7f8ff, #f3eee6 48%, #e8eefc);
}

.site__sky {
  position: absolute;
  inset: 0;
  opacity: 0.24;
  pointer-events: none;
  background-image: radial-gradient(rgba(60, 58, 80, 0.16) 0.7px, transparent 0.7px);
  background-size: 17px 17px;
  mask-image: linear-gradient(to bottom, #000, transparent 72%);
}

.top,
main,
footer {
  position: relative;
  z-index: 1;
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 0;

  nav {
    display: flex;
    gap: 2px;
    padding: 4px;
    overflow-x: auto;
    border: 1px solid rgba(91, 94, 125, 0.1);
    border-radius: $hub-radius-pill;
    background: rgba(#fff, 0.62);
    backdrop-filter: blur(12px);
  }

  nav a {
    flex: 0 0 auto;
    padding: 7px 11px;
    border-radius: $hub-radius-pill;
    color: $hub-text-secondary;
    font-size: 11px;
    font-weight: 600;
    text-decoration: none;
  }

  .hub-link {
    color: $hub-primary;
  }
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  > span:last-child {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
  }

  strong {
    font-family: $hub-font-display;
    font-size: 18px;
    letter-spacing: -0.03em;
  }

  small {
    margin-top: 5px;
    color: $hub-text-muted;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.16em;
  }
}

.brand__mark {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(145deg, #5b6fd4, #3d4ea8);
  color: #fff;
  font: 800 11px $hub-font-display;
  letter-spacing: -0.04em;
  box-shadow: 0 8px 20px rgba(61, 78, 168, 0.28);
}

.hero {
  display: grid;
  gap: 28px;
  align-items: center;
  padding: 36px 0 56px;
}

.kicker {
  margin: 0;
  color: $hub-accent;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.hero h1 {
  margin: 14px 0 18px;
  font-family: $hub-font-display;
  font-size: clamp(52px, 12vw, 88px);
  line-height: 0.92;
  letter-spacing: -0.06em;
}

.lead {
  max-width: 540px;
  margin: 0;
  color: $hub-text-secondary;
  font-size: clamp(15px, 2.4vw, 18px);
  line-height: 1.75;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.cta__primary,
.cta__ghost {
  display: inline-flex;
  align-items: center;
  padding: 12px 18px;
  border-radius: $hub-radius-pill;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
}

.cta__primary {
  background: linear-gradient(135deg, #4a5ec4, #33448f);
  color: #fff;
  box-shadow: 0 10px 28px rgba(51, 68, 143, 0.28);
}

.cta__ghost {
  border: 1px solid rgba(73, 76, 112, 0.16);
  background: rgba(#fff, 0.7);
  color: $hub-text;
}

.ver {
  margin: 18px 0 0;
  color: $hub-text-muted;
  font-size: 11px;
}

.ver b {
  color: $hub-primary;
}

.hero__stage {
  display: grid;
  place-items: center;
}

.stage-card {
  width: min(100%, 340px);
  padding: 18px;
  border: 1px solid rgba(62, 62, 83, 0.1);
  border-radius: 24px;
  background: rgba(#fff, 0.88);
  box-shadow: $hub-shadow-md;
  transform: rotate(2deg);
}

.stage-card > .dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 4px 14px 0;
  border-radius: 50%;
  background: #e4dfd7;
}

.stage-card > .dot:first-child {
  background: $hub-accent;
}

.stage-row {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.btn {
  display: block;
  width: 72px;
  height: 28px;
  border-radius: 999px;
  background: $hub-primary;
}

.btn--ghost {
  background: #e8ebf6;
}

.input {
  display: block;
  width: 100%;
  height: 34px;
  border-radius: 10px;
  background: #eef1f8;
}

.chip {
  width: 54px;
  height: 22px;
  border-radius: 999px;
  background: #dfe5ff;
}

.chip--warm {
  background: #f2cf75;
}

.chip--ok {
  background: #79bd9b;
}

.stage-chat {
  display: grid;
  gap: 8px;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(57, 57, 72, 0.08);
}

.stage-chat b {
  display: block;
  width: 68%;
  height: 28px;
  border-radius: 12px 12px 12px 4px;
  background: #eef1fc;
}

.stage-chat .me {
  width: 52%;
  margin-left: auto;
  border-radius: 12px 12px 4px 12px;
  background: rgba($hub-primary, 0.18);
}

.block {
  scroll-margin-top: 20px;
  padding: 18px 0 48px;
}

.block__head {
  margin-bottom: 18px;
}

.block__head p {
  margin: 0 0 6px;
  color: $hub-accent;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.block__head h2 {
  margin: 0;
  font: 800 clamp(26px, 5vw, 36px) $hub-font-display;
  letter-spacing: -0.03em;
}

.install-grid,
.feature-grid,
.group-grid {
  display: grid;
  gap: 12px;
}

.install-grid article,
.feature-grid article,
.group-grid article {
  padding: 20px;
  border: 1px solid rgba(62, 62, 83, 0.1);
  border-radius: 20px;
  background: rgba(#fff, 0.72);
}

.install-grid h3,
.feature-grid h3,
.group-grid h3 {
  margin: 0 0 10px;
  font: 700 16px $hub-font-display;
}

.install-grid p,
.feature-grid p,
.group-grid p {
  margin: 10px 0 0;
  color: $hub-text-secondary;
  font-size: 12px;
  line-height: 1.7;
}

.install-grid pre {
  margin: 0;
  padding: 14px;
  overflow-x: auto;
  border-radius: 12px;
  background: #1c1b22;
  color: #f4f0e8;
  font: 500 12px/1.65 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

.pkg-links {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.pkg-links a {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 18px;
  border: 1px solid rgba($hub-primary, 0.14);
  border-radius: 16px;
  background: rgba(#fff, 0.8);
  color: $hub-text;
  text-decoration: none;
  transition: transform 0.2s $hub-ease-out;
}

.pkg-links a:hover {
  transform: translateY(-2px);
}

.pkg-links a:first-child {
  background: linear-gradient(135deg, #4a5ec4, #33448f);
  color: #fff;
}

.pkg-links strong {
  font-size: 14px;
}

.pkg-links span {
  opacity: 0.72;
  font-size: 11px;
}

.closing {
  margin: 10px 0 40px;
  padding: clamp(28px, 5vw, 44px);
  border: 1px solid rgba($hub-primary, 0.16);
  border-radius: 28px;
  background: linear-gradient(120deg, rgba(#fff, 0.95), rgba(214, 222, 255, 0.88));
  box-shadow: $hub-shadow-md;
}

.closing h2 {
  margin: 0 0 10px;
  font: 800 clamp(24px, 5vw, 34px) $hub-font-display;
}

.closing p {
  margin: 0;
  max-width: 520px;
  color: $hub-text-secondary;
  font-size: 13px;
  line-height: 1.7;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 0 calc(22px + var(--hub-safe-bottom));
  border-top: 1px solid rgba(64, 62, 79, 0.1);
  color: $hub-text-muted;
  font-size: 10px;
}

footer > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

footer strong {
  color: $hub-text;
  font: 700 13px $hub-font-display;
}

footer p {
  margin: 0;
}

@media (min-width: 860px) {
  .hero {
    grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
    min-height: 520px;
  }

  .install-grid,
  .feature-grid {
    grid-template-columns: 1fr 1fr;
  }

  .group-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .pkg-links {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .top {
    align-items: flex-start;
  }

  .top nav {
    max-width: 58vw;
  }

  footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
