import { FC } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import Image from "next/image";
import { useTranslations } from "next-intl";

import "./styles.scss";

const ProfileIntegrations: FC = () => {
  const t = useTranslations('profile.profile.integrations');

  return (
    <div className="flex flex-col gap-4">
      <h2 className={cn("text-sm text-[#C0C6D1]", unbounded.className)}>
        {t('title')}
      </h2>
      <div className="flex items-center justify-between gap-3 max-md:flex-col">
        <div className="profile-integrations__banner flex max-w-[429px] flex-col rounded-md p-[18px]">
          <div className="flex items-start gap-3">
            <Image
              src={require("@/shared/assets/images/profile/vk.png")}
              width={60}
              height={60}
              alt="image"
              className=""
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-[6px]">
                <h2
                  className={cn(
                    "text-[16px] font-light text-[#E3E5EB]",
                    unbounded.className,
                  )}
                >
                  {t('vk.title')}
                </h2>
                <span
                  className={cn("text-xs text-[#031012]", unbounded.className)}
                >
                  {t('status.notConnected')}
                </span>
              </div>
              <p className="text-[13px] text-[#C0C6D1]">
                {t('vk.text')}
              </p>
            </div>
          </div>
          <button className="mt-[18px] rounded bg-[#0E1012] p-2 text-sm text-[#C0C6D1]">
            {t('connect')}
          </button>
        </div>
        <div className="profile-integrations__banner flex max-w-[429px] flex-col rounded-md p-[18px] max-md:flex-col">
          <div className="flex items-start gap-3">
            <Image
              src={require("@/shared/assets/images/profile/discord.png")}
              width={60}
              height={60}
              alt="image"
              className=""
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-[6px]">
                <h2
                  className={cn(
                    "text-[16px] font-light text-[#E3E5EB]",
                    unbounded.className,
                  )}
                >
                  {t('discord.title')}
                </h2>
                <span
                  className={cn("text-xs text-[#AAF880]", unbounded.className)}
                >
                  {t('status.connected')}
                </span>
              </div>
              <p className="text-[13px] text-[#C0C6D1]">
                {t('discord.text')}
              </p>
            </div>
          </div>
          <button className="mt-[18px] rounded bg-[#E3E5EB] p-2 text-sm text-[#0E1012]">
            {t('disable')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntegrations;
