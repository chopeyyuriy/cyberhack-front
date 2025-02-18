"use client";

import { CategoryCard } from "@/shared/ui/Cards/index";
import { CategoriesMenu } from "@/shared/ui/Categories/index";
import { SearchNews } from "@/widgets/News/ui/index";
import { FC, useEffect, useState } from "react";
import { IconGames, IconNew, IconPopular } from "@/shared/assets/icons/dynamic/Sort/index";
import { IconAndroid, IconWindows, IconIOS } from "@/shared/assets/icons/dynamic/Platform/index";
import { Search } from "@/shared/ui/Inputs/index";
import { searchGamesApi } from "@/entities/Game/api/index";
import { useTranslations } from "next-intl";
import { Pagination } from "@/shared/ui/Pagination/index";

interface Props {
  categories: any[];
}

export const GameCatalog: FC<Props> = ({
  categories: initialCategories
}) => {
  const t = useTranslations("catalog");

  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [meta, setMeta] = useState<any>(null);

  const [search, setSearch] = useState<string>('');

  const [selectedSortItem, setSelectedSortItem] = useState<number>(1);
  const [selectedPlatform, setSelectedPlatform] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);

  const updateGames = async () => {
    const { data: games } = await searchGamesApi(search, selectedSortItem !== undefined ? Number(selectedSortItem === 0) : undefined, selectedPlatform, selectedCategory);
    setCategories(games.data.map((game) => {
      const href = game.childrens && game.childrens.length ? `/catalog/${game.childrens[0].path}` : `/catalog/${game.path}`;
      return {
        title: game.name_ru,
        image: game.image,
        href
      }
    }));
    setMeta(games.meta)
  }

  const changePage = async (page: number) => {
    const { data: games } = await searchGamesApi(search, selectedSortItem !== undefined ? Number(selectedSortItem === 0) : undefined, selectedPlatform, selectedCategory, page);
    setCategories(games.data.map((game) => {
      const href = game.childrens && game.childrens.length ? `/catalog/${game.childrens[0].path}` : `/catalog/${game.path}`;
      return {
        title: game.name_ru,
        image: game.image,
        href
      }
    }));
    setMeta(games.meta)
  }

  useEffect(() => {
    updateGames()
  }, [search, selectedSortItem, selectedPlatform, selectedCategory]);

  const sortItems = [
    {
      name: t('sort.popular'),
      icon: <IconPopular />
    },
    {
      name: t('sort.all'),
      icon: <IconGames />
    },
    {
      name: t('sort.new'),
      icon: <IconNew />
    }
  ];

  const platforms = [
    {
      name: 'Windows',
      icon: <IconWindows />
    },
    {
      name: 'Android',
      icon: <IconAndroid />
    },
    {
      name: 'IOS',
      icon: <IconIOS />
    }
  ];

  const filterCategories = [
    {
      name: t('categories.pmt')
    },
    {
      name: t('categories.shooters')
    },
    {
      name: t('categories.moba')
    },
    {
      name: t('categories.offline')
    }
  ]

  return <div className="flex gap-10 max-md:flex-col max-md:items-center md:items-start">
    <div className="game-catalog__filters">
      <CategoriesMenu
        title={t('sort.label')}
        selectedItems={[selectedSortItem]}
        selectItem={(item: number) => setSelectedSortItem(item)}
        items={sortItems}
      />
      <CategoriesMenu
        title={t('platform.label')}
        selectedItems={[selectedPlatform]}
        selectItem={(item: number) => setSelectedPlatform(item)}
        items={platforms}
      />
      <CategoriesMenu
        title={t('categories.label')}
        selectedItems={selectedCategory}
        selectItem={(item: number) => setSelectedCategory((categories) => {
          if (categories.includes(item)) {
            return categories.filter((i) => i !== item);
          }
          return [...categories, item];
        })}
        items={filterCategories}
        checkbox={true}
      />
    </div>
    <div className="catalog__container">
      <Search
        placeholder={t('search')}
        searchValue={search}
        onChange={setSearch}
      />
      <ul className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-6">
        {categories.map((category, index) => (
          <CategoryCard {...category} key={index} />
        ))}
      </ul>
      {
        meta &&
        <div className="mt-3">
          <Pagination
            current={meta.current_page}
            max={meta.last_page}
            change={changePage}
          />
        </div>
      }
    </div>
  </div>;
}