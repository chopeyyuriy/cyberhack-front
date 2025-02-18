"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { FC, useState } from "react";
import { switchLocale } from "@/features/Lang";

export enum DEFAULT_LANGUAGES {
  RU,
  EN,
}

import { locales } from "@/i18n";
import "./styles.scss";
import { useRouter } from "next/navigation";

const LanguageSelect: FC = () => {
  const router = useRouter();
  
  const lang = useLocale();

  const [opened, setSelectState] = useState<boolean>(false);

  const setLocale = async (locale: string) => {
    const currentLocale: number = locales.findIndex((item) => item === locale);
    const path = switchLocale(locales[Number(currentLocale)]);
    
    setSelectState(false);
    await router.push(path);
  }

  return (
    <ul className="relative flex flex-col rounded-md bg-[#14161A] p-[2px] max-md:w-full">
      <li
        onClick={() => setSelectState(true)}
        className=" flex cursor-pointer items-center gap-2 rounded p-2 transition-colors duration-300 hover:bg-[#8A8A98]"
      >
        <Image
          src={require(`@/shared/assets/icons/${lang}-flag-icon.svg`)}
          width={18}
          height={12}
          alt="icon"
        />
        <span className="text-sm font-light text-[#8A8A98]">{ lang === 'ru' ? 'Русский' : 'English' }</span>
        <Image
          src={require("@/shared/assets/icons/chevron-down-light.svg")}
          width={20}
          height={20}
          alt="icon"
          className="max-md:ml-auto"
        />
      </li>
      {opened && (
        <div className="absolute bottom-0 z-10 w-full translate-y-full rounded bg-[#14161A] p-[2px]">
          <li
            onClick={() => setLocale('ru')}
            className="mt-[2px] flex cursor-pointer items-center gap-2 rounded p-2 transition-colors duration-300 hover:bg-[#8A8A98]"
          >
            <Image
              src={require("@/shared/assets/icons/ru.svg")}
              width={18}
              height={12}
              alt="icon"
            />
            <span className="text-sm font-light text-[#8A8A98]">Русский</span>
          </li>
          <li
            onClick={() => setLocale('en')}
            className=" flex cursor-pointer items-center gap-2 rounded p-2 transition-colors duration-300 hover:bg-[#8A8A98]"
          >
            <Image
              src={require("@/shared/assets/icons/en-flag-icon.svg")}
              width={18}
              height={12}
              alt="icon"
            />
            <span className="text-sm font-light text-[#8A8A98]">English</span>
          </li>
        </div>
      )}
    </ul>
  );
};

export default LanguageSelect;
