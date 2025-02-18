import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import type { Metadata } from "next";

import { inter } from "@/shared/fonts";
import { LanguageCode } from "@/shared/types";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Script from "next/script";

const title: any = {
  ru: "Приватные Читы – Ваш путь к доминированию в игре",
  en: "Private Cheats – Your way to dominate the game",
};

export async function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: title[lang],
    description: "The best cheats in the world!",
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
      <head>
        {/* Google Tag Manager */}
        <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5DKTF84G');
            `,
            }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DKTF84G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      <Toaster />
      <NextIntlClientProvider locale={params.lang} messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
