"use client";

import { NewsCard } from "@/shared/ui/Cards/index";
import { SeparatorLine } from "@/shared/ui/Slugs/index";
import { useNewsSelector } from "@/store/News/index";
import { SearchNews } from "@/widgets/News/ui/index";
import { FC, Fragment, useState } from "react";
import { useLocale } from "next-intl";
import { Pagination } from "@/shared/ui/Pagination/index";
import { getNewsApi } from "@/entities/News/api/index";

export const NewsContent: FC = () => {
  const lang = useLocale();

  const initialNews = useNewsSelector((state) => state.news.data);

  const [currentNews, setCurrentNews] = useState<any>(initialNews);

  const changePage = async (page: number) => {
    const { data } = await getNewsApi(page);
    setCurrentNews(data);
  }

  const {
    data: news,
    meta
  } = currentNews;

  return <div className="news-content">
    <SearchNews />
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
}