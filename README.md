# 沿海而行：25天南北海岸之旅

[English](README_EN.md) | 简体中文

![沿海而行 · 25天南北海岸之旅](public/og.png)

这是一个电影感深色风格的交互式旅行攻略网站，展示2026年7月20日至8月13日、从成都出发的25天24晚双人海岸旅行。

路线覆盖珠海、澳门当天往返、潮州、南澳岛、汕头、青岛、荣成、威海和烟台，最后从烟台直飞成都。网站将每日行程、城市美景、当地美食、交通住宿和人均预算整合在同一页面中。

## 主要功能

- 25天每日行程时间线及“小红书式”今日攻略卡
- 八座旅行城市的全屏视觉章节
- 城市卡片与右侧完整日程联动
- 点击城市切换对应的代表美食和图片
- 人均预算分类、金额和占比展示
- 桌面端与移动端响应式布局
- 电影感深蓝与暖金视觉体系
- Windows 双击启动入口

## 旅行路线

```text
成都 → 珠海（澳门当天往返）→ 潮州 → 南澳岛 → 汕头
     → 青岛 → 荣成 → 威海 → 烟台 → 成都
```

旅行日期：`2026-07-20` 至 `2026-08-13`

## 本地运行

### 环境要求

- Node.js `>= 22.13.0`
- pnpm（推荐使用 Corepack 启用）

### 安装与启动

```bash
corepack enable
pnpm install
pnpm dev
```

默认开发地址由终端显示。若希望固定为本项目使用的地址：

```bash
pnpm exec vinext dev --host localhost --port 4173 --strictPort
```

然后访问 [http://localhost:4173](http://localhost:4173)。

### Windows 双击启动

首次使用前请安装 Node.js，并确保 `pnpm` 可用。之后双击：

```text
Launch-Coastbound-China.bat
```

启动器会在缺少依赖时先执行安装，然后在后台启动网站并打开浏览器。

## 构建验证

```bash
pnpm build
```

## 项目结构

```text
.
├─ app/                     # 页面组件、行程数据和全局样式
├─ public/assets/           # 城市、美食和主视觉图片
├─ build/                   # Sites/Vite 构建插件
├─ worker/                  # Cloudflare/Vinext Worker 入口
├─ .openai/hosting.json     # OpenAI Sites 绑定声明
├─ design-qa.md             # 视觉与交互验收记录
├─ package.json             # 依赖和脚本
├─ vite.config.ts           # Vinext/Vite 配置
└─ Launch-Coastbound-China.bat # Windows 双击启动入口
```

## 预算口径

- 网站按人均展示预算。
- 酒店按两人合住一间后平摊。
- 餐饮按照每天两人¥200，即人均每天¥100计算。
- 机票价格包含项目设定的机建燃油费。
- 所有价格均为查询时的参考基线，并不代表实时锁价。

## 图片与内容声明

- 页面图片由项目授权素材和生成视觉组成，仅用于本旅行攻略展示。
- 海岛、轮渡和海上项目受天气及停航公告影响，出行前应再次核实。
- 航班、动车、酒店、景点及价格信息可能随时间变化，请以下单页面为准。

## 关于 GitHub Pages

本项目是 Vinext 应用，不是单个静态 HTML 文件，不能直接通过双击 `index.html` 运行。GitHub 仓库适合保存和展示源代码；如需公开访问网站，建议部署到 OpenAI Sites、Cloudflare Workers/Pages 或其他支持 Node/Vite 应用的平台。

## 许可证

本项目当前仅作为个人旅行规划与作品展示使用。若准备开放复用，请在发布前补充合适的开源许可证，并确认所有图片素材的再分发权限。
