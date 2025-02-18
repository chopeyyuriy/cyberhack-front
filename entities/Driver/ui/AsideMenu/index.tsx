"use client";

import { FC, useState } from "react";

import Image from "next/image";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import { useTranslations } from "next-intl";

import "./styles.scss";

const DriversAsideMenu: FC = ({ current }) => {
  const t = useTranslations("faq.sidebar");
  const [currentSelectedItem, setCurrentSelectedItem] = useState<number | null>(
    current,
  );
  return (
    <menu className="drivers-aside-menu">
      <div className="drivers-aside-menu__container">
        <a
          className={cn("drivers-aside-menu__item", {
            "drivers-aside-menu__item_active": currentSelectedItem === 0,
          })}
          href="/faq"
        >
          <Image
            src={require("@/shared/assets/icons/keyboard.svg")}
            alt="icon"
            width={30}
            height={30}
            className="drivers-aside-menu__icon"
          />
          <div className="drivers-aside-menu__content">
            <h4
              className={cn("drivers-aside-menu__title", unbounded.className)}
            >
              {t('drivers.title')}
            </h4>
            <p className="drivers-aside-menu__description max-md:hidden">
              {t('drivers.text')}
            </p>
          </div>
        </a>
        <a
          className={cn("drivers-aside-menu__item", {
            "drivers-aside-menu__item_active": currentSelectedItem === 1,
          })}
          href="/faq/questions"
        >
          <Image
            src={require("@/shared/assets/icons/book.svg")}
            alt="icon"
            width={30}
            height={30}
            className="drivers-aside-menu__icon"
          />
          <div className="drivers-aside-menu__content">
            <h4
              className={cn("drivers-aside-menu__title", unbounded.className)}
            >
              {t('questions.title')}
            </h4>
            <p className="drivers-aside-menu__description max-md:hidden">
              {t('questions.text')}
            </p>
          </div>
        </a>
      </div>
      <a
        className={cn("drivers-aside-menu__item", {
          "drivers-aside-menu__item_active": currentSelectedItem === 2,
        })}
        href="https://discord.com/invite/Xbmy5fAbd5"
        target="_blank"
      >
        <Image
          src={require("@/shared/assets/icons/user-heart.svg")}
          alt="icon"
          width={30}
          height={30}
          className="drivers-aside-menu__icon"
        />
        <div className="drivers-aside-menu__content">
          <h4 className={cn("drivers-aside-menu__title", unbounded.className)}>
            {t('ticket.title')}
          </h4>
          <p className="drivers-aside-menu__description max-md:hidden">
            {t('ticket.text')}
          </p>
        </div>
      </a>
    </menu>
  );
};

export default DriversAsideMenu;
