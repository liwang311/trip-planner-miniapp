# Cloudflare Pages 部署

本项目现在是标准 Vite 静态站点，构建后会生成 `dist/index.html`。

Cloudflare 请填写：

- Framework preset：`Vite`
- Build command：`pnpm run build`
- Deploy command：`npx wrangler pages deploy dist --project-name=trip-planner-miniapp`
- Non-production deploy command：可填写同一条命令
- Root directory / Path：`/`
- Node.js：`22.13.0` 或更高版本

如果使用传统 Cloudflare Pages 设置页，并出现“Build output directory”，请填写 `dist`。

不需要填写 `nodejs_compat`，也不需要部署 `_worker.js`。若旧构建仍失败，请先清除 Build cache，再重新部署最新的 GitHub 提交。

## Vercel

仓库已包含 `vercel.json`，Vercel 会执行 `pnpm run build` 并发布 `dist`。重新导入或重新部署最新提交即可。

## English

This is now a standard Vite static site and produces `dist/index.html`.

- Framework preset: `Vite`
- Build command: `pnpm run build`
- Cloudflare deploy command: `npx wrangler pages deploy dist --project-name=trip-planner-miniapp`
- Root directory: `/`
- Build output directory (when shown): `dist`

The included `vercel.json` configures Vercel to build with `pnpm run build` and publish `dist`.
