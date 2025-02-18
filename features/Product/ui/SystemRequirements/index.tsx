import Image from "next/image";
import { ProductContent } from "@/shared/ui/Cards/index";
import { SeparatorLine } from "@/shared/ui/Slugs/index";
import { FC, Fragment } from "react";
import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

interface Props {
  product: any;
  game: any;
  items: any[];
}

export const ProductSystemRequirements: FC<Props> = ({
  product,
  game,
  items
}) => {
  const lang = useLocale();

  const t = useTranslations('product');

  return (<div className="cheat-page__main w-full">
    <ProductContent
      image={product.image}
      subtitle={`${t('cheatFor')} ${game[`name_${lang}`]}`}
      title={product[`name_${lang}`]}
      status={product.status}
      tags={product.tags.map(({ tag }) => ({
        text: tag[`label_${lang}`],
        highlight: tag.is_selected
      }))}
      description={product[`description_${lang}`]}
    />
    <div className="cheat-page-media mt-5 rounded bg-[#13141566] p-1">
      <div className="cheat-page-media__top flex flex-col gap-[6px] rounded-md p-4">
        <h2
          className={cn(
            "cheat-page-media__title font-light text-[#C0C6D1]",
            unbounded.className,
          )}
        >
          {t('nav.systemRequirements')}
        </h2>
        <p className="cheat-page-media__description text-[13px] text-[#595962]">
          {t('description.subtitle')}
        </p>
      </div>
      <SeparatorLine />

      <ul className="cheat-page-media__list flex flex-col gap-4 p-6">
        {items.map((item, index) => (
          <li
            className={cn(
              "flex items-center justify-between rounded p-4",
              {
                "bg-[white]/[0.01]": index % 2 !== 0,
              },
            )}
          >
            <span className="text-sm font-light text-[#595962]">
              {item.name}
            </span>
            <span className="text-right text-xs text-[#8A8A98]">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>)
}