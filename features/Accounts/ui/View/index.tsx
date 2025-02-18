"use client";

import { CheatItem } from "@/entities/Product";
import { getProductStatusText } from "@/entities/Product/model/index";
import {
  SeparatorLine,
  Slash,
} from "@/shared";
import { IconNew, IconPopular, IconPriceAsc, IconPriceDesc } from "@/shared/assets/icons/dynamic/Sort/index";
import { CategoriesMenu } from "@/shared/ui/Categories/index";
import { SearchNews } from "@/widgets/News";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useLocale } from "next-intl";

import { FC } from "react";
import { IconBSG, IconEpicGames, IconSteam } from "@/shared/assets/icons/dynamic/Platform/index";
import { getAccountsApi } from "@/entities/GameAccount/api/index";
import { Search } from "@/shared/ui/Inputs/index";
import { AccountItem } from "@/entities/GameAccount/ui/AccountItem/index";
import { useTranslations } from "next-intl";

import "./styles.scss"

interface Props {
  accounts: any[];
  wallet: any;
}

export const AccountsView: FC<Props> = ({
  accounts: initialAccounts,
  wallet
}) => {
  const lang = useLocale();

  const t = useTranslations('accounts');

  const region = 'global';

  const getPrice = (value: number) => {
    const usd = wallet.usd;
    if (lang === 'ru') {
      return value;
    }
    return (value / usd).toFixed(2);
  }

  const currency = lang == 'ru' ? '₽' : '$';

  const [currentPlatform, setCurrentPlatform] = useState<number>(0);
  const [currentSort, setCurrentSort] = useState<number>();

  const [accounts, setAccounts] = useState<any[]>(initialAccounts);

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const status = [undefined, 0, 1, 2];
    getAccountsApi(status[currentPlatform]).then(({ data }: any) => {
      data = data.filter((item: any) => {
        return item.name_ru.toLowerCase().includes(search.toLowerCase()) || item.name_en.toLowerCase().includes(search.toLowerCase())
      }).sort((a: any, b: any) => {
        if (currentSort === 0) {
          return (new Date(b.created_at)).getTime() - (new Date(a.created_at)).getTime();
        }
        if (currentSort === 1) {
          return (new Date(a.created_at)).getTime() - (new Date(b.created_at)).getTime();
        }
        if (currentSort === 2) {
          return a.price[region].cost - b.price[region].cost
        }
        if (currentSort === 3) {
          return b.price[region].cost - a.price[region].cost;
        }
        return 0;
      })
      setAccounts(data);
    });
  }, [currentPlatform, currentSort, search]);

  const platforms = [
    {
      name: 'Все',
      icon: <IconPopular />
    },
    {
      name: 'Steam',
      icon: <IconSteam />
    },
    {
      name: 'Epic Games',
      icon: <IconEpicGames />
    },
    {
      name: 'BSG Launcher',
      icon: <IconBSG />
    }
  ];

  const sortItems = [
    {
      name: t('sort.new'),
      icon: <IconNew />
    },
    {
      name: t('sort.popular'),
      icon: <IconPopular />
    },
    {
      name: t('sort.price.asc'),
      icon: <IconPriceAsc />
    },
    {
      name: t('sort.price.desc'),
      icon: <IconPriceDesc />
    }
  ];

  return (
    <div className="select-cheats__container mt-[18px] flex items-center gap-5 max-md:flex-col-reverse md:items-start">
      <div className="select-cheats__filters">
        <CategoriesMenu
          title={t('platform')}
          selectedItems={[currentPlatform]}
          items={platforms}
          selectItem={setCurrentPlatform}
        />
        <CategoriesMenu
          title={t('sort.label')}
          selectedItems={currentSort !== undefined ? [currentSort] : []}
          selectItem={setCurrentSort}
          items={sortItems}
        />
      </div>
      <div className="select-cheats__wrapper w-full rounded-md bg-[#0E1011E6] p-3">
        <div className="p-3">
          <Search
            placeholder={t('search')}
            searchValue={search}
            onChange={setSearch}
          />
        </div>
        <ul className="select-cheats__list flex flex-col gap-3">
          {accounts.map((item, index) => (
            <Fragment key={index}>
              <AccountItem 
                title={item[`name_${lang}`]} 
                image={item.image} 
                startPrice={getPrice(item.price[region].cost)}
                currency={currency}
                href={`/accounts/${item.path}`}
              >
                <div className="flex items-center gap-1">
                  <div className={`accounts-item__tag accounts-item__tag_platform-${item.platform} flex items-center gap-2 px-1`}>
                    {platforms[item.platform + 1].icon}
                    {platforms[item.platform + 1].name}
                  </div>
                  <div className="accounts-item__tag flex items-center gap-2 px-1">
                    {t('gameAccount')}
                  </div>
                </div>
              </AccountItem>
              <SeparatorLine light />
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}