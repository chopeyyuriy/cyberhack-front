import { FC } from "react";

import cn from "classnames";
import Image from "next/image";

import { unbounded } from "@/shared/fonts";

import "./styles.scss";

export interface ICategoryCardProps {
  href: string;
  image: string;
  title: string;
}

const CategoryCard: FC<ICategoryCardProps> = ({ href, image, title }) => {
  return (
    <a href={href} className={cn("category-card", unbounded.className)}>
      {/* <div 
        className="category-card__image"
        style={{ 'background-image': `url('${image}')` }}
      ></div> */}
      <Image
        src={image}
        alt="image"
        width={216}
        height={216}
        className="category-card__image"
      />
      <h4 className="category-card__title">{title}</h4>
    </a>
  );
};

export default CategoryCard;
