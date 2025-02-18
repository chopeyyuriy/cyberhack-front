"use client";

import { FC, useState } from "react";

import "./styles.scss";
import Image from "next/image";
import { useRouter } from "next/router";

import Cookies from "js-cookie";

const MobileNavigation: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<number>(0);

  const router = useRouter();

  const logout = () => {
    Cookies.remove("accessToken");
    window.location.replace('/')
  };

  const items = [
    {
      icon: "profile-circle",
      name: "Ваш профиль",
      action: () => router.push("/profile"),
    },
    // добавь другие пункты меню: с той же иконкой и действием Ваши покупки, Онлайн поддержка, Ваши отзывы, Безопасность, Испытай удачу, Сотрудничество, Выйти
    {
      icon: "profile-circle",
      name: "Ваши покупки",
      action: () => router.push("/profile/purchases"),
      count: 12,
    },
    {
      icon: "profile-circle",
      name: "Онлайн поддержка",
      action: () => router.push("/profile/support"),
      count: 1,
    },
    {
      icon: "profile-circle",
      name: "Ваши отзывы",
      action: () => router.push("/profile/reviews"),
    },
    {
      icon: "profile-circle",
      name: "Безопасность",
      action: () => router.push("/profile/safety"),
    },
    {
      icon: "profile-circle",
      name: "Испытай удачу",
      action: () => router.push("/profile/try-luck"),
      new: true,
      color: "#E1C58B",
    },
    {
      icon: "profile-circle",
      name: "Сотрудничество",
      action: () => router.push("/profile/cooperation"),
    },
    {
      icon: "profile-circle",
      name: "Выйти",
      action: () => logout(),
    },
  ];

  if (!isOpened) {
    return (
      <div className="mobile-navigation flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={require("@/shared/assets/icons/user-circle.svg")}
            alt="user"
            width={22}
            height={22}
          />
          <span className="text-sm font-light text-[#59B3A8]">Ваш профиль</span>
        </div>
        <Image
          src={require("@/shared/assets/icons/menu.svg")}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    );
  }

  return (
    <div className="fixed top-16 flex h-full w-full flex-col bg-[#17191B]">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-[#8A8A98]">
          {items[currentItem].name}
        </span>
        <Image
          src={require("@/shared/assets/icons/clear-search.svg")}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNavigation;
