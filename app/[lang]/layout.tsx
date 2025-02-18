import { ReactNode } from "react";

import { NextIntlClientProvider, useMessages } from "next-intl";

import type { Metadata } from "next";

import { inter } from "@/shared/fonts";
import { LanguageCode } from "@/shared/types";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const title: any = {
  ru: "Приватные Читы – Ваш путь к доминированию в игре",
  en: "Private Cheats – Your way to dominate the game",
};

export async function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: title[lang],
    description: "The bets cheats in the world!",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export interface IGlobalLayoutProps {
  children: ReactNode;
  params: { lang: LanguageCode };
}

export default function RootLayout({
  children,
  params,
}: Readonly<IGlobalLayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Toaster />
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NKE9G4BE2R" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NKE9G4BE2R');
        `}
        </Script>
        <Script>
          {` (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98794774, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98794774"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
