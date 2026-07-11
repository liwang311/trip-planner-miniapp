import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "午夜海岸线｜25天南北海岸之旅",
  description:
    "成都出发，经珠海、潮州、南澳岛、汕头、青岛、荣成、威海与烟台的25天24晚双人旅行攻略。",
  openGraph: {
    title: "沿海而行 · 25天南北海岸之旅",
    description:
      "美景、美食、每日行程、交通住宿与两人预算，一页看完整段旅程。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "沿海而行 · 25天南北海岸之旅",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
