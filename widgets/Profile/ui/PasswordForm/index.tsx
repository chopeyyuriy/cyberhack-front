"use client";

import { PrimaryButton, SafetyContainer, SafetyHeading } from "@/shared";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const PasswordForm: FC = () => {
  const t = useTranslations('profile.security.security');

  const router = useRouter();

  return (
    <SafetyContainer>
      <SafetyHeading text={t('title')} />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[2px] p-3">
          <h4 className="text-sm font-light text-[#ACACBC]">{t('password.title')}</h4>

          <p className="text-[13px] text-[#595962]">
            {t('password.text')}
            {/* <span className="text-[#95B6B3]"> месяц назад</span> */}
          </p>
        </div>
        <PrimaryButton click={() => router.push('/profile/change-password')} text={t('password.change')} color="#202026" />
      </div>
    </SafetyContainer>
  );
};

export default PasswordForm;
