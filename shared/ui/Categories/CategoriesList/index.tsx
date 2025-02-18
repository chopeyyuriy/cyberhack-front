"use client";

import { FC, Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MainContainer } from "@/shared";

import { ICategory } from "@/shared/types";

import "./styles.scss";

export interface ICategoriesListProps {
  categories: ICategory[];
}

const CategoriesList: FC<ICategoriesListProps> = ({ categories }) => {
  const DEFAULT_SELECTED_CATEGORY: number = 0;

  const [currentCategory, setCurrentCategory] = useState<number>(
    DEFAULT_SELECTED_CATEGORY
  );

  return (
    <div className="categories">
      <MainContainer>
        <nav className="categories-list">
          {categories.map((category, index) => (
            <Fragment key={index}>
              <a href={category.href} className="categories-list__item">
                <Image
                  src={category.icon.includes('http') ? category.icon : require(`@/public/${category.icon}`)}
                  width={20}
                  height={20}
                  alt="categories-icon"
                  className="categories-list__icon"
                />
                <span className="categories-list__title">{category.title}</span>
              </a>
              {index !== categories.length - 1 && (
                <div className="header__slash categories-list__slash" />
              )}
            </Fragment>
          ))}
        </nav>
      </MainContainer>
    </div>
  );
};

export default CategoriesList;
