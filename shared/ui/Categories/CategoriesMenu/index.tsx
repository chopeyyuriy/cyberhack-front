"use client";

import { FC, ReactNode } from "react";

import Image from "next/image";

import { unbounded } from "@/shared/fonts";

import cn from "classnames";

import "./styles.scss";
import { AuthCheckbox } from "../../Checkboxes/index";

export interface ICategoriesMenuProps {
  title: string;
  checkbox?: boolean;
  items: {
    icon: string | ReactNode;
    name: string;
    count?: number;
  }[];
  selectedItems: number[];
  selectItem: (index: number) => void;
  className?: string;
}

const CategoriesMenu: FC<ICategoriesMenuProps> = ({
  checkbox,
  selectItem,
  selectedItems,
  title,
  items,
  className,
}) => {
  return (
    <div className={cn("categories-menu", className)}>
      <h2 className={cn("categories-menu__title", unbounded.className)}>
        {title}
      </h2>
      <ul className="categories-menu__list">
        {items.map((item, index) => (
          <li
            className={cn("categories-menu__item", {
              "categories-menu__item_active": selectedItems.includes(index),
            })}
            key={index}
            onClick={() => selectItem(index)}
          >
            <div className="categories-menu__wrapper">
              {!checkbox ? (
                typeof item.icon === 'string' ?
                <Image
                  src={item.icon.includes('http') ? item.icon : require(`@/shared/assets/icons/${item.icon}`)}
                  width={22}
                  height={22}
                  alt="icon"
                  className="categories-menu__icon"
                /> :
                item.icon
              ) : (
                <AuthCheckbox 
                  value={selectedItems.includes(index)}
                />
              )}
              <span
                className={cn(
                  "categories-menu__name",
                  {
                    "categories-menu__name_active":
                      selectedItems.includes(index),
                  },
                  unbounded.className,
                )}
              >
                {item.name}
              </span>
            </div>
            {
              item.count &&
              <span
                className={cn("categories-menu__count", {
                  "categories-menu__count_active": selectedItems.includes(index),
                })}
              >
                {item.count}
              </span>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesMenu;
