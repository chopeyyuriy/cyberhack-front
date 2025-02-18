import { FC, ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { ISocial, IFooterNavigation } from "@/shared/constants";

import {
  DiscordIcon,
  FooterNavigation,
  MainContainer,
  PartnersBanner,
  SeparatorLine,
  TelegramIcon,
  VKIcon,
  YoutubeIcon,
} from "@/shared";

import "./styles.scss";

export interface IAppFooterProps {
  children?: ReactNode;
}

const AppFooter: FC = () => {
  const t = useTranslations('footer');

  const navigation: IFooterNavigation = {
    title: t('nav.label'),
    items: [
      {
        title: t('nav.catalog'),
        href: "/catalog",
      },
      {
        title: t('nav.accounts'),
        href: "/accounts",
      },
      {
        title: t('nav.news'),
        href: "/news",
      },
      {
        title: t('nav.help'),
        href: "/faq",
      },
    ],
  };
  
  const sundry = {
    title: t('other.label'),
    items: [
      {
        title: t('other.agreement'),
        href: "/user-agreement",
      },
      {
        title: t('other.policy'),
        href: "/privacy-policy",
      },
      {
        title: t('other.warranty'),
        href: "/guarantees",
      },
    ],
  };

  const socials: ISocial[] = [
    {
      icon: TelegramIcon,
      href: "https://t.me/cyberhaks",
    },
    {
      icon: YoutubeIcon,
      href: "https://www.youtube.com/channel/UCk3U-VbUfU-NbPo3ZcunN_g",
    },
    {
      icon: DiscordIcon,
      href: "https://discord.gg/Xbmy5fAbd5",
    },
    {
      icon: VKIcon,
      href: "https://vk.com/cyberhaks",
    },
  ];

  return (
    <footer className="footer">
      <Image
        src={require("@/shared/assets/icons/footer-slug.svg")}
        width={688}
        height={98}
        className="footer__slug"
        alt="footer-slug"
      />
      <Image
        src={require("@/shared/assets/icons/footer-slug.svg")}
        width={688}
        height={98}
        className="footer__slug"
        alt="footer-slug"
      />

      <MainContainer classes="footer__container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <a href="/">
              <Image
                src={require("@/shared/assets/icons/logo.svg")}
                width={92}
                height={40}
                alt="logo"
                className="footer__logo"
              />
            </a>
            <p className="footer__description">
              {t('text')}
            </p>
          </div>
          <ul className="footer-socials__list">
            {socials.map((item, index) => (
              <a href={item.href} target="_blank" className="" key={index}>
                <item.icon />
              </a>
            ))}
          </ul>
          <div className="footer__inline">
            <span className="footer__description">{t('cooperation.start')} - </span>
            <Image
              src={require("@/shared/assets/images/home/footer/elite.png")}
              width={72}
              height={24}
              alt="partner"
              className="footer__partner"
            />
          </div>
        </div>
        <FooterNavigation title={navigation.title} list={navigation.items} />
        <FooterNavigation title={sundry.title} list={sundry.items} />
        <PartnersBanner />
      </MainContainer>
      <MainContainer classes="footer__rights">
        <SeparatorLine />
        <span className="footer__description">
          Copyright 2024-2025, Сyberhack. All Rights Reserved.
        </span>
      </MainContainer>
    </footer>
  );
};

export default AppFooter;
