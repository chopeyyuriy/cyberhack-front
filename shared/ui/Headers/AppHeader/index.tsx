"use client";

import { FC, ReactNode } from "react";

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

import { INavigationListItem } from "@/shared/types";
import { MainContainer } from "@/shared/ui";

import Logo from "@/shared/assets/icons/logo.svg";

import MenuIcon from "@/shared/assets/icons/menu.svg";
import CloseIcon from "@/shared/assets/icons/clear-search.svg";

import "./styles.scss";

export interface IAppHeaderProps {
  children: ReactNode;
  isMobileOpen: boolean;
  setIsMobileOpen: (value: boolean) => void;
}

const AppHeader: FC<IAppHeaderProps> = ({
  children,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const t = useTranslations("home");

  const navigationList: INavigationListItem[] = [
    {
      title: t("navigation.faq"),
      href: "/faq",
    },
    {
      title: t("navigation.news"),
      href: "/news",
    },
    {
      title: t("navigation.guarantees"),
      href: "/guarantees",
    },
  ];

  return (
    <header className="header">
      <MainContainer>
        <div className="header__container">
          {!isMobileOpen ? (
            <Image
              src={MenuIcon}
              width={24}
              height={24}
              alt="menu"
              className="header__menu"
              onClick={() => setIsMobileOpen(true)}
            />
          ) : (
            <Image
              src={CloseIcon}
              width={24}
              height={24}
              alt="menu"
              className="header__menu"
              onClick={() => setIsMobileOpen(false)}
            />
          )}
          <div className="header__wrapper">
            <a href="/">
              <Image
                src={Logo}
                width={89}
                height={30}
                alt="logo"
                className="header__logo"
              />
            </a>
            <span className="header__slash header__slash_mobile" />
            <nav className="header__list">
              {navigationList.map((item, index) => (
                <a href={item.href} key={index} className="header__item">
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="header__wrapper">{children}</div>
        </div>
      </MainContainer>
    </header>
  );
};

export default AppHeader;
