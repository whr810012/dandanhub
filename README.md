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
- `/pindou/*`：代理到独立 `pindou-web`
- `/watermark/*`：代理到独立 `watermark-web`

Pindou 的 Netlify 上游目前为 `https://dandanpindou.netlify.app`。如果站点名称变化，需要同步修改 `netlify.toml` 中 `/pindou/*` 的目标地址。

## 下载产物

下载页引用以下文件，但安装包不提交到当前源码仓库：

- `public/downloads/dandan-note-0.1.2-x64-setup.exe`
- `public/downloads/dandan-note-0.1.2-x64-portable.exe`

部署前请从 `dandan-note` 的发布流程复制或下载对应产物到上述位置。
