"use client";

import { ProfileNavigation } from "@/shared";
import Image from "next/image";
import { FC } from "react";

import ProfileLogo from "@/shared/assets/images/profile/logo.png";
import { useRouter } from "next/navigation";

import { BackButton } from "@/shared";

import Cookies from "js-cookie";
import {
  IconProfile,
  IconProfileTickets,
  IconProfileReviews,
  IconProfileSecurity,
  IconProfileCooperation,
  IconProfileLogout,
} from "@/shared/assets/icons/dynamic";
import { useTranslations } from "next-intl";
import "./styles.scss";

const ProfileMenu: FC = () => {
  const router = useRouter();

  const t = useTranslations("profile");

  const items = [
    {
      icon: <IconProfile />,
      name: t("nav.profile"),
      path: "",
      action: () => router.push("/profile"),
    },
    // {
    //   icon: "profile-circle",
    //   name: "Ваши покупки",
    //   action: () => router.push("/profile/purchases"),
    //   count: 12,
    // },
    {
      icon: <IconProfileTickets />,
      name: t("nav.support"),
      action: () => router.push("/profile/support"),
      // count: 1,
    },
    {
      icon: <IconProfileReviews />,
      name: t("nav.reviews"),
      path: "reviews",
      action: () => router.push("/profile/reviews"),
    },
    {
      icon: <IconProfileSecurity />,
      name: t("nav.security"),
      path: "safety",
      action: () => router.push("/profile/safety"),
    },
    // {
    //   icon: "profile-circle",
    //   name: "Испытай удачу",
    //   action: () => router.push("/profile/try-luck"),
    //   new: true,
    //   color: "#E1C58B",
    // },
    {
      icon: <IconProfileCooperation />,
      name: t("nav.cooperation"),
      path: "cooperation",
      action: () => router.push("/profile/cooperation"),
    },
    {
      icon: <IconProfileLogout />,
      name: t("nav.logout"),
      action: () => logout(),
    },
  ];

  const logout = () => {
    Cookies.remove("accessToken");
    window.location.replace("/");
  };

  return (
    <div className="profile-menu flex-start mt-6 flex flex-col gap-[32px]">
      <a href="/">
        <Image src={ProfileLogo} alt="logo" />
      </a>
      <BackButton />
      <ProfileNavigation title={t("nav.label")} items={items} />
    </div>
  );
};

export default ProfileMenu;
