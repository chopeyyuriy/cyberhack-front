import { FC } from "react";

import Image from "next/image";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";

import Link from "next/link";
import "./styles.scss";

export interface ICategoryModalItemProps {
  title: string;
  text: string;
  image: string;
  tag: string;
  styles?: object;
  href: string;
  isMobile?: boolean;
}

const CategoryModalItem: FC<ICategoryModalItemProps> = ({
  title,
  isMobile,
  text,
  image,
  tag,
  styles,
  href,
}) => {
  return (
    <li className="category-modal-item">
      <a href={href} className="category-modal-item__container">
        <div className="category-modal-item__wrapper">
          <Image
            src={image}
            alt="category-image"
            width={42}
            height={42}
            className="category-modal-item__image"
          />
          <div className="category-modal-item__content">
            <h4
              className={cn("category-modal-item__title", unbounded.className)}
            >
              {title}
            </h4>
            <span className="category-modal-item__text">{text}</span>
          </div>
        </div>
        {!isMobile && (
          <div className="category-modal-item__tag" style={styles}>
            {tag}
          </div>
        )}
      </a>
    </li>
  );
};

export default CategoryModalItem;
