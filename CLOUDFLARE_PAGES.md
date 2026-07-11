# Cloudflare Pages Deployment

Use these settings in Cloudflare Pages:

- Framework preset: None
- Build command: `pnpm run build:pages`
- Build output directory: `dist/pages`
- Node.js version: `22.13.0`
- Compatibility date: `2026-05-15`
- Compatibility flags: `nodejs_compat`

If the site shows HTTP 404, the usual cause is that Cloudflare deployed the wrong output directory. This project is not a plain static HTML site. It needs the generated Pages Worker at `dist/pages/_worker.js`.

## 中文说明

Cloudflare Pages 请这样设置：

- 框架预设：None
- 构建命令：`pnpm run build:pages`
- 构建输出目录：`dist/pages`
- Node.js 版本：`22.13.0`
- 兼容日期：`2026-05-15`
- 兼容标记：`nodejs_compat`

如果网页是 404，通常是 Cloudflare 发布目录填错了。这个项目不是单纯静态 HTML，它需要构建后生成的 `dist/pages/_worker.js` 来渲染页面。
