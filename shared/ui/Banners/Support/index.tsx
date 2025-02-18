import { FC } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import Image from "next/image";
import "./styles.scss";
import { useTranslations } from "next-intl";

const SupportBanner: FC = () => {
  const t = useTranslations('profile.profile.support')
  return (
    <div className="support-banner relative flex items-center justify-between rounded-md p-6">
      <div className="flex flex-col gap-[2px]">
        <h2 className={cn("text-sm text-[#62A9A1]", unbounded.className)}>
          {t('title')}
        </h2>
        <p className="text-[13px] text-[#C0C6D1]">
          {t('text')}
        </p>
      </div>
      <Image
        src={require("@/shared/assets/images/profile/support-image.png")}
        width={196}
        height={104}
        alt="image"
        className="absolute right-0 max-md:hidden"
      />
    </div>
  );
};

export default SupportBanner;
