"use client";

import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";

import { switchLocale } from "@/features/Lang";

import { locales } from "@/i18n";

import { LanguageCode } from "@/shared/types";

import ruIcon from "@/shared/assets/icons/ru-flag-icon.svg";
import enIcon from "@/shared/assets/icons/en-flag-icon.svg";

import "./styles.scss";

const LocaleSwitcher: FC = () => {
  const router = useRouter();
  const pathName = usePathname();

  const locale: LanguageCode = pathName.split("/")[1] as LanguageCode;

  const currentLocale: number = locales.findIndex((item) => item === locale);

  const onSwitch = async () => {
    const path = switchLocale(locales[Number(!currentLocale)]);

    await router.push(path);
  };

  if (locale === "en") {
    return (
      <Image
        onClick={() => onSwitch()}
        src={enIcon}
        width={20}
        height={20}
        alt="en"
        className="language-switcher"
      />
    );
  } else {
    return (
      <Image
        onClick={() => onSwitch()}
        src={ruIcon}
        width={20}
        height={20}
        alt="ru"
        className="language-switcher"
      />
    );
  }
};

export default LocaleSwitcher;
