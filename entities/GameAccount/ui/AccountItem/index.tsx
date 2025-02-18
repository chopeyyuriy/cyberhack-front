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

export const AccountItem: FC<ICheatItemProps> = ({
  image,
  currency,
  title,
  href,
  startPrice,
  children,
}) => {
  const t = useTranslations('accounts');
  return (
    <a href={href} className="account-item">
      <div 
        className="account-item__image"
        style={{ 'background-image': `url('${image}')` }}
      ></div>
      <div className="account-item__container">
        <h2 className={cn("account-item__title", unbounded.className)}>
          {title}
        </h2>
        <div className="account-item__wrapper">{children}</div>
      </div>
      <div className="account-item-price">
        <span className="account-item__text">{t('startWith')}:</span>
        <span className={cn("account-item__value", unbounded.className)}>
          {startPrice}{currency}
        </span>
      </div>
    </a>
  );
};
