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

export const ProductUpdates: FC<Props> = ({
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
          {t('nav.updates')}
        </h2>
        <p className="cheat-page-media__description text-[13px] text-[#595962]">
          {t('description.updates')}
        </p>
      </div>
      <SeparatorLine />

      <ul className="cheat-page-media__list flex flex-col gap-4 p-4">
        {items.map((item, index) => (
          <Fragment key={index}>
            <li className="flex cursor-pointer flex-col gap-4 p-4">
              <div className="flex items-center gap-1 pl-3">
                <span
                  className={cn(
                    "text-xs text-[#8A8A98]",
                    unbounded.className,
                  )}
                >
                  {t('nav.updates')}:
                </span>
                <span
                  className={cn(
                    "text-xs text-[#C0C6D1]",
                    unbounded.className,
                  )}
                >
                  {item.date}
                </span>
                {!index && (
                  <span
                    className={cn(
                      "ml-3 rounded bg-[#DFC898]/[0.04] p-1 text-[10px] text-[#E1C58B]",
                      unbounded.className,
                    )}
                  >
                    new
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-[2px]">
                {item.items.map((option, index2) => (
                  <p
                    key={index2}
                    className={cn(
                      "flex items-start gap-3 rounded p-2 text-sm font-light",
                      {
                        "bg-[#567AB1]/[0.03] text-[#567AB1]":
                          option.status === "update",
                        "bg-[#5C5C65]/[0.03] text-[#5C5C65]":
                          option.status === "common",
                        "bg-[#4FAD50]/[0.03] text-[#318850]":
                          option.status === "add",
                        "bg-[#BE524A]/[0.03] text-[#BE524A]":
                          option.status === "remove",
                      },
                    )}
                  >
                    {option.text}
                  </p>
                ))}
              </div>
            </li>
            {index !== items.length && <SeparatorLine light />}
          </Fragment>
        ))}
      </ul>
    </div>
  </div>)
}