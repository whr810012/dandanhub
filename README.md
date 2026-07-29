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
- `/pindou/*`：Worker 反代到独立 `pindou-web`
- `/watermark/*`：反代到 `dandan-watermark`
- `/caption/*`：反代到 `dandan-caption`

## 部署（Cloudflare Workers + Assets）

当前方案适配控制台默认的 **`npx wrangler deploy`**（不要改成 pages deploy，除非你清空 Deploy 走纯 Pages）。

1. Cloudflare 连接本仓库，配置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`（若界面有此项）
   - **Deploy command**: `npx wrangler deploy`（可保持现状）
   - **Root directory**: `dandanhub`（monorepo 时）
   - **Node**: `20` 或 `22`
2. 先部署三个子站，记下 `https://<name>.pages.dev`
3. **Settings → Variables**（Production）配置：

| 变量 | 示例 |
|------|------|
| `PINDOU_ORIGIN` | `https://pindou-web.pages.dev` |
| `WATERMARK_ORIGIN` | `https://dandan-watermark.pages.dev` |
| `CAPTION_ORIGIN` | `https://dandan-caption.pages.dev` |

（不要末尾 `/`）

4. 自定义域绑到该 Worker；阿里云 DNS CNAME 按控制台提示。
5. 反代入口：[`workers/site.ts`](workers/site.ts)；静态资源：`dist`（见 [`wrangler.toml`](wrangler.toml)）。

本地：`npm run build && npx wrangler dev`

### 历史：Netlify / Pages Functions

[`netlify.toml`](netlify.toml) 仍可双跑。旧的 `functions/_middleware.ts` 已弃用。

## 下载产物

下载页引用以下文件，但安装包不提交到当前源码仓库：

- `public/downloads/dandan-note-0.1.2-x64-setup.exe`
- `public/downloads/dandan-note-0.1.2-x64-portable.exe`

部署前请从 `dandan-note` 的发布流程复制或下载对应产物到上述位置。
