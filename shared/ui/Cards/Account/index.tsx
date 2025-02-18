"use client";
import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";

import cn from "classnames";

import AccountPlaceholder from "@/shared/assets/images/AccountPlaceholder.png";
import ChevronDownIcon from "@/shared/assets/icons/chevron-down.svg";
import {
  IconProfile,
  IconProfileCooperation,
  IconProfileLogout,
} from "@/shared/assets/icons/dynamic";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export interface IHeaderAccountCardProps {
  image?: string;
  name: string;
}

const AccountCard: FC<IHeaderAccountCardProps> = ({ image, name }) => {
  const accountImage = image ? image : AccountPlaceholder;
  const tHome = useTranslations("home");
  const tUser = useTranslations("profile");
  const router = useRouter();

  const logout = () => {
    Cookies.remove("accessToken");
    window.location.replace("/");
  };

  return (
    <button className="account-card">
      <Image
        className="account-card__image"
        src={accountImage}
        width={40}
        height={40}
        alt="account-image"
      />
      <div className="account-card__container">
        <div className="account-card__wrapper">
          <h2 className={cn("account-card__title", unbounded.className)}>
            {name}
          </h2>
          <span className="account-card__subtitle">
            {tHome("header.account.subtitle")}
          </span>
        </div>
        <div className="account-card__dropdown">
          <Image
            src={ChevronDownIcon}
            width={5}
            height={2}
            alt="dropdown-chevron"
            className="account-card__icon"
          />
        </div>
      </div>
      <div className="account-card__dropdown-wrapper">
        <div onClick={() => router.push("/profile")}>
          <IconProfile />
          {tUser("nav.profile")}
        </div>
        <div onClick={() => router.push("/profile/cooperation")}>
          {" "}
          <IconProfileCooperation />
          {tUser("nav.cooperation")}
        </div>
        <div onClick={logout}>
          <IconProfileLogout />
          {tUser("nav.logout")}
        </div>
      </div>
    </button>
  );
};

export default AccountCard;
