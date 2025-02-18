"use client";

import { FC } from "react";

import { useNewsSearchStore } from "@/features/News";

import { Search, TagWithClose } from "@/shared";
import "./styles.scss";

const SearchNews: FC = () => {
  const {
    search,
    categories,
    selectedCategories,
    updateSelectedCategories,
    updateSearchValue,
  } = useNewsSearchStore((state) => state);

  const onRemoveCategory = (index: number) => {
    updateSelectedCategories(
      selectedCategories.filter((item) => item !== index),
    );
  };

  return (
    <div className="search-news">
      <Search
        placeholder="Поиск новости"
        searchValue={search}
        onChange={updateSearchValue}
      />
      <ul className="search-news__list flex items-center gap-2">
        {selectedCategories.map((index) => (
          <TagWithClose
            text={categories[index].name}
            onClose={() => onRemoveCategory(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchNews;
