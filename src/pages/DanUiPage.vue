<script setup lang="ts">
import { usePageSeo } from '@/utils/seo'

usePageSeo('danui')

const links = {
  ui: 'https://www.npmjs.com/package/@dandan-ui/ui',
  theme: 'https://www.npmjs.com/package/@dandan-ui/theme',
  github: 'https://github.com/whr810012/dan-ui',
}
</script>

<template>
  <div class="danui">
    <header>
      <router-link class="brand" to="/">
        <span class="brand__egg" />
        <span><strong>蛋蛋中心</strong><small>DANDAN HUB</small></span>
      </router-link>
      <nav>
        <router-link to="/">产品中心</router-link>
        <router-link to="/toolbox">工具箱</router-link>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div>
          <p class="eyebrow"><span /> OPEN SOURCE · VUE 3</p>
          <h1>dan-ui</h1>
          <p>Vue 3 通用基础 UI 组件库。表单、展示、反馈，以及 AI 对话与富文本编辑能力，CSS 变量主题，支持全量与按需引入。</p>
        </div>
        <div class="hero-mark" aria-hidden="true">
          <div class="kit">
            <i class="btn" />
            <i class="field" />
            <i class="chip" />
            <i class="chip chip--accent" />
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="meta">
          <span class="icon">UI</span>
          <div>
            <h2>@dandan-ui/ui</h2>
            <p>组件库主包 · 搭配 @dandan-ui/theme</p>
          </div>
          <span class="version">v1.0.1</span>
        </div>

        <p class="intro">
          设计 Token 前缀 <code>dan-</code>，内置 ConfigProvider。AI 相关组件只提供 UI 与事件，不绑定具体模型接口；富文本基于 TipTap（可选 peer 依赖）。
        </p>

        <ul>
          <li><span>✓</span> Vue 3.5+ / TypeScript</li>
          <li><span>✓</span> CSS 变量主题与暗色覆盖</li>
          <li><span>✓</span> 全量注册与按需引入 / Resolver</li>
          <li><span>✓</span> 表单 · 展示 · 反馈 · AI · 富文本</li>
        </ul>

        <div class="code">
          <p>安装</p>
          <pre><code>pnpm add @dandan-ui/ui @dandan-ui/theme</code></pre>
        </div>

        <div class="code">
          <p>快速使用</p>
<pre><code>import { createApp } from 'vue'
import DanUI from '@dandan-ui/ui'
import '@dandan-ui/theme'
import '@dandan-ui/ui/style.css'

createApp(App).use(DanUI).mount('#app')</code></pre>
        </div>

        <div class="downloads">
          <a :href="links.ui" target="_blank" rel="noopener noreferrer">
            <b>◆</b>
            <span><strong>npm · @dandan-ui/ui</strong><small>组件库主包</small></span>
          </a>
          <a :href="links.theme" target="_blank" rel="noopener noreferrer">
            <b>○</b>
            <span><strong>npm · @dandan-ui/theme</strong><small>设计 Token</small></span>
          </a>
          <a :href="links.github" target="_blank" rel="noopener noreferrer">
            <b>⌥</b>
            <span><strong>GitHub 源码</strong><small>whr810012/dan-ui</small></span>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
.danui {
  min-height: 100vh;
  padding: 16px max(16px, calc((100vw - 1080px) / 2)) 64px;
  background:
    radial-gradient(circle at 78% 12%, rgba($hub-primary, 0.16), transparent 28%),
    linear-gradient(160deg, #f7f8ff, #f1ece5 55%, #e8eefc);
}
header { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 2px 4px 16px; }
.brand { display: inline-flex; align-items: center; gap: 9px; text-decoration: none; }
.brand > span:last-child { display: flex; flex-direction: column; line-height: 1.05; }
.brand strong { font: 700 14px $hub-font-display; }
.brand small { margin-top: 4px; color: $hub-text-muted; font-size: 7px; font-weight: 800; letter-spacing: 0.14em; }
.brand__egg {
  width: 29px;
  height: 34px;
  border-radius: 50% 50% 46% 46% / 58% 58% 42% 42%;
  background: linear-gradient(145deg, #fff, $hub-primary-light);
  box-shadow: $hub-shadow-sm;
  transform: rotate(-5deg);
}
nav { display: flex; gap: 4px; }
nav a { padding: 7px 10px; border-radius: $hub-radius-pill; color: $hub-text-muted; font-size: 11px; font-weight: 600; text-decoration: none; }

.hero {
  position: relative;
  display: flex;
  min-height: 230px;
  padding: clamp(28px, 6vw, 54px);
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba($hub-primary, 0.18);
  border-radius: 26px;
  background: linear-gradient(110deg, rgba(#fff, 0.96), rgba(214, 222, 255, 0.88));
  box-shadow: $hub-shadow-md;
}
.hero > div:first-child { position: relative; z-index: 1; max-width: 620px; }
.hero h1 { margin: 10px 0 12px; font: 800 clamp(34px, 7vw, 56px) $hub-font-display; line-height: 1; letter-spacing: -0.045em; }
.hero > div > p:last-child { max-width: 520px; margin: 0; color: $hub-text-secondary; line-height: 1.8; }
.eyebrow { display: flex; align-items: center; gap: 8px; margin: 0; color: $hub-primary; font-size: 9px; font-weight: 800; letter-spacing: 0.15em; }
.eyebrow span { width: 7px; height: 7px; border-radius: 50%; background: #4ba979; box-shadow: 0 0 0 4px rgba(75, 169, 121, 0.13); }

.hero-mark { position: relative; flex: 0 0 200px; height: 150px; }
.kit {
  position: absolute;
  inset: 18px 10px;
  display: grid;
  gap: 10px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(#fff, 0.9);
  box-shadow: 0 18px 40px rgba(70, 80, 140, 0.16);
  transform: rotate(3deg);
}
.kit .btn {
  width: 42%;
  height: 18px;
  border-radius: 999px;
  background: $hub-primary;
}
.kit .field {
  width: 88%;
  height: 16px;
  border-radius: 8px;
  background: #e7ebf8;
}
.kit .chip {
  width: 36%;
  height: 14px;
  border-radius: 999px;
  background: #f2cf75;
}
.kit .chip--accent { width: 28%; background: $hub-accent; }

.panel {
  margin-top: 28px;
  padding: clamp(26px, 5vw, 44px);
  border: 1px solid rgba(62, 62, 83, 0.12);
  border-radius: 28px;
  background: rgba(#fff, 0.78);
  box-shadow: $hub-shadow-md;
}
.meta { display: grid; align-items: center; grid-template-columns: auto 1fr auto; gap: 14px; }
.icon {
  display: grid;
  width: 50px;
  height: 58px;
  place-items: center;
  border-radius: 50% 50% 46% 46% / 58% 58% 42% 42%;
  background: linear-gradient(145deg, #5b6fd4, #3d4ea8);
  color: #fff;
  font: 800 14px $hub-font-display;
  transform: rotate(-5deg);
}
.meta h2 { margin: 0; font: 800 clamp(25px, 5vw, 34px) $hub-font-display; }
.meta p { margin: 3px 0 0; color: $hub-text-muted; font-size: 11px; }
.version { padding: 5px 9px; border-radius: $hub-radius-pill; background: $hub-primary-light; color: $hub-primary; font-size: 10px; font-weight: 700; }
.intro { margin: 24px 0 20px; color: $hub-text-secondary; font-size: 13px; line-height: 1.8; }
.intro code {
  padding: 1px 6px;
  border-radius: 6px;
  background: rgba($hub-primary, 0.08);
  font-size: 12px;
}
ul { display: grid; gap: 10px; margin: 0 0 26px; padding: 0; list-style: none; }
li { color: $hub-text-secondary; font-size: 12px; }
li span { margin-right: 7px; color: #43805b; font-weight: 800; }

.code {
  margin-bottom: 14px;
  overflow: hidden;
  border: 1px solid rgba(62, 62, 83, 0.1);
  border-radius: 14px;
  background: #1c1b22;
}
.code p {
  margin: 0;
  padding: 10px 14px 0;
  color: rgba(#fff, 0.55);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.code pre {
  margin: 0;
  padding: 10px 14px 14px;
  overflow-x: auto;
  color: #f4f0e8;
  font: 500 12px/1.65 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
.code code { font: inherit; }

.downloads { display: grid; gap: 10px; margin-top: 22px; }
.downloads a {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 14px 16px;
  border: 1px solid rgba($hub-primary, 0.16);
  border-radius: 15px;
  background: linear-gradient(135deg, #4a5ec4, #33448f);
  color: #fff;
  text-decoration: none;
  transition: transform 0.2s $hub-ease-out;
}
.downloads a + a { background: #fff; color: $hub-text; }
.downloads a:hover { transform: translateY(-2px); }
.downloads b { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 10px; background: rgba(#fff, 0.16); font-size: 16px; }
.downloads a + a b { background: rgba($hub-primary, 0.1); color: $hub-primary; }
.downloads span { display: flex; flex-direction: column; }
.downloads strong { font-size: 13px; }
.downloads small { margin-top: 3px; opacity: 0.72; font-size: 9px; }

@media (min-width: 820px) {
  .downloads { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 620px) {
  .hero-mark { display: none; }
}
</style>
