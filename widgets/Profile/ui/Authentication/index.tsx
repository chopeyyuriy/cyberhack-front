"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";

import {
  PrimaryButton,
  PrimaryCheckbox,
  SafetyContainer,
  SafetyHeading,
} from "@/shared";

import "./styles.scss";

const Authentication: FC = () => {
  const [emailCheck, setEmailCheck] = useState<boolean>(false);

  const t = useTranslations('profile.security')
  
  return (
    <SafetyContainer>
      <SafetyHeading text={t('twoFactor.title')}/>
      <div className="flex flex-col gap-[6px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 p-3">
            <div className="authentication__icon flex h-10 w-10 items-center justify-center rounded-md">
              <Image
                src={require("@/shared/assets/icons/icons_qr.svg")}
                alt="icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <h4 className="text-sm font-light text-[#ACACBC]">{t('twoFactor.email.title')}</h4>
              <p className="text-[13px] text-[#595962]">
                {t('twoFactor.email.text')}
              </p>
            </div>
          </div>
          <PrimaryCheckbox value={emailCheck} onChange={setEmailCheck} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 p-3">
            <div className="authentication__icon authentication__icon_red flex h-10 w-10 items-center justify-center rounded-md">
              <Image
                src={require("@/shared/assets/icons/google-auth.svg")}
                alt="icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <h4 className="text-sm font-light text-[#ACACBC]">{t('twoFactor.google.title')}</h4>
              <p className="text-[13px] text-[#595962]">
                {t('twoFactor.google.text')}
              </p>
            </div>
          </div>
          <PrimaryButton
            text={t('install')}
            href="/download"
            color="#E1C58B"
            textColor="#0E1012"
            classes="font-light text-sm"
          />
        </div>
      </div>
    </SafetyContainer>
  );
};

export default Authentication;
