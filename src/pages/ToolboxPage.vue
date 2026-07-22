<script setup lang="ts">
import { usePageSeo } from '@/utils/seo'

usePageSeo('toolbox')

const downloads = {
  installer: '/downloads/dandan-note-0.1.2-x64-setup.exe',
  portable: '/downloads/dandan-note-0.1.2-x64-portable.exe',
}
</script>

<template>
  <div class="toolbox">
    <header>
      <router-link class="brand" to="/">
        <span class="brand__egg" />
        <span><strong>蛋蛋中心</strong><small>DANDAN HUB</small></span>
      </router-link>
      <nav><router-link to="/">产品中心</router-link><a href="/pindou/">拼豆工坊</a></nav>
    </header>

    <main>
      <section class="hero">
        <div>
          <p class="eyebrow"><span /> DANDAN LAB · 小而好用</p>
          <h1>蛋蛋工具箱</h1>
          <p>收纳我们认真做的小工具。轻量、克制，解决日常里那些具体的小麻烦。</p>
        </div>
        <div class="hero-mark" aria-hidden="true"><span>D</span><i /></div>
      </section>

      <section class="tools" aria-labelledby="desktop-tools">
        <div class="section-head">
          <div><p>01 / 桌面效率</p><h2 id="desktop-tools">现在可用</h2></div>
          <span>1 个工具</span>
        </div>

        <article class="tool-card">
          <div class="preview" aria-hidden="true">
            <div class="note-window">
              <span class="window-bar"><i /><i /><i /></span>
              <div class="window-body"><span class="sidebar" /><div><i /><i /><i /><i /></div></div>
            </div>
            <span class="float float--pin">置顶</span>
            <span class="float float--local">本地</span>
          </div>

          <div class="content">
            <div class="meta">
              <span class="icon">蛋</span>
              <div><h3>蛋蛋便签</h3><p>Windows 桌面便签与待办</p></div>
              <span class="version">v0.1.2</span>
            </div>
            <p class="intro">把今天要记住的事，安静地留在桌面上。支持笔记与待办、日期筛选、标签分类和透明度调整，数据只保存在你的电脑里。</p>
            <ul>
              <li><span>✓</span> 桌面常驻与窗口置顶</li>
              <li><span>✓</span> 笔记、待办自由切换</li>
              <li><span>✓</span> SQLite 本地保存</li>
              <li><span>✓</span> 开机启动与透明度设置</li>
            </ul>
            <div class="downloads">
              <a :href="downloads.installer" download><b>↓</b><span><strong>下载安装包</strong><small>Windows 10 / 11 · x64</small></span></a>
              <a :href="downloads.portable" download><b>↗</b><span><strong>便携版 EXE</strong><small>无需安装，直接运行</small></span></a>
            </div>
            <p class="notice">首次运行若出现 Windows 安全提示，请选择“更多信息”后继续运行。</p>
          </div>
        </article>
      </section>

      <section class="coming"><span /><p>更多小工具，正在慢慢孵化</p><b>○ · ○ · ○</b></section>
    </main>
  </div>
</template>

<style scoped lang="scss">
.toolbox {
  min-height: 100vh;
  padding: 16px max(16px, calc((100vw - 1080px) / 2)) 64px;
  background:
    radial-gradient(circle at 80% 10%, rgba($hub-primary, 0.16), transparent 28%),
    linear-gradient(160deg, #fffaf2, #f1ece5 55%, #eceefe);
}
header { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 2px 4px 16px; }
.brand { display: inline-flex; align-items: center; gap: 9px; text-decoration: none; }
.brand > span:last-child { display: flex; flex-direction: column; line-height: 1.05; }
.brand strong { font: 700 14px $hub-font-display; }
.brand small { margin-top: 4px; color: $hub-text-muted; font-size: 7px; font-weight: 800; letter-spacing: 0.14em; }
.brand__egg { width: 29px; height: 34px; border-radius: 50% 50% 46% 46% / 58% 58% 42% 42%; background: linear-gradient(145deg, #fff, $hub-primary-light); box-shadow: $hub-shadow-sm; transform: rotate(-5deg); }
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
  background: linear-gradient(110deg, rgba(#fff, 0.96), rgba($hub-primary-light, 0.82));
  box-shadow: $hub-shadow-md;
}
.hero > div:first-child { position: relative; z-index: 1; max-width: 580px; }
.hero h1 { margin: 10px 0 12px; font: 800 clamp(34px, 7vw, 56px) $hub-font-display; line-height: 1; letter-spacing: -0.045em; }
.hero > div > p:last-child { max-width: 480px; margin: 0; color: $hub-text-secondary; line-height: 1.8; }
.eyebrow { display: flex; align-items: center; gap: 8px; margin: 0; color: $hub-primary; font-size: 9px; font-weight: 800; letter-spacing: 0.15em; }
.eyebrow span { width: 7px; height: 7px; border-radius: 50%; background: #4ba979; box-shadow: 0 0 0 4px rgba(75, 169, 121, 0.13); }
.hero-mark { position: relative; flex: 0 0 180px; height: 150px; }
.hero-mark span { position: absolute; z-index: 1; top: 25px; left: 50%; display: grid; width: 84px; height: 104px; place-items: center; border: 5px solid #fff; border-radius: 50% 50% 46% 46% / 58% 58% 42% 42%; background: $hub-primary; color: #fff; font: 800 36px $hub-font-display; box-shadow: 0 18px 40px rgba($hub-primary, 0.28); transform: translateX(-50%) rotate(-7deg); }
.hero-mark i { position: absolute; inset: 4px 20px; border: 1px dashed rgba($hub-primary, 0.35); border-radius: 50%; transform: rotate(15deg); }

.tools { padding: 62px 0 20px; }
.section-head { display: flex; align-items: end; justify-content: space-between; margin-bottom: 18px; }
.section-head p { margin: 0 0 7px; color: $hub-accent; font-size: 9px; font-weight: 800; letter-spacing: 0.15em; }
.section-head h2 { margin: 0; font: 800 clamp(26px, 5vw, 36px) $hub-font-display; }
.section-head > span { color: $hub-text-muted; font-size: 11px; }
.tool-card { display: grid; overflow: hidden; border: 1px solid rgba(62, 62, 83, 0.12); border-radius: 28px; background: rgba(#fff, 0.72); box-shadow: $hub-shadow-md; }
.preview { position: relative; min-height: 360px; overflow: hidden; background: linear-gradient(145deg, #fff8e8, #f3dfc6); }
.preview::before { content: ''; position: absolute; inset: 0; opacity: 0.35; background-image: linear-gradient(rgba(99, 69, 39, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 69, 39, 0.08) 1px, transparent 1px); background-size: 25px 25px; }
.note-window { position: absolute; top: 50%; left: 50%; width: min(78%, 330px); height: 220px; overflow: hidden; border: 1px solid rgba(92, 64, 39, 0.12); border-radius: 18px; background: rgba(#fff, 0.9); box-shadow: 0 24px 50px rgba(90, 61, 35, 0.18); transform: translate(-50%, -50%) rotate(2deg); }
.window-bar { display: flex; gap: 6px; height: 39px; padding: 15px; border-bottom: 1px solid #eee5da; }
.window-bar i { width: 7px; height: 7px; border-radius: 50%; background: #ded3c6; }
.window-bar i:first-child { background: $hub-accent; }
.window-body { display: grid; height: calc(100% - 39px); grid-template-columns: 76px 1fr; }
.sidebar { background: #f3ede5; border-right: 1px solid #e8ded2; }
.window-body div { padding: 28px 22px; }
.window-body div i { display: block; width: 88%; height: 9px; margin-bottom: 18px; border-radius: 10px; background: #e6ded5; }
.window-body div i:first-child { width: 55%; height: 13px; background: #625c57; }
.float { position: absolute; padding: 7px 12px; border: 2px solid #fff; border-radius: $hub-radius-pill; background: rgba(#fff, 0.9); color: $hub-text-secondary; font-size: 10px; font-weight: 700; box-shadow: $hub-shadow-sm; }
.float--pin { top: 16%; right: 10%; transform: rotate(7deg); }
.float--local { bottom: 14%; left: 9%; transform: rotate(-6deg); }

.content { padding: clamp(26px, 5vw, 44px); }
.meta { display: grid; align-items: center; grid-template-columns: auto 1fr auto; gap: 14px; }
.icon { display: grid; width: 50px; height: 58px; place-items: center; border-radius: 50% 50% 46% 46% / 58% 58% 42% 42%; background: $hub-primary; color: #fff; font: 800 16px $hub-font-display; transform: rotate(-5deg); }
.meta h3 { margin: 0; font: 800 clamp(25px, 5vw, 34px) $hub-font-display; }
.meta p { margin: 3px 0 0; color: $hub-text-muted; font-size: 11px; }
.version { padding: 5px 9px; border-radius: $hub-radius-pill; background: $hub-primary-light; color: $hub-primary; font-size: 10px; font-weight: 700; }
.intro { margin: 24px 0 20px; color: $hub-text-secondary; font-size: 13px; line-height: 1.8; }
ul { display: grid; gap: 10px; margin: 0 0 26px; padding: 0; list-style: none; }
li { color: $hub-text-secondary; font-size: 12px; }
li span { margin-right: 7px; color: #43805b; font-weight: 800; }
.downloads { display: grid; gap: 10px; }
.downloads a { display: flex; align-items: center; gap: 13px; padding: 14px 16px; border: 1px solid rgba($hub-primary, 0.16); border-radius: 15px; background: $hub-primary; color: #fff; text-decoration: none; transition: transform 0.2s $hub-ease-out; }
.downloads a + a { background: #fff; color: $hub-text; }
.downloads a:hover { transform: translateY(-2px); }
.downloads b { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 10px; background: rgba(#fff, 0.16); font-size: 18px; }
.downloads span { display: flex; flex-direction: column; }
.downloads strong { font-size: 13px; }
.downloads small { margin-top: 3px; opacity: 0.72; font-size: 9px; }
.notice { margin: 15px 0 0; color: $hub-text-muted; font-size: 10px; line-height: 1.6; }
.coming { display: flex; align-items: center; justify-content: center; gap: 14px; padding: 45px 0 12px; color: $hub-text-muted; font-size: 11px; }
.coming > span { width: 44px; height: 1px; background: $hub-border; }
.coming b { color: rgba($hub-primary, 0.5); letter-spacing: 0.2em; }

@media (min-width: 820px) {
  .tool-card { grid-template-columns: minmax(360px, 0.9fr) minmax(0, 1.1fr); }
  .preview { min-height: 100%; }
  .downloads { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 620px) {
  .hero-mark { display: none; }
  .preview { min-height: 300px; }
  .section-head > span { display: none; }
}
</style>
