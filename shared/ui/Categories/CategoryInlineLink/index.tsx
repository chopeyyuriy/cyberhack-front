import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { useTranslations } from "next-intl";

import "./styles.scss";

export interface ICategoryInlineLinkProps {
  icon: string;
  title: string;
  href: string;
  count: number;
}

const CategoryInlineLink: FC<ICategoryInlineLinkProps> = ({
  icon,
  title,
  href,
  count,
}) => {
  const t = useTranslations('home.search');

  return (
    <a
      className={cn("category-inline-link", unbounded.className)}
      href={href}
    >
      <div className="category-inline-link__wrapper">
        <Image
          src={require(`@/shared/assets/icons/${icon}.svg`)}
          alt="stack"
          width={20}
          height={20}
          className="category-inline-link__icon"
        />
        <span className="category-inline-link__title">{title}</span>
        <span className="category-inline-link__count">{count}</span>
      </div>
      <span className={cn("category-inline-link__button", unbounded.className)}>
        {t('goto')}
      </span>
    </a>
  );
};

export default CategoryInlineLink;
