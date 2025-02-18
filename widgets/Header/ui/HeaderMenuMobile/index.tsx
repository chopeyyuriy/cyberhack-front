"use client";

import { FC } from "react";

import "./styles.scss";
import { SearchModal } from "@/features/Search";
import Link from "next/link";

import { unbounded } from "@/shared/fonts";

import cn from "classnames";
import { usePathname } from "next/navigation";

export interface IHeaderMenuMobileProps {
  setIsMenuOpen: () => void;
}

const HeaderMenuMobile: FC<IHeaderMenuMobileProps> = ({ setIsMenuOpen }) => {
  const navList: {
    name: string;
    href: string;
  }[] = [
    {
      name: "Главная",
      href: "/",
    },
    {
      name: "Каталог читов",
      href: "/catalog",
    },
    {
      name: "Магазин аккаунтов",
      href: "/game-accounts",
    },
    {
      name: "FAQ & Поддержка",
      href: "/faq",
    },
    {
      name: "Новости",
      href: "/news",
    },
    {
      name: "Наши гарантии",
      href: "/guarantees",
    },
  ];

  return (
    <div className="header-menu-mobile">
      <SearchModal isMobile />
      <nav className="header-menu-mobile__list">
        {navList.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={cn(
              "header-menu-mobile__item",
              {
                "header-menu-mobile__item_active": item.href === "/",
              },
              unbounded.className,
            )}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default HeaderMenuMobile;
