import GameAccountContent from "@/shared/ui/Cards/GameAccountContent/index";
import { SeparatorLine } from "@/shared/ui/Slugs/index";
import { FC } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

interface Props {
  product: any;
  mainImage: any;
  images: any[];
}

export const AccountsMedia: FC<Props> = ({
  product,
  mainImage,
  images
}) => {
  const lang = useLocale();

  const t = useTranslations('account');

  return (<div className="cheat-page__main w-full">
    <GameAccountContent
      image={product.image}
      subtitle={t('gameAccount')}
      title={product[`name_${lang}`]}
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
          {t('nav.media')}
        </h2>
        <p className="cheat-page-media__description text-[13px] text-[#595962]">
          {t('description.label')}
        </p>
      </div>
      <SeparatorLine />

      {
        mainImage &&
        <div className="cheat-page-media__container  p-4">
          <Image
            src={mainImage.image}
            alt="image"
            width={732}
            height={388}
            className="cheat-page-media__image"
          />
          <ul className="cheat-page-media__list mt-4 flex items-center gap-2">
            {images.slice(1).map((item, index) => (
              <li className="cheat-page-media__item cursor-pointer">
                <Image
                  src={item.image}
                  alt="image"
                  width={140}
                  height={82}
                  className="cheat-page-media__small"
                />
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  </div>)
}