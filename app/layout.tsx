import type { ReactNode } from "react";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";

const oss = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-oss",
  display: "swap",
});

const mont = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mont",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${oss.variable} ${mont.variable}`}>
      <head>
        <title>Ля Казино (La Casino) — официальный сайт, рабочее зеркало, играть онлайн</title>
        <meta
          name="description"
          content="La Casino (Ля Казино) — официальный сайт онлайн казино: рабочее зеркало на сегодня, вход и регистрация, бонус до 225% + 1000 ФС, слоты и live-игры. Играйте в Ля Казино официально онлайн."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://la-casino-official.example/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la-casino-official.example/" />
        <meta property="og:title" content="Ля Казино (La Casino) — официальный сайт, рабочее зеркало, играть онлайн" />
        <meta
          property="og:description"
          content="La Casino (Ля Казино) — официальный сайт онлайн казино: рабочее зеркало на сегодня, бонус до 225% + 1000 ФС, слоты и live-игры."
        />
        <meta property="og:image" content="https://la-casino-official.example/img/hero.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="La Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ля Казино (La Casino) — официальный сайт, рабочее зеркало, играть онлайн" />
        <meta
          name="twitter:description"
          content="La Casino (Ля Казино) — рабочее зеркало на сегодня, бонус до 225% + 1000 ФС, слоты и live-игры. Играйте в Ля Казино официально."
        />
        <meta name="twitter:image" content="https://la-casino-official.example/img/hero.jpg" />
        <meta name="theme-color" content="#1e0a14" />
      </head>
      <body>{children}</body>
    </html>
  );
}
