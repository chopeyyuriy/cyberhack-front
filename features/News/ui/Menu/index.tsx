"use client";

import { FC } from "react";

import { useNewsSearchStore } from "@/features/News";

import { CategoriesMenu } from "@/shared";
import "./styles.scss";

import cn from "classnames";

const NewsMenu: FC<{ className?: string }> = ({ className }) => {
  const { selectedCategories, categories, updateSelectedCategories } =
    useNewsSearchStore((state) => state);

  const selectItem = (index: number) => {
    if (selectedCategories.includes(index)) {
      updateSelectedCategories(
        selectedCategories.filter((item) => item !== index),
      );
    } else {
      updateSelectedCategories([...selectedCategories, index]);
    }
  };

  return (
    <CategoriesMenu
      className={className}
      title="Категория"
      selectItem={selectItem}
      selectedItems={selectedCategories}
      items={categories}
    />
  );
};

export default NewsMenu;
