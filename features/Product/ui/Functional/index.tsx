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

export const ProductFunctional: FC<Props> = ({
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
          {t('nav.functional')}
        </h2>
        <p className="cheat-page-media__description text-[13px] text-[#595962]">
          {t('description.subtitle')}
        </p>
      </div>
      <SeparatorLine />

      <ul className="cheat-page-media__list flex flex-col gap-4 p-4">
        {items.map((item, index) => (
          <Fragment key={index}>
            <li className="cheat-page-media__item">
              <div className="cheat-page-media__top flex items-center gap-2">
                <Image
                  src={require(`@/shared/assets/icons/${item.icon}.svg`)}
                  alt="icon"
                  width={24}
                  height={24}
                />
                <h4
                  className={cn(
                    "text-[13px] text-[#C0C6D1]",
                    unbounded.className,
                  )}
                >
                  {item.title}
                </h4>
              </div>
              <p className="flex flex-wrap gap-[6px] p-3">
                {item.tags.map((tag, index2) => (
                  <span
                    className="cursor-pointer rounded bg-[#5C5C65]/[0.03] p-[6px] text-[13px] text-[#595962]"
                    key={index2}
                  >
                    {tag}
                  </span>
                ))}
              </p>
            </li>
            {index !== items.length && <SeparatorLine />}
          </Fragment>
        ))}
      </ul>
    </div>
  </div>)
}