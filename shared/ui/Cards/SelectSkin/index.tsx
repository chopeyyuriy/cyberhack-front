import { FC } from "react";

import Image from "next/image";
import { PrimaryButton } from "../../Buttons";

import cn from "classnames";
import { useTranslations } from "next-intl";

export interface ISelectSkinProps {
  open: () => void;
  subtitle?: boolean;
  className?: string;
}

const SelectSkin: FC<ISelectSkinProps> = ({ open, className, subtitle }) => {
  const t = useTranslations('profile.profile');

  return (
    <div
      onClick={() => open()}
      className={cn(
        "mt-3 flex w-full cursor-pointer items-center justify-between gap-3 rounded-md bg-[#FFFFFF05] p-3 pr-6 max-md:flex-col max-md:!items-start",
        className,
      )}
    >
      <Image
        src={require("@/shared/assets/images/auth/avatars.png")}
        width={88}
        height={48}
        alt="avatars"
      />
      <div className="">
        <span className="block text-sm font-light text-[#ACACBC]">
          {t('avatar.title')}
        </span>
        {subtitle && (
          <span className="text-[13px] text-[#595962]">
            {t('avatar.text')}
          </span>
        )}
      </div>
      <PrimaryButton
        color="#202026"
        textColor="#8A8A98"
        href="#"
        text={t('avatar.select')}
        classes="max-md:w-[calc(100%_-_24px)] max-md:mx-auto"
      />
    </div>
  );
};

export default SelectSkin;
