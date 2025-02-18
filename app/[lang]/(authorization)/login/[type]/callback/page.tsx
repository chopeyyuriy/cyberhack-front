"use client";
import { AuthHeading } from "@/shared";
import "../../styles.scss";

import { LoginForm } from "@/features/Authorization";
import { AuthorizationWithoutSteps } from "@/widgets/Authorization";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { confirmLoginBySocmedia } from "@/entities/Session";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const t = useTranslations("auth");
  const { type } = useParams();
  const router = useRouter();

  const handleGetParams = () => {
    try {
      const params = window.location.href?.split("?")?.[1]?.split("&");
      const formatedParams = Object.fromEntries(
        params?.map((param) => param?.split("=")),
      );
      return formatedParams;
    } catch {
      return {};
    }
  };

  function fixEncodedString(str: string) {
    return str?.replace(/%2F/g, "/");
  }

  const handleConfirmAuth = () => {
    if (type) {
      const { code } = handleGetParams();
      if (code) {
        confirmLoginBySocmedia(type?.toString(), {
          code: fixEncodedString(code),
        }).then((resp) => {
          Cookies.set("accessToken", resp?.data?.token);
          router.push("/profile");
        });
      }
    }
  };

  useEffect(() => {
    handleConfirmAuth();
  }, []);

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
