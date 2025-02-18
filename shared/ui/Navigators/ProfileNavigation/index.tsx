"use client";

import { FC, ReactNode, useState } from "react";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import Image from "next/image";

import "./styles.scss";

export interface IProfileNavigationProps {
  title: string;
  items: {
    icon: string | ReactNode;
    name: string;
    action: () => void;
    count?: number;
    new?: boolean;
    color?: string;
  }[];
}

const ProfileNavigation: FC<IProfileNavigationProps> = ({ title, items }) => {  
  const [currentItem, setCurrentItem] = useState<number>(0);

  const handleClick = (index: number) => {
    setCurrentItem(index);
    items[index].action();
  };

  return (
    <div className="w-[248px]">
      <h2
        className={cn(
          "mb-3 text-xs font-light text-[#595962]",
          unbounded.className,
        )}
      >
        {title}
      </h2>
      <nav className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li
            className={cn(
              "profile-navigation__item relative flex cursor-pointer items-center py-2 pr-5",
              {
                "profile-navigation__item_active": currentItem === index,
              },
            )}
            onClick={() => handleClick(index)}
            key={index}
          >
            <div className="mr-2">
              {item.icon}
            </div>
            <span
              style={{ color: item.color }}
              className={cn(
                "profile-navigation__text text-sm text-[#8A8A98] transition-colors duration-300",
              )}
            >
              {item.name}
            </span>
            {item.count && (
              <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-white/[.04] text-[11px] font-semibold text-[#8A8A98]">
                {item.count}
              </span>
            )}
            {item.new && (
              <span className="profile-navigation__new ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-white/[.04] p-[2px] text-[11px] font-semibold text-[#E1C58B]">
                new
              </span>
            )}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default ProfileNavigation;
