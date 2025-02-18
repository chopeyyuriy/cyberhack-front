"use client";

import { AuthHeading } from "@/shared";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { MainContainer, SupportBanner } from "@/shared";
import "./styles.scss";
import { ChangePassword } from "@/widgets/Profile/ui/ChangePassword/index";

export default function ChangePasswordPage() {
  const [email, setEmail] = useState<string>("");

  const t = useTranslations('resetPassword');

  return (
    <div className="profile-safety">
      <MainContainer classes="flex flex-col gap-6 !p-6">
        <SupportBanner />
        <ChangePassword />
      </MainContainer>
    </div>
  );
}
