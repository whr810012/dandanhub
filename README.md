# Dandan Hub

`dandanhub.vip` 的根站项目，承载产品中心和蛋蛋工具箱下载页。

## 本地开发

```bash
npm install
npm run dev
```

默认端口为 `5174`。

## 路径职责

- `/`：Dandan Hub 产品中心
- `/toolbox`：蛋蛋便签下载页
- `/pindou/*`：Worker 反代到独立 `pindou-web`（Cloudflare Pages）
- `/watermark/*`：反代到 `dandan-watermark`
- `/caption/*`：反代到 `dandan-caption`

## 部署（Cloudflare Pages）

1. 在 Cloudflare 创建 **Pages** 项目（不要用 Workers + `wrangler deploy`），连接本仓库，配置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Deploy command**（二选一）：
     - **推荐：留空**（Pages Git 集成会自动上传）
     - 若系统强制填写，改成：`npx wrangler pages deploy dist --project-name=dandanhub`  
       或：`npm run deploy`
   - **Root directory**: 仓库根（若 monorepo 则填 `dandanhub`）
   - **Node version**: `20`（或 22）
2. 先部署三个子站，记下各自 `https://<name>.pages.dev`
3. 在本项目 **Settings → Environment variables**（Production）配置：

| 变量 | 示例 | 说明 |
|------|------|------|
| `PINDOU_ORIGIN` | `https://pindou-web.pages.dev` | 不要末尾 `/` |
| `WATERMARK_ORIGIN` | `https://dandan-watermark.pages.dev` | 同上 |
| `CAPTION_ORIGIN` | `https://dandan-caption.pages.dev` | 同上 |

4. 自定义域绑定 `dandanhub.vip`；阿里云 DNS 将 `@` / `www` **CNAME** 到 Pages 提供的 `*.pages.dev`（按控制台提示）。
5. 反代逻辑见 [`functions/_middleware.ts`](functions/_middleware.ts)；仅 `/pindou`、`/watermark`、`/caption` 走 Worker（[`public/_routes.json`](public/_routes.json)）。

本地预览 Functions 可用：`npx wrangler pages dev dist`（需先 `npm run build`）。

### 部署失败排查

若日志出现 `npx wrangler deploy` 且报错 Vite 版本不够：

- 原因：把项目当成了 **Workers**，`wrangler deploy` 会走 Vite 插件且要求 Vite ≥ 6。
- 处理：在项目设置里把 **Deploy command 清空**；或改为  
  `npx wrangler pages deploy dist --project-name=dandanhub`  
  （本仓库 Vite 已升到 6，但仍推荐 Pages 自动部署，不要用 `wrangler deploy`。）

### 历史：Netlify

[`netlify.toml`](netlify.toml) 仍可用于 Netlify 双跑对照；上游地址需改成对应 `*.netlify.app`。稳定切到 Cloudflare 后可停用 Netlify。

## 下载产物

下载页引用以下文件，但安装包不提交到当前源码仓库：

- `public/downloads/dandan-note-0.1.2-x64-setup.exe`
- `public/downloads/dandan-note-0.1.2-x64-portable.exe`

部署前请从 `dandan-note` 的发布流程复制或下载对应产物到上述位置。
