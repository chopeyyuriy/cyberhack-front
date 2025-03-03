"use client";

import { CheatItem } from "@/entities/Product";
import { getProductStatusText } from "@/entities/Product/model/index";
import { SelectCheatCard, SeparatorLine, Slash } from "@/shared";
import {
  IconNew,
  IconPopular,
  IconPriceAsc,
  IconPriceDesc,
} from "@/shared/assets/icons/dynamic/Sort/index";
import { CategoriesMenu } from "@/shared/ui/Categories/index";
import { SearchNews } from "@/widgets/News";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { FC } from "react";
import { getProductsByGameApi } from "@/entities/Product/api/index";
import { Search } from "@/shared/ui/Inputs/index";
import { useRouter } from "next/router";

interface Props {
  products: any[];
  game: any;
  wallet: any;
  childrenItems: any[];
}

export const GameView: FC<Props> = ({
  products: initialProducts,
  game,
  wallet,
  childrenItems,
}) => {
  const lang = useLocale();

  const t = useTranslations("game");

  const region = "global";

  const getPrice = (value: number) => {
    const usd = wallet.usd;
    if (lang === "ru") {
      return value;
    }
    return (value / usd).toFixed(2);
  };

  const currency = lang == "ru" ? "₽" : "$";

  const [currentStatus, setCurrentStatus] = useState<number>(0);
  const [currentSort, setCurrentSort] = useState<number>();
  const [currentVersion, setCurrentVersion] = useState<number>(
    childrenItems.findIndex((item) => item.id === game.id),
  );

  const [products, setProducts] = useState<any[]>(initialProducts);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const status = [undefined, 2, 4, 0, 1];
    getProductsByGameApi(game.id, status[currentStatus]).then(
      ({ data }: any) => {
        data = data.sort((a: any, b: any) => {
          if (currentSort === 0) {
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          }
          if (currentSort === 1) {
            return (
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
            );
          }
          if (currentSort === 2) {
            return a.price[region].cost - b.price[region].cost;
          }
          if (currentSort === 3) {
            return b.price[region].cost - a.price[region].cost;
          }
          return 0;
        });
        setProducts(data);
      },
    );
  }, [currentStatus, currentSort]);

  const statuses = [
    {
      name: t("status.all"),
      icon: <IconPopular />,
    },
    {
      name: "Undetected",
      icon: "status/2.svg",
    },
    {
      name: "At own risk",
      icon: "status/1.svg",
    },
    {
      name: "Updated",
      icon: "status/0.svg",
    },
    {
      name: "Detected",
      icon: "status/1.svg",
    },
  ];

  const sortItems = [
    {
      name: t("sort.new"),
      icon: <IconNew />,
    },
    {
      name: t("sort.popular"),
      icon: <IconPopular />,
    },
    {
      name: t("sort.price.asc"),
      icon: <IconPriceAsc />,
    },
    {
      name: t("sort.price.desc"),
      icon: <IconPriceDesc />,
    },
  ];

  const childrens = childrenItems.map((item: any) => ({
    name: item[`name_${lang}`],
    icon: item.logo,
  }));

  const statusColor = ["#4A88C2", "#CD412B", "#5A9D69", "#4A88C2", "#CD412B"];

  const statusBackground = [
    "rgba(74, 136, 194, 0.02)",
    "rgba(205, 65, 43, 0.02)",
    "rgba(90, 157, 105, 0.02)",
  ];

  const selectVersion = (index: number) => {
    const item = childrenItems[index];
    setCurrentVersion(index);

    window.location.replace(`/catalog/${item.path}`);
  };

  return (
    <div className="select-cheats__container mt-[18px] flex items-center gap-5 max-md:flex-col-reverse md:items-start">
      <div className="select-cheats__filters">
        {childrens && childrens.length && (
          <CategoriesMenu
            title={t("status.version")}
            selectedItems={[currentVersion]}
            items={childrens}
            selectItem={selectVersion}
          />
        )}
        <CategoriesMenu
          title={t("status.label")}
          selectedItems={[currentStatus]}
          items={statuses}
          selectItem={setCurrentStatus}
        />
        <CategoriesMenu
          title={t("sort.label")}
          selectedItems={currentSort !== undefined ? [currentSort] : []}
          selectItem={setCurrentSort}
          items={sortItems}
        />
      </div>
      <div className="select-cheats__wrapper w-full rounded-md bg-[#0E1011E6] p-3">
        <div className="p-3">
          <Search
            placeholder={t("search")}
            searchValue={search}
            onChange={setSearch}
          />
        </div>
        <ul className="select-cheats__list flex flex-col gap-3">
          {products.map((item, index) => (
            <Fragment key={index}>
              <CheatItem
                title={item[`name_${lang}`]}
                image={item.image}
                startPrice={getPrice(item.price[region].cost)}
                currency={currency}
                href={`/catalog/${game.path}/${item.path}`}
              >
                <div className="flex items-center gap-1">
                  <div className="select-cheats__tag flex items-center gap-2 px-1">
                    <Image
                      src={require(
                        `@/shared/assets/icons/status/${item.status}.svg`,
                      )}
                      alt="status"
                      width={16}
                      height={16}
                    />
                    <span
                      className="select-cheats__text text-[13px] text-[#71B280]"
                      style={{ color: statusColor[item.status] }}
                    >
                      {getProductStatusText(item.status)}
                    </span>
                  </div>
                  <Slash classes="!h-[16px]" />
                  {/* <div className="select-cheats__tag flex items-center gap-2 px-1">
                    <Image
                      src={require("@/shared/assets/icons/status.svg")}
                      alt="status"
                      width={16}
                      height={16}
                    />
                    <span className="select-cheats__text text-[13px] text-[#71B280]">
                      Undetected
                    </span>
                  </div>
                  <Slash classes="!h-[16px]" />
                  <div className="select-cheats__tag flex items-center gap-2 px-1">
                    <Image
                      src={require("@/shared/assets/icons/status.svg")}
                      alt="status"
                      width={16}
                      height={16}
                    />
                    <span className="select-cheats__text text-[13px] text-[#71B280]">
                      Undetected
                    </span>
                  </div> */}
                </div>
              </CheatItem>
              <SeparatorLine light />
            </Fragment>
          ))}
        </ul>
      </div>
      <SelectCheatCard
        name={game[`name_${lang}`]}
        description={game[`description_${lang}`]}
        image={game.logo}
      />
    </div>
  );
};
