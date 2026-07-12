# Chelizi's Personal Travel Website

English | [简体中文](README.md)

![A 25-Day Journey Along China's Coast](public/og.png)

An interactive personal travel guide for a 25-day, 24-night coastal journey from Chengdu, running from July 20 to August 13, 2026.

The route covers Zhuhai, Chaozhou, Nan'ao Island, Shantou, Qingdao, Rongcheng, Weihai, and Yantai, with a day trip to Macau.

## Features

- Complete 25-day itinerary and daily travel notes
- Destination, accommodation, and transport information for eight cities
- Six city-specific food recommendations with imagery per destination
- Interactive city and itinerary switching
- Visual budget cards for flights, hotels, food, trains, and attractions
- Persistent navigation with smooth anchor scrolling
- Responsive desktop, tablet, and mobile layouts
- Xiaohongshu contact: `@车立子`

## Stack

- React 19
- TypeScript
- Vite 8
- Phosphor Icons
- Tailwind CSS/PostCSS

## Local Development

Requires Node.js `>= 22.13.0` and pnpm.

```bash
corepack enable
pnpm install
pnpm dev
```

Windows users can also double-click `Launch-Coastbound-China.bat`. The launcher installs missing dependencies and opens `http://localhost:4173`.

## Build and Lint

```bash
pnpm build
pnpm lint
```

The production build is generated in `dist/`, which is intentionally excluded from Git.

## Repository Structure

```text
app/                 Page content, travel data, and global styles
public/assets/       Destination, food, and hero imagery
src/main.tsx         React browser entry
index.html           Vite HTML entry and metadata
vercel.json          Vercel deployment configuration
wrangler.jsonc       Cloudflare Pages configuration
```

## GitHub

The folder is already a Git repository with a configured remote. Review the changes before committing:

```bash
git status
git add app public src index.html README.md README_EN.md package.json pnpm-lock.yaml vite.config.ts .gitignore
git commit -m "Update travel site design and content"
git push origin main
```

Do not commit `node_modules/`, `dist/`, logs, local caches, or environment files. They are covered by `.gitignore`.

## Deployment

- Cloudflare Pages: build command `pnpm run build`, output directory `dist`
- Vercel: configured through `vercel.json`
- GitHub Pages: relative asset paths make the production build compatible with repository subpaths

See [CLOUDFLARE_PAGES.md](CLOUDFLARE_PAGES.md) for deployment details.

## Notice

This repository is intended for personal travel planning and portfolio display. Verify redistribution rights for all imagery and add a suitable license before allowing public reuse.
