"use client";

import { FC, useEffect, useState } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import { UpdateAccountForm } from "@/features/Account";
import { AvatarsModal, SelectSkin } from "@/shared";
import Image from "next/image";
import "./styles.scss";
import { useAppSelector } from "@/store/App/index";
import { useTranslations } from "next-intl";
import {
  sendVerificationEmail,
  updateAvatarApi,
  сonfirmEmailApi,
} from "@/entities/Session/api/index";
import toast from "react-hot-toast";

const PersonalInfo: FC = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const user = useAppSelector((state) => state.session.user);

  const [currentAvatar, setCurrentAvatar] = useState<number>(user.avatar);

  const t = useTranslations("profile.profile");

  const selectAvatar = async (avatar: number) => {
    setCurrentAvatar(avatar);
  };

  const updateAvatar = async () => {
    const { data: user } = await updateAvatarApi(currentAvatar);
    setIsModalOpened(false);
    window.location.reload();
  };

  const sendConfirmEmail = async () => {
    await sendVerificationEmail();
    toast(t("email.sent"));
  };

  const handleConfirmEmail = async () => {
    if (window.location.search.includes("?email=true")) {
      const token = window.location.search?.split("?email=true&token=")?.[1];
      if (token) {
        await сonfirmEmailApi(token);
        toast.success(t("email.success"));
        setTimeout(
          () => window.location.replace(window.location.pathname),
          500,
        );
      }
    }
  };

  useEffect(() => {
    handleConfirmEmail();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h2 className={cn("text-sm text-[#C0C6D1]", unbounded.className)}>
        {t("personal.title")}
      </h2>
      <SelectSkin open={() => setIsModalOpened(true)} subtitle />
      <UpdateAccountForm username={user.name} email={user.email} />
      {user?.email_verified_at ? null : (
        <div className="personal-info__banner flex items-center gap-2 rounded-md p-1">
          <Image
            src={require("@/shared/assets/icons/user-circle.svg")}
            width={28}
            height={28}
            alt="icon"
            className=""
          />
          <span className="text-sm font-light text-[#0E1012]">
            {t("email.text")}
          </span>
          <button
            className="ml-auto rounded bg-[#0E1012] p-2 text-[13px] text-[#C0C6D1]"
            onClick={sendConfirmEmail}
          >
            {t("email.confirm")}
          </button>
        </div>
      )}

      {isModalOpened && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/80">
          <AvatarsModal
            close={() => setIsModalOpened(false)}
            currentAvatar={currentAvatar}
            selectAvatar={selectAvatar}
            save={updateAvatar}
          />
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
