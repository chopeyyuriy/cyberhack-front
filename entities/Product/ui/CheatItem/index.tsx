import Image from "next/image";
import { FC, ReactNode } from "react";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

import "./styles.scss";

export interface ICheatItemProps {
  image: string;
  currency: string;
  title: string;
  startPrice: number;
  href: string;
  children?: ReactNode;
}

const CheatItem: FC<ICheatItemProps> = ({
  image,
  currency,
  title,
  href,
  startPrice,
  children,
}) => {
  const t = useTranslations('game');

  return (
    <a href={href} className="cheat-item">
      <Image
        src={image}
        width={56}
        height={56}
        alt="image"
        className="cheat-item__image"
      />
      <div className="cheat-item__container">
        <h2 className={cn("cheat-item__title", unbounded.className)}>
          {title}
        </h2>
        <div className="cheat-item__wrapper">{children}</div>
      </div>
      <div className="cheat-item-price">
        <span className="cheat-item__text">{t('startWith')}:</span>
        <span className={cn("cheat-item__value", unbounded.className)}>
          {startPrice}{currency}
        </span>
      </div>
    </a>
  );
};

export default CheatItem;
