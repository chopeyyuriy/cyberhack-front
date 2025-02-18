import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";

import "./styles.scss";

const DriversBanner: FC = () => {
  const t = useTranslations('faq');
  return (
    <div className="drivers-banner">
      <Image
        src={require("@/shared/assets/icons/security.svg")}
        alt="icon"
        className="drivers-banner__icon"
      />
      <p className="drivers-banner__description">
        {t('banner')}
      </p>
    </div>
  );
};

export default DriversBanner;
