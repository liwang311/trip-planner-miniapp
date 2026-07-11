# Along the Coast: A 25-Day Journey Across China's Seaside Cities

English | [简体中文](README.md)

![Along the Coast — A 25-Day Journey](public/og.png)

This is an interactive travel-guide website with a cinematic dark visual style. It presents a 25-day, 24-night coastal journey for two people, departing from Chengdu and running from July 20 to August 13, 2026.

The route covers Zhuhai, a Macau day trip, Chaozhou, Nan'ao Island, Shantou, Qingdao, Rongcheng, Weihai, and Yantai before returning to Chengdu by direct flight. The website combines daily itineraries, destination photography, local food, transportation, accommodation, and per-person budget estimates in one responsive experience.

## Features

- A complete 25-day timeline with concise daily travel-note cards
- Full-screen visual chapters for eight travel cities
- Linked destination cards and city-specific daily plans
- Interactive food photography and recommendations by city
- Per-person budget categories, amounts, and percentage breakdowns
- Responsive desktop and mobile layouts
- A cinematic midnight-blue and warm-gold design system
- A double-click Windows launcher

## Route

```text
Chengdu → Zhuhai (Macau day trip) → Chaozhou → Nan'ao Island → Shantou
        → Qingdao → Rongcheng → Weihai → Yantai → Chengdu
```

Travel dates: `2026-07-20` to `2026-08-13`

## Run Locally

### Requirements

- Node.js `>= 22.13.0`
- pnpm (Corepack is recommended)

### Install and start

```bash
corepack enable
pnpm install
pnpm dev
```

To use the same fixed local address as the project:

```bash
pnpm exec vinext dev --host localhost --port 4173 --strictPort
```

Then open [http://localhost:4173](http://localhost:4173).

### Double-click launcher on Windows

Install Node.js and make sure `pnpm` is available. Then double-click:

```text
Launch-Coastbound-China.bat
```

The launcher installs missing dependencies, starts the local server in the background, and opens the website.

## Build

```bash
pnpm build
```

## Project Structure

```text
.
├─ app/                     # Page components, itinerary data, and global styles
├─ public/assets/           # Destination, food, and hero images
├─ build/                   # Sites/Vite build plugin
├─ worker/                  # Cloudflare/Vinext worker entry
├─ .openai/hosting.json     # OpenAI Sites binding declaration
├─ design-qa.md             # Visual and interaction QA record
├─ package.json             # Dependencies and scripts
├─ vite.config.ts           # Vinext/Vite configuration
└─ Launch-Coastbound-China.bat # Windows double-click launcher
```

## Budget Assumptions

- Budget figures are displayed per person.
- Accommodation is split between two travelers sharing one room.
- Food is estimated at CNY 200 per day for two people, or CNY 100 per person per day.
- Flight figures include the airport construction and fuel surcharge assumed by the project.
- All prices are reference values captured during planning and are not live or guaranteed fares.

## Image and Content Notice

- Images combine authorized project assets and generated visuals and are intended for this travel-guide presentation.
- Island ferries and marine activities depend on weather and service notices; verify them again before traveling.
- Flight, train, hotel, attraction, and price information may change. Always confirm details on the booking page.

## About GitHub Pages

This is a Vinext application rather than a single static HTML file. GitHub is suitable for storing and presenting the source code, but public hosting should use OpenAI Sites, Cloudflare Workers/Pages, or another platform that supports Node/Vite applications.

## License

This project is currently intended for personal trip planning and portfolio display. Before allowing reuse, add an appropriate open-source license and verify redistribution rights for all image assets.
