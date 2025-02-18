"use client";

import { FC, Fragment, useState } from "react";
import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import NewsMenu from "../Menu/index";
import { NewsContent } from "../Content/index";
import { CategoriesMenu } from "@/shared/ui/Categories/index";
import { IconPopular } from "@/shared/assets/icons/dynamic/Sort/index";
import { useLocale } from "next-intl";
import { SearchNews } from "@/widgets/News/ui/index";
import { NewsCard } from "@/shared/ui/Cards/index";
import { SeparatorLine } from "@/shared/ui/Slugs/index";
import { Pagination } from "@/shared/ui/Pagination/index";
import { getNewsApi } from "@/entities/News/api/index";
import { Search } from "@/shared/ui/Inputs/index";
import { useTranslations } from "next-intl";
import "./styles.scss"

interface Props {
  news: any[];
  games: any[];
}

export const NewsView: FC<Props> = ({
  news: initialNews,
  games
}) => {
  const t = useTranslations('news');

  const lang = useLocale();

  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const [currentNews, setCurrentNews] = useState<any>(initialNews);
  const [search, setSearch] = useState<string>('');

  const changePage = async (page: number) => {
    const { data } = await getNewsApi(page);
    setCurrentNews(data);
  }

  const {
    data: news,
    meta
  } = currentNews;

  const categories = [
    {
      name: t('category.all'),
      icon: <IconPopular />
    },
    ...games.slice(0, 10).map((game: any) => ({
      id: game.id,
      name: game[`name_${lang}`],
      icon: game.icon
    }))
  ];

  const selectCategory = async (index: number) => {
    setSelectedCategory(index);

    // @ts-ignore
    const { data } = await getNewsApi(undefined, categories[index].id);
    setCurrentNews(data);
  }

  const onSearch = async (value: string) => {
    setSearch(value);

    // @ts-ignore
    const { data } = await getNewsApi(undefined, categories[selectedCategory].id, value);
    setCurrentNews(data);
  }

  return (<>
    <div 
      className="news__image"
    ></div>
    <div className="news__content mb-11 flex flex-col items-center gap-2 md:hidden">
      <h2
        className={cn(
          "news__title text-[34px] text-[#C0C6D1]",
          unbounded.className
        )}
      >
        {t('title')}
      </h2>
      <p className="news__description text-center text-[15px] font-light text-[#595962]" dangerouslySetInnerHTML={{ __html: t('text') }}></p>
    </div>
    <div className="flex items-start gap-10 max-md:flex max-md:flex-col max-md:gap-6">
      <div className="md:mt-[200px]">
        <CategoriesMenu
          title={t('category.label')}
          selectItem={selectCategory}
          selectedItems={[selectedCategory]}
          items={categories}
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="news__content mb-11 flex flex-col items-center gap-2 max-md:hidden">
          <h2
            className={cn(
              "news__title text-[34px] text-[#C0C6D1]",
              unbounded.className,
            )}
          >
            {t('title')}
          </h2>
          <p className="news__description text-center text-[15px] font-light text-[#595962]" dangerouslySetInnerHTML={{ __html: t('text') }}></p>
        </div>
        <div className="news-content">
          <Search
            placeholder={t('search')}
            searchValue={search}
            onChange={onSearch}
          />
          <ul className="news__list mt-[6px] flex w-full flex-col gap-[6px] bg-[#0C0D10CC]">
            {news.map((item, index) => (
              <Fragment key={index}>
                <NewsCard
                  title={item[`title_${lang}`]}
                  image={item.image}
                  href="/"
                  description={item[`text_${lang}`]}
                  date={(new Date(item.created_at)).toLocaleDateString()}
                  icon={item.game.icon}
                  game={item.game[`name_${lang}`]}
                />
                <SeparatorLine />
              </Fragment>
            ))}
          </ul>
          <div className="mt-[12px]">
            <Pagination
              current={meta.current_page}
              max={meta.last_page}
              change={changePage}
            />
          </div>
        </div>
      </div>
    </div>
  </>);
}