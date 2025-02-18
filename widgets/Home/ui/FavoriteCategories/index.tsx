"use client";

import { FC } from "react";

import { useTranslations } from "next-intl";

import {
  CategoryCard,
  GroupHeading,
  MainContainer,
  PrimaryButton,
} from "@/shared";

import "./styles.scss";
import { usePathname } from "@/node_modules/next/navigation";
import { useAppSelector } from "@/store/App/index";
import { LanguageCode } from "@/shared/types/Language/index";

const FavoriteCategories: FC = () => {
  const t = useTranslations("home.favourite");

  const pathName = usePathname();

  const locale: LanguageCode = pathName.split("/")[1] as LanguageCode;

  const games = useAppSelector((state) => state.game.list.filter((game: any) => game.is_favourite));

  const categories = games.map((game) => {
    const href = game.childrens && game.childrens.length ? `/catalog/${game.childrens[0].path}` : `/catalog/${game.path}`;
    return {
      title: game[`name_${locale}`],
      image: game.image,
      href
    }
  });

  return (
    <div className="favorite-categories">
      <MainContainer>
        <GroupHeading
          title={t('title')}
          text={t('text')}
        >
          <PrimaryButton
            href="/catalog"
            text={t('button')}
            classes="favorite-categories__button"
          />
        </GroupHeading>

        <ul className="favorite-categories__list">
          {categories.map((category, index) => (
            <CategoryCard {...category} key={index} />
          ))}
        </ul>
      </MainContainer>
    </div>
  );
};

export default FavoriteCategories;
