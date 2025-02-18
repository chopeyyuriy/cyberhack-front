import { FC } from "react";

import Link from "next/link";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";

export interface IFooterNavigationProps {
  title: string;
  list: {
    title: string;
    href: string;
  }[];
}

const FooterNavigation: FC<IFooterNavigationProps> = ({ title, list }) => {
  return (
    <nav className="footer-navigation">
      <h2 className={cn("footer-navigation__title", unbounded.className)}>
        {title}
      </h2>
      <ul className="footer-navigation__list">
        {list.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className="footer-navigation__item"
          >
            {item.title}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
