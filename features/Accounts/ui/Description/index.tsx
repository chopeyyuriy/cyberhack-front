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
}

export const AccountsDescription: FC<Props> = ({
  product,
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
          {t('nav.description')}
        </h2>
        <p className="cheat-page-media__description text-[13px] text-[#595962]">
          {t('description.label')}
        </p>
      </div>
      <SeparatorLine />

      <div className="p-4">
        <p className="cheat-page-media__full-description text-[15px] text-[#595962]">
          {product[`full_description_${lang}`]}
        </p>
      </div>
    </div>
  </div>)
}