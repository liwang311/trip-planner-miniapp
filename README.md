# 车立子的个人旅游网站

[English](README_EN.md) | 简体中文

![25天南北海岸之旅](public/og.png)

这是车立子的个人旅行攻略网站，记录2026年7月20日至8月13日、从成都出发的25天24晚南北海岸之旅。

路线覆盖珠海、潮州、南澳岛、汕头、青岛、荣成、威海和烟台，并包含澳门当天往返行程。

## 主要功能

- 25天每日行程时间线与旅行笔记
- 八座城市的景点、住宿和交通信息
- 每座城市6道必吃美食及独立图片
- 城市卡片与详细日程联动切换
- 机票、酒店、餐饮、动车和景点预算可视化
- 固定顶部导航与平滑锚点跳转
- 桌面端、平板和手机响应式布局
- 小红书主页联系信息：`@车立子`

## 技术栈

- React 19
- TypeScript
- Vite 8
- Phosphor Icons
- Tailwind CSS/PostCSS

## 本地运行

环境要求：Node.js `>= 22.13.0`，推荐使用 pnpm。

```bash
corepack enable
pnpm install
pnpm dev
```

浏览器访问终端显示的本地地址。

Windows 用户也可以双击：

```text
Launch-Coastbound-China.bat
```

启动器会在缺少依赖时自动安装，并在 `http://localhost:4173` 打开网站。

## 构建与检查

```bash
pnpm build
pnpm lint
```

构建结果位于 `dist/`，该目录由 `.gitignore` 排除，不应提交到 GitHub。

## 项目结构

```text
.
├─ app/
│  ├─ page.tsx             # 页面、行程、美食和预算数据
│  └─ globals.css          # 全局样式与响应式布局
├─ public/assets/          # 城市、美食和主视觉图片
├─ src/main.tsx            # React 浏览器入口
├─ index.html              # Vite HTML 入口及网页元信息
├─ package.json            # 依赖与运行脚本
├─ vite.config.ts          # Vite 配置
├─ vercel.json             # Vercel 静态部署配置
├─ wrangler.jsonc          # Cloudflare Pages 配置
└─ CLOUDFLARE_PAGES.md     # Cloudflare/Vercel 部署说明
```

## 上传 GitHub

目标目录本身已经是 Git 仓库，并已配置远程仓库。提交前建议检查：

```bash
git status
git add app public src index.html README.md README_EN.md package.json pnpm-lock.yaml vite.config.ts .gitignore
git commit -m "Update travel site design and content"
git push origin main
```

如果使用 GitHub Desktop，选择本目录作为本地仓库，检查变更后提交并 Push 即可。

不要上传 `node_modules/`、`dist/`、日志、环境变量或本机缓存；这些内容已写入 `.gitignore`。

## 部署

- Cloudflare Pages：构建命令 `pnpm run build`，输出目录 `dist`
- Vercel：仓库根目录已包含 `vercel.json`
- GitHub Pages：项目使用相对资源路径，构建后的 `dist` 可部署在仓库子路径

更详细的 Cloudflare 配置见 [CLOUDFLARE_PAGES.md](CLOUDFLARE_PAGES.md)。

## 说明

本仓库用于个人旅行规划和作品展示。公开复用前，请确认图片素材的再分发权限并补充合适的开源许可证。
