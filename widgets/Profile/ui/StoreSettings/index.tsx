import { FC } from "react";

import { InlineContainer } from "@/shared";
import { LanguageSelect } from "@/shared/ui/Selects";
import Image from "next/image";
import "./styles.scss";

import cn from "classnames";
import { useTranslations } from "next-intl";

import { unbounded } from "@/shared/fonts";

const StoreSettings: FC = () => {
  const t = useTranslations('profile.profile');

  return (
    <div className="flex flex-col gap-4">
      <h2 className={cn("text-sm text-[#C0C6D1]", unbounded.className)}>
        {t('shop.title')}
      </h2>
      <div className="">
        <InlineContainer className="!justify-start gap-3 max-md:flex-col max-md:items-start">
          <div className="mr-auto flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/[.02]">
              <Image
                src={require("@/shared/assets/icons/lang.svg")}
                width={22}
                height={22}
                alt="lang"
                className=""
              />
            </div>
            <div className="mr-auto flex flex-col gap-[2px]">
              <span className="text-sm font-light text-[#ACACBC]">
                {t('shop.language.label')}
              </span>
              <p className="text-[13px] text-[#595962]">
                {t('shop.language.text')}
              </p>
            </div>
          </div>
          <LanguageSelect />
        </InlineContainer>
        {/* <InlineContainer className="!justify-start gap-3  max-md:flex-col max-md:items-start">
          <div className="mr-auto flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/[.02]">
              <Image
                src={require("@/shared/assets/icons/coin.svg")}
                width={22}
                height={22}
                alt="lang"
                className=""
              />
            </div>
            <div className="mr-auto flex flex-col gap-[2px]">
              <span className="text-sm font-light text-[#ACACBC]">
                Региональные цены
              </span>
              <p className="text-[13px] text-[#595962]">
                Выберите цены, которые будут по умолчанию на сайте
              </p>
            </div>
          </div>
          <LanguageSelect />
        </InlineContainer> */}
      </div>
    </div>
  );
};

export default StoreSettings;
