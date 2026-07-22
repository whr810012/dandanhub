<script setup lang="ts">
import { usePageSeo } from '@/utils/seo'

usePageSeo('hub')

const products = [
  {
    number: '01',
    className: 'pindou',
    href: '/pindou/',
    eyebrow: 'ONLINE CREATIVE TOOL',
    title: 'Pindou 拼豆工坊',
    description: '把照片变成带色号的拼豆图纸。从像素化、配色、精修到导出，在浏览器里完成整套创作流程。',
    tags: ['照片转拼豆', '多品牌色卡', '本地隐私处理'],
    action: '进入拼豆工坊',
  },
  {
    number: '02',
    className: 'toolbox',
    href: '/toolbox',
    eyebrow: 'DESKTOP UTILITIES',
    title: '蛋蛋工具箱',
    description: '收纳认真做的小型桌面工具。首个成员“蛋蛋便签”，让笔记和待办安静地留在桌面上。',
    tags: ['桌面便签', '待办管理', '本地数据'],
    action: '打开工具箱',
  },
  {
    number: '03',
    className: 'watermark',
    href: '/watermark/',
    eyebrow: 'LOCAL MEDIA UTILITY',
    title: '加水印 Watermark',
    description: '在浏览器本地为图片、PDF 与视频添加文字、Logo 或隐藏标记，文件无需上传。',
    tags: ['图片 / PDF / 视频', '可见与隐藏水印', '文件不上传'],
    action: '打开加水印',
  },
]
</script>

<template>
  <div class="hub">
    <div class="hub__sky" aria-hidden="true" />
    <header class="hub-header">
      <a class="brand" href="/" aria-label="蛋蛋中心首页">
        <span class="brand__egg"><i /><i /></span>
        <span><strong>蛋蛋中心</strong><small>DANDAN HUB</small></span>
      </a>
      <nav aria-label="产品导航">
        <a href="#products">全部产品</a>
        <a href="/pindou/">拼豆工坊</a>
        <router-link to="/toolbox">工具箱</router-link>
        <a href="/watermark/">加水印</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div>
          <p class="kicker">● WELCOME TO DANDAN HUB</p>
          <h1>一颗蛋蛋，<span>孵化好用的点子。</span></h1>
          <p class="lead">这里是我们的产品中心。做轻巧、认真、能解决真实小麻烦的工具，让创作和日常都简单一点。</p>
          <a class="jump" href="#products">看看孵化了什么 <span>↓</span></a>
        </div>
        <div class="universe" aria-hidden="true">
          <span class="orbit orbit--outer"><i class="satellite satellite--bead" /></span>
          <span class="orbit orbit--inner"><i class="satellite satellite--note">✓</i></span>
          <div class="egg"><span class="shine" /><span class="face"><i /><i /><b /></span></div>
          <span class="label label--ideas">好点子</span>
          <span class="label label--tools">小工具</span>
        </div>
      </section>

      <section id="products" class="products">
        <div class="section-head">
          <div><p>PRODUCTS / 01</p><h2>正在发光的产品</h2></div>
          <span>3 个产品 · 持续孵化中</span>
        </div>
        <div class="product-grid">
          <a
            v-for="product in products"
            :key="product.href"
            class="product-card"
            :class="`product-card--${product.className}`"
            :href="product.href"
          >
            <div class="card-top"><span>{{ product.number }}</span><span class="state"><i />现在可用</span></div>
            <div class="card-art" :class="`card-art--${product.className}`" aria-hidden="true">
              <template v-if="product.className === 'pindou'">
                <span v-for="index in 30" :key="index" class="bead" />
              </template>
              <div v-else-if="product.className === 'toolbox'" class="note-window">
                <span class="window-bar" /><strong>✓</strong><i /><i /><i />
              </div>
              <div v-else class="watermark-file"><span /><strong>DANDAN</strong></div>
            </div>
            <div class="card-body">
              <p class="eyebrow">{{ product.eyebrow }}</p>
              <h3>{{ product.title }}</h3>
              <p>{{ product.description }}</p>
              <ul><li v-for="tag in product.tags" :key="tag">{{ tag }}</li></ul>
              <span class="action">{{ product.action }} <i>↗</i></span>
            </div>
          </a>
        </div>
      </section>

      <section class="principles">
        <p>我们想做这样的产品</p>
        <div>
          <article><span>01</span><strong>小而具体</strong><p>不堆功能，先把一个真实问题解决好。</p></article>
          <article><span>02</span><strong>尊重数据</strong><p>能在本地完成的处理，就尽量留在本地。</p></article>
          <article><span>03</span><strong>好用也好看</strong><p>工具不该冷冰冰，每次打开都可以心情好一点。</p></article>
        </div>
      </section>
    </main>

    <footer><div><span class="footer-egg" /><strong>蛋蛋中心</strong><span>一个持续孵化中的产品中心</span></div><p>© Dandan Hub · dandanhub.vip</p></footer>
  </div>
</template>

<style scoped lang="scss">
.hub {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 82% 13%, rgba($hub-primary, 0.2), transparent 24%),
    radial-gradient(circle at 9% 42%, rgba($hub-accent, 0.14), transparent 23%),
    linear-gradient(165deg, #fffaf2, #f4f0e9 48%, #ebeefe);
}

.hub__sky {
  position: absolute;
  inset: 0;
  opacity: 0.28;
  pointer-events: none;
  background-image: radial-gradient(rgba(60, 58, 80, 0.16) 0.7px, transparent 0.7px);
  background-size: 17px 17px;
  mask-image: linear-gradient(to bottom, #000, transparent 75%);
}

.hub-header,
main,
footer {
  position: relative;
  z-index: 1;
  width: min($hub-content-wide, calc(100% - 32px));
  margin: 0 auto;
}

.hub-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0;

  nav {
    display: flex;
    gap: 3px;
    padding: 4px;
    overflow-x: auto;
    border: 1px solid rgba(91, 94, 125, 0.1);
    border-radius: $hub-radius-pill;
    background: rgba(#fff, 0.58);
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
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  > span:last-child { display: flex; flex-direction: column; line-height: 1.05; }
  strong { font-family: $hub-font-display; font-size: 17px; }
  small { margin-top: 5px; color: $hub-text-muted; font-size: 8px; font-weight: 800; letter-spacing: 0.19em; }
}

.brand__egg,
.footer-egg {
  position: relative;
  display: block;
  width: 42px;
  height: 48px;
  border-radius: 50% 50% 46% 46% / 58% 58% 42% 42%;
  background: linear-gradient(145deg, #fff, #e9ecff);
  box-shadow: 0 5px 14px rgba(69, 76, 135, 0.12);
  transform: rotate(-5deg);

  i { position: absolute; top: 21px; width: 4px; height: 5px; border-radius: 50%; background: $hub-text; }
  i:first-child { left: 14px; }
  i:last-child { right: 13px; }
}

.hero {
  display: grid;
  min-height: 570px;
  align-items: center;
  gap: 30px;
  padding: 48px 0 72px;

  h1 {
    margin: 16px 0 22px;
    font-family: $hub-font-display;
    font-size: clamp(43px, 11vw, 78px);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  h1 span { display: block; margin-top: 9px; color: $hub-primary; }
}

.kicker { color: $hub-accent; font-size: 10px; font-weight: 800; letter-spacing: 0.17em; }
.lead { max-width: 560px; color: $hub-text-secondary; font-size: clamp(15px, 2.6vw, 18px); line-height: 1.8; }
.jump {
  display: inline-flex;
  gap: 15px;
  margin-top: 26px;
  padding: 12px 18px;
  border: 1px solid rgba(73, 76, 112, 0.16);
  border-radius: $hub-radius-pill;
  background: rgba(#fff, 0.65);
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.universe { position: relative; width: min(78vw, 390px); height: min(78vw, 390px); margin: auto; }
.orbit { position: absolute; border: 1px dashed rgba($hub-primary, 0.3); border-radius: 50%; animation: spin 22s linear infinite; }
.orbit--outer { inset: 0; }
.orbit--inner { inset: 46px; animation-direction: reverse; animation-duration: 15s; }
.satellite { position: absolute; display: grid; place-items: center; font-style: normal; }
.satellite--bead { top: 37px; right: 25px; width: 30px; height: 30px; border: 5px solid #fff; border-radius: 50%; background: $hub-accent; }
.satellite--note { bottom: 20px; left: 12px; width: 42px; height: 42px; border: 3px solid #fff; border-radius: 12px; background: #f2cf75; }
.egg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 205px;
  overflow: hidden;
  border-radius: 50% 50% 46% 46% / 58% 58% 42% 42%;
  background: linear-gradient(145deg, #fff 18%, #eceeff 72%, #e2dff5);
  box-shadow: 0 34px 65px rgba(77, 79, 130, 0.2);
  transform: translate(-50%, -50%) rotate(6deg);
}
.shine { position: absolute; top: 32px; left: 31px; width: 35px; height: 70px; border-radius: 50%; background: rgba(#fff, 0.8); filter: blur(5px); }
.face { position: absolute; top: 96px; left: 50%; width: 64px; height: 36px; transform: translateX(-50%); }
.face i { position: absolute; width: 7px; height: 10px; border-radius: 50%; background: $hub-text; }
.face i:first-child { left: 10px; }
.face i:nth-child(2) { right: 10px; }
.face b { position: absolute; bottom: 4px; left: 50%; width: 18px; height: 9px; border-bottom: 3px solid $hub-accent; border-radius: 50%; transform: translateX(-50%); }
.label { position: absolute; padding: 7px 11px; border-radius: $hub-radius-pill; background: rgba(#fff, 0.78); color: $hub-text-secondary; font-size: 10px; font-weight: 700; }
.label--ideas { top: 26%; left: -2%; transform: rotate(-8deg); }
.label--tools { right: -2%; bottom: 26%; transform: rotate(7deg); }

.products { scroll-margin-top: 20px; padding: 30px 0 90px; }
.section-head { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 20px; }
.section-head p, .eyebrow { margin: 0 0 6px; color: $hub-accent; font-size: 9px; font-weight: 800; letter-spacing: 0.16em; }
.section-head h2 { margin: 0; font-family: $hub-font-display; font-size: clamp(27px, 5vw, 38px); }
.section-head > span { color: $hub-text-muted; font-size: 11px; }
.product-grid { display: grid; gap: 16px; }
.product-card {
  position: relative;
  display: flex;
  min-height: 580px;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid rgba(62, 62, 83, 0.12);
  border-radius: 28px;
  color: $hub-text;
  text-decoration: none;
  box-shadow: $hub-shadow-md;
  transition: transform 0.35s $hub-ease-out;
}
.product-card:hover { transform: translateY(-7px); }
.product-card--pindou { background: linear-gradient(160deg, #f2f4ff, #dfe4ff 48%, #fffaf4); }
.product-card--toolbox { background: linear-gradient(160deg, #fff9eb, #f9ead9 46%, #fff); }
.product-card--watermark { background: linear-gradient(160deg, #eef3ff, #dce6ff 46%, #f6f8ee); }
.card-top { position: absolute; inset: 18px 18px auto; z-index: 2; display: flex; justify-content: space-between; font: 800 11px $hub-font-display; }
.state { display: flex; gap: 6px; align-items: center; padding: 5px 9px; border-radius: $hub-radius-pill; background: rgba(#fff, 0.6); font: 700 9px $hub-font-body; }
.state i { width: 6px; height: 6px; border-radius: 50%; background: #4ba979; }
.card-art { position: relative; display: grid; height: 270px; place-items: center; overflow: hidden; }
.card-art--pindou { grid-template-columns: repeat(6, 28px); gap: 7px; place-content: center; transform: rotate(-5deg); }
.bead { width: 28px; height: 28px; border: 4px solid rgba(#fff, 0.7); border-radius: 50%; background: $hub-primary; box-shadow: 0 4px 10px rgba(48, 51, 99, 0.12); }
.bead:nth-child(3n) { background: $hub-accent; }
.bead:nth-child(4n) { background: #f2cf75; }
.bead:nth-child(5n) { background: #79bd9b; }
.note-window { position: relative; width: 218px; height: 158px; padding: 50px 22px 20px; border-radius: 17px; background: rgba(#fff, 0.85); box-shadow: 0 22px 45px rgba(90, 61, 35, 0.16); transform: rotate(3deg); }
.note-window i { display: block; width: 80%; height: 8px; margin-bottom: 15px; border-radius: 10px; background: #e8e0d7; }
.note-window strong { position: absolute; right: 20px; bottom: 20px; color: #43805b; }
.window-bar { position: absolute; inset: 0 0 auto; height: 36px; border-bottom: 1px solid #eee; }
.card-art--watermark { background: #173e9b; }
.watermark-file { width: 194px; height: 170px; padding: 15px; border: 4px solid #fff; border-radius: 10px; background: #f7f4e9; transform: rotate(4deg); }
.watermark-file span { display: block; height: 110px; background: linear-gradient(145deg, #f7ce74, #6f9ad9 50%, #304e89); }
.watermark-file strong { display: block; margin-top: -58px; text-align: center; color: rgba(21, 79, 209, 0.5); transform: rotate(-18deg); }
.card-body { display: flex; flex: 1; padding: 26px 25px 25px; flex-direction: column; border-top: 1px solid rgba(57, 57, 72, 0.08); background: rgba(#fff, 0.7); }
.card-body h3 { margin: 5px 0 13px; font: 800 clamp(27px, 5vw, 34px) $hub-font-display; letter-spacing: -0.035em; }
.card-body > p:not(.eyebrow) { margin: 0; color: $hub-text-secondary; font-size: 12px; line-height: 1.75; }
.card-body ul { display: flex; flex-wrap: wrap; gap: 6px; margin: 17px 0 24px; padding: 0; list-style: none; }
.card-body li { padding: 5px 9px; border-radius: $hub-radius-pill; background: rgba(#fff, 0.55); color: $hub-text-secondary; font-size: 9px; }
.action { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 17px; border-top: 1px solid rgba(56, 56, 72, 0.1); font-size: 12px; font-weight: 800; }
.action i { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 50%; background: $hub-primary; color: #fff; font-style: normal; }

.principles { padding: 10px 0 80px; }
.principles > p { color: $hub-text-muted; font-size: 11px; font-weight: 700; }
.principles > div { display: grid; gap: 10px; }
.principles article { position: relative; padding: 21px; border: 1px solid rgba(62, 61, 80, 0.1); border-radius: 19px; background: rgba(#fff, 0.5); }
.principles article span { position: absolute; top: 18px; right: 18px; color: rgba(78, 80, 114, 0.3); font: 800 10px $hub-font-display; }
.principles strong { font: 700 16px $hub-font-display; }
.principles article p { margin: 7px 0 0; color: $hub-text-muted; font-size: 11px; }

footer { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 25px 0 calc(25px + var(--hub-safe-bottom)); border-top: 1px solid rgba(64, 62, 79, 0.1); color: $hub-text-muted; font-size: 10px; }
footer > div { display: flex; align-items: center; gap: 8px; }
footer p { margin: 0; }
.footer-egg { width: 16px; height: 20px; background: $hub-primary; }

@media (min-width: 760px) {
  .hero { grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.7fr); }
  .principles > div { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 980px) { .product-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 759px) {
  .hero { min-height: auto; }
  .universe { order: -1; }
  .egg { width: 132px; height: 170px; }
  .face { top: 80px; }
}
@media (max-width: 560px) {
  .hub-header { align-items: flex-start; }
  .hub-header nav { max-width: 55vw; }
  .section-head > span { display: none; }
  footer { align-items: flex-start; flex-direction: column; }
}
@keyframes spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .orbit { animation: none; } }
</style>
