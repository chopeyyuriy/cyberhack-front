import { DriverItem, DriversAsideMenu, DriversBanner } from "@/entities/Driver";
import { MainContainer, SeparatorLine } from "@/shared";
import { Fragment } from "react";
import { useTranslations } from "next-intl";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import Image from "next/image";

const meta = {
  ru: {
    title: "CyberHack - Часто задаваемые вопросы о Читах, Спуферах и Игровых Аккаунтах",
    keywords: "FAQ читы, вопросы о спуферах, частые вопросы, гейминг аккаунты, читы для игр, как установить читы, обход анти-чит систем",
    description: "На странице FAQ от CyberHack вы найдете ответы на самые популярные вопросы о читах, спуферах и игровых аккаунтах. Узнайте, как безопасно использовать наши инструменты, обходить анти-чит системы и избегать банов.",
    openGraph: {
      title: "CyberHack - Часто задаваемые вопросы о Читах, Спуферах и Игровых Аккаунтах",
      description: "На странице FAQ от CyberHack вы найдете ответы на самые популярные вопросы о читах, спуферах и игровых аккаунтах. Узнайте, как безопасно использовать наши инструменты, обходить анти-чит системы и избегать банов."
    }
  },
  en: {
    title: "CyberHack - Frequently Asked Questions about Cheats, Spoofers, and Game Accounts",
    keywords: "FAQ cheats, questions about spoofers, common questions, gaming accounts, game cheats, how to install cheats, anti-cheat bypass",
    description: "The CyberHack FAQ page provides answers to the most common questions about cheats, spoofers, and game accounts. Learn how to safely use our tools, bypass anti-cheat systems, and avoid bans.",
    openGraph: {
      title: "CyberHack - Frequently Asked Questions about Cheats, Spoofers, and Game Accounts",
      description: "The CyberHack FAQ page provides answers to the most common questions about cheats, spoofers, and game accounts. Learn how to safely use our tools, bypass anti-cheat systems, and avoid bans."
    }
  }
}

export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return meta[params.lang]
}

export default function FAQPage() {
  const t = useTranslations('faq');

  const drivers = [
    [
      {
        icon: "vscode",
        title: "Microsoft Visual C++ 2005-2019",
        text: t("packet"),
        href: "https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/",
      },
      {
        icon: "directx",
        title: "Directx 12",
        text: t("packet"),
        href: "https://download.microsoft.com/download/1/7/1/1718CCC4-6315-4D8E-9543-8E28A4E18C4C/dxwebsetup.exe",
      },
      {
        icon: "dotnet",
        title: "Microsoft Net Framework 4.7.1",
        text: t("packet"),
        href: "https://www.microsoft.com/ru-RU/download/details.aspx?id=55167",
      },
      {
        icon: "nvidea",
        title: "NVIDEA",
        text: t("packet"),
        href: "https://www.nvidia.ru/Download/index.aspx?lang=ru",
      },
      {
        icon: "amd",
        title: "AMD",
        text: t("packet"),
        href: "https://www.amd.com/ru/support",
      },
      {
        icon: "driverpack",
        title: "DriverPack",
        text: t("packet"),
        href: "https://driverpack.io/",
      },
    ],
    [
      {
        icon: "wss",
        title: t('drivers.wss'),
        text: t("packet"),
        href: "https://yadi.sk/d/WnIQNa5k3TLPsq",
      },
      {
        icon: "defender",
        title: t('drivers.defender'),
        text: t("packet"),
        href: "https://www.softportal.com/software-43861-defender-control.html",
      },
      {
        icon: "uac",
        title: t('drivers.uac'),
        text: t("packet"),
        href: "https://disk.yandex.ru/d/jDyGM3TN3TLPt2",
      },
      {
        icon: "boot",
        title: t('drivers.boot'),
        text: t("packet"),
        href: "https://www.youtube.com/watch?v=RjwT85icNHg",
      },
      {
        icon: "uefi",
        title: t('drivers.uefi'),
        text: t("packet"),
        href: "https://learn.microsoft.com/ru-ru/windows-hardware/manufacture/desktop/boot-to-uefi-mode-or-legacy-bios-mode?view=windows-11",
      }
    ],
    [
      {
        icon: "anydesk",
        title: t('drivers.anyDesk'),
        text: t("packet"),
        href: "https://anydesk.com/ru",
      },
      {
        icon: "screen",
        title: t('drivers.screen'),
        text: t("packet"),
        href: "https://app.prntscr.com/build/setup-lightshot.exe",
      },
      {
        icon: "teamviewer",
        title: t('drivers.teamViewer'),
        text: t("packet"),
        href: "https://www.teamviewer.com/",
      },
      {
        icon: "winrar",
        title: t('drivers.winRar'),
        text: t("packet"),
        href: "https://winrar-fansite.com/go/?https://rarlab.com/rar/winrar-x64-570ru.exe",
      }
    ]
  ];

  return (
    <MainContainer>
      <div className="faq-page mt-16 flex flex-col gap-11">
        <Image
          src={require("@/shared/assets/images/faq/skin.png")}
          alt="image"
          width={750}
          height={540}
          className="max-md:!hight-[582px] max-md:!width-[452px] absolute right-0 !min-w-[582px] translate-x-1/4 max-md:translate-y-1/4"
        />
        <div className="faq-page__wrapper flex flex-col gap-2">
          <h2
            className={cn(
              "faq-page__title text-[34px] text-[#C0C6D1]",
              unbounded.className,
            )}
          >
            {t('title')}
          </h2>
          <p className="faq-page__description text-[15px] font-light text-[#595962]" dangerouslySetInnerHTML={{ __html: t('description') }}></p>
        </div>

        <div className="faq-page__container flex items-start gap-5 max-md:flex-col">
          <DriversAsideMenu current={0} />
          <div className="faq-page__main flex w-full flex-col gap-6 rounded-md bg-[#0C0D10]/80 p-6 backdrop-blur-[12px]">
            <h4
              className={cn(
                "faq-page__subtitle text-[11px] text-[#8A8A98]",
                unbounded.className,
              )}
            >
              {t('recomend')}
            </h4>
            <ul className="haq-page__list flex w-full flex-col gap-[6px] ">
              {drivers[0].map((item, index) => (
                <Fragment key={index}>
                  <DriverItem 
                    {...item} 
                    button={t('download')}
                  />
                  {index !== drivers.length - 1 && <SeparatorLine light />}
                </Fragment>
              ))}
            </ul>
            <DriversBanner />
            <h4
              className={cn(
                "faq-page__subtitle text-[11px] text-[#8A8A98]",
                unbounded.className,
              )}
            >
              {t('recomend')}
            </h4>
            <ul className="haq-page__list flex w-full flex-col gap-[6px] ">
              {drivers[1].map((item, index) => (
                <Fragment key={index}>
                  <DriverItem 
                    {...item} 
                    button={t('view')}
                  />
                  {index !== drivers.length - 1 && <SeparatorLine light />}
                </Fragment>
              ))}
            </ul>
            <h4
              className={cn(
                "faq-page__subtitle text-[11px] text-[#8A8A98]",
                unbounded.className,
              )}
            >
              {t('help')}
            </h4>
            <ul className="haq-page__list flex w-full flex-col gap-[6px] ">
              {drivers[2].map((item, index) => (
                <Fragment key={index}>
                  <DriverItem 
                    {...item} 
                    button={t('download')}
                  />
                  {index !== drivers.length - 1 && <SeparatorLine light />}
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
