import { FC } from "react";

import Image from "next/image";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import { PrimaryButton } from "@/shared";

import "./styles.scss";
import { useTranslations } from "next-intl";

const PartnersBanner: FC = () => {
  const t = useTranslations('footer');

  return (
    <div className="partners-banner">
      <h2 className={cn("partners-banner__title", unbounded.className)}>
        {t('cooperation.question')}
      </h2>
      <PrimaryButton
        text={t('cooperation.label')}
        href="/profile/cooperation"
        classes="partners-banner__button"
      />
      <Image
        src={require("@/shared/assets/images/home/footer/partners.png")}
        width={352}
        height={248}
        className="partners-banner__image"
        alt="partners"
      />
    </div>
  );
};

export default PartnersBanner;
