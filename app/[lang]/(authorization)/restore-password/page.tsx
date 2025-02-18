"use client";

import { AuthHeading } from "@/shared";
import { useState } from "react";
import { useTranslations } from "next-intl";

import "./styles.scss";

import { RestorePasswordForm } from "@/features/Authorization";
import { AuthorizationWithoutSteps } from "@/widgets/Authorization";
import "swiper/css";
import "swiper/css/pagination";

export default function RestorePasswordPage() {
  const [email, setEmail] = useState<string>("");

  const t = useTranslations('resetPassword');

  return (
    <AuthorizationWithoutSteps>
      <AuthHeading
        title={t('title')}
        subtitle={t('text')}
        href="/login"
        hrefText={t('auth')}
      />
      <RestorePasswordForm />
    </AuthorizationWithoutSteps>
  );
}
