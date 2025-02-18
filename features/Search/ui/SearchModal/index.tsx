"use client";

import { useTranslations, useLocale } from "next-intl";
import { FC, Fragment, useCallback, useRef, useState } from "react";

import { useOnClickOutside } from "usehooks-ts";

import { CSSTransition } from "react-transition-group";

import { useSearchStore } from "@/features/Search";

import { Search, SearchModalContainer, SeparatorLine } from "@/shared";

import { CategoryInlineLink, CategoryModalItem } from "@/shared/ui/Categories";

import cn from "classnames";

import "./styles.scss";
import { getGamesApi, searchGamesApi } from "@/entities/Game/api/index";
import { searchProductsApi } from "@/entities/Product/api/index";
import { searchAccountsApi } from "@/entities/GameAccount/api/index";
import { getProductStatusText } from "@/entities/Product/model/index";

export interface ICategoryItem {
  icon: string;
  title: string;
  count: number;
  href: string;
  items: {
    image: string;
    title: string;
    text: string;
    tag: string;
    href: string;
  }[];
}

function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

const SearchModal: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const [search, setSearch] = useState<string>('');
  const [items, setItems] = useState<ICategoryItem[]>([]);

  const lang = useLocale();

  const { isModalOpened, updateModalState } =
    useSearchStore((state) => state);

  const ref = useRef(null);
  const searchRef = useRef(null);

  const t = useTranslations("home");

  const handleRef = (value: any) => {
    ref.current = value.current;
  };

  const handleSearchRef = (value: any) => {
    searchRef.current = value.current;
    searchRef.current.focus();
  };

  const handleClickOutside = () => {
    updateModalState(false);
  };

  const openModal = (value: boolean) => {
    updateModalState(value);
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleSearch = useCallback(debounce(async (value: string) => {
    const { data: games } = await searchGamesApi(value);

    const { data: products } = await searchProductsApi(value);

    const { data: accounts } = await searchAccountsApi(value);

    const gamesResult = games.data.slice(0, 5);

    const gameItems = {
      icon: "stack",
      title: t('search.category'),
      count: gamesResult.length,
      href: "/catalog",
      items: [
        ...gamesResult.map((game: any) => ({
          image: game.image,
          title: game[`name_${lang}`],
          text: t('search.category'),
          tag: t('search.game'),
          href: `/catalog/${game.path}`,
        }))
      ],
    };

    const accountsItems = {
      icon: "stack",
      title: t('search.gameAccounts'),
      count: accounts.length,
      href: "/accounts",
      items: [
        ...accounts.map((product: any) => ({
          image: product.image,
          title: product[`name_${lang}`],
          text: t('search.gameAccount'),
          tag: t('search.gameAccount'),
          href: `/accounts/${product.path}`,
        }))
      ],
    };

    const productItems = {
      icon: "stack",
      title: t('search.cheats'),
      count: products.length,
      href: "/catalog",
      items: [
        ...products.map((product: any) => ({
          image: product.image,
          title: product[`name_${lang}`],
          text: product.game[`name_${lang}`],
          tag: getProductStatusText(product.status),
          href: `/catalog/${product.game.path}/${product.path}`,
        }))
      ],
    };

    const result = [gameItems];
    if (accountsItems.count) {
      result.push(accountsItems);
    }

    if (productItems.count) {
      result.push(productItems);
    }

    setItems(result);
  }, 500), [])

  const onSearch = async (value: string) => {
    setSearch(value);

    handleSearch(value)
  }

  return (
    <>
      {!isModalOpened && (
        <Search
          placeholder={t("search.placeholder")}
          click={() => openModal(true)}
          searchValue={search}
          onChange={onSearch}
          className={cn({
            "max-md:!hidden": !isMobile,
            "border !border-[white]/[0.04] bg-[white]/[0.02]": isMobile,
          })}
          // updateSearchValue={onSearchUpdate}
        />
      )}
      <CSSTransition
        in={isModalOpened}
        timeout={300}
        classNames="search-modal"
        unmountOnExit
        nodeRef={ref}
      >
        <SearchModalContainer setRef={handleRef}>
          <div className="search-modal__wrapper">
            <Search
              searchValue={search}
              onChange={onSearch}
              placeholder="Search"
              clear
              setRef={handleSearchRef}
            />
          </div>
          <div className="search-modal__container">
            <div className="search-modal-content">
              <span className="search-modal-content__text">
                {t('search.result')}:
              </span>
              <span className="search-modal-content__value">{search}</span>
            </div>
            <SeparatorLine />
            {items.map((category, index) => (
              <Fragment key={index}>
                <CategoryInlineLink
                  icon={category.icon}
                  title={category.title}
                  href={category.href}
                  count={category.count}
                />
                <ul className="search-modal__items">
                  {category.items.map((item, index2) => (
                    <CategoryModalItem {...item} key={index2} />
                  ))}
                </ul>
                {index !== items.length - 1 && <SeparatorLine />}
              </Fragment>
            ))}
          </div>
        </SearchModalContainer>
      </CSSTransition>
    </>
  );
};

export default SearchModal;
