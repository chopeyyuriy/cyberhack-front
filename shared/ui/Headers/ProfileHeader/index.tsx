"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

import "./styles.scss";
import { NotificationsDropdown } from "@/features/NotificationsDropdown";
import {
  getNotificationsApi,
  readUserNotifications,
} from "@/entities/Notifications/api";
import { useAppSelector } from "@/store";

export interface IProfileHeaderProps {
  skin: string;
  nickname: string;
  notifications: number;
}

const ProfileHeader: FC<IProfileHeaderProps> = ({
  skin,
  nickname,
  notifications,
}) => {
  const t = useTranslations("profile.header");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>([]);
  const user = useAppSelector((state) => state.session.user);

  const handleGetNotifications = () => {
    getNotificationsApi().then((resp) =>
      setData(
        resp?.data?.notifications?.filter(
          (n: any) => !n?.user_notification?.is_read,
        ),
      ),
    );
  };

  useEffect(() => {
    handleGetNotifications();
  }, []);

  const handleReadNotification = (id: number) => {
    user && readUserNotifications(user?.id, id);
  };

  useEffect(() => {
    if (data.length === 0) {
      setOpen(false);
    }
  }, [data]);

  const handleClose = () => {
    setOpen(false);
    handleGetNotifications();
  };

  return (
    <div className="profile-header relative flex items-center gap-6 rounded-xl p-6">
      <Image
        src={require(`@/shared/assets/icons/avatars/animoji-${skin}.png`)}
        width={64}
        height={64}
        alt="avatar"
        className=""
      />
      <div className="flex flex-col gap-[6px]">
        <div className="flex items-center gap-1 max-md:flex-col max-md:items-start">
          <span
            className={cn(
              "text-[20px] font-light text-[#C0C6D1]",
              unbounded.className,
            )}
          >
            {t("title")}
          </span>
          <span
            className={cn(
              "text-[20px] font-light text-[#59B2A8]",
              unbounded.className,
            )}
          >
            {nickname}!
          </span>
        </div>
        <p className="text-[13px] text-[#595962] max-md:hidden">{t("text")}</p>
      </div>
      <div className="relative ml-auto flex h-[38px] min-h-[38px] w-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-md bg-[#95B6B3]">
        <Image
          src={require("@/shared/assets/icons/notification-black.svg")}
          alt="notification"
          width={24}
          height={24}
          className=""
          onClick={() => (data.length > 0 ? setOpen(true) : null)}
        />
        <span
          onClick={() => (data.length > 0 ? setOpen(true) : null)}
          className="absolute right-[3px] top-[3px] flex h-3 w-3 items-center justify-center rounded-full bg-[#C0C6D1] text-[10px] text-[#0E1012]"
        >
          {data.length}
        </span>
        {open ? (
          <NotificationsDropdown
            onClose={handleClose}
            data={data}
            onReadNotification={handleReadNotification}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProfileHeader;
