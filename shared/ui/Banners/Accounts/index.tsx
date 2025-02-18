import { FC } from "react";

import Image from "next/image";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import { MainContainer, PrimaryButton, SeparatorLine } from "@/shared";
import { useTranslations } from "next-intl";

import "./styles.scss";

const AccountsBanner: FC = () => {
  const t = useTranslations("home.accounts");
  return (
    <MainContainer classes="accounts-banner">
      <SeparatorLine />
      <div className="accounts-banner__container">
        <div className="accounts-banner__content">
          <h2 className={cn("accounts-banner__title", unbounded.className)}>
            {t('title')}
          </h2>
          <p className="accounts-banner__description">
            {t('text')}
          </p>
          <PrimaryButton
            color="#E1C58B"
            textColor="#0E1012"
            href="/accounts"
            text={t('button')}
            classes="accounts-banner__button ml-3"
          />
        </div>
        <Image
          src={require("@/shared/assets/images/home/banner/man.png")}
          width={688}
          height={478}
          alt="man"
          className="accounts-banner__image"
        />
      </div>
      <SeparatorLine />
    </MainContainer>
  );
};

export default AccountsBanner;
