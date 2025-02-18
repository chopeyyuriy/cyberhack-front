"use client";

import { AuthHeading } from "@/shared";
import "./styles.scss";

import { LoginForm } from "@/features/Authorization";
import { AuthorizationWithoutSteps } from "@/widgets/Authorization";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("auth");

  return (
    <AuthorizationWithoutSteps>
      <AuthHeading
        title={t("title")}
        subtitle={t("text")}
        href="/registration"
        hrefText={t("register")}
      />
      <LoginForm />
    </AuthorizationWithoutSteps>
  );
}
