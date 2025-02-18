import Image from "next/image";
import { FC } from "react";
import { SeparatorLine } from "../../Slugs";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";

import "./styles.scss";
import { getProductStatusText } from "@/entities/Product/model/index";

export interface IProductContentProps {
  image: string;
  subtitle: string;
  title: string;
  status: number;
  tags: {
    text: string;
    highlight?: boolean;
  }[];
  description: string;
}

const ProductContent: FC<IProductContentProps> = ({
  image,
  subtitle,
  title,
  status,
  tags,
  description,
}) => {
  const statusColor = [
    '#4A88C2',
    '#CD412B',
    '#5A9D69',
    '#4A88C2',
    '#CD412B'
  ];

  const statusBackground = [
    'rgba(74, 136, 194, 0.02)',
    'rgba(205, 65, 43, 0.02)',
    'rgba(90, 157, 105, 0.02)',
    'rgba(74, 136, 194, 0.02)',
    'rgba(205, 65, 43, 0.02)'
  ];

  return (
    <div className="product-content">
      <div className="product-content__top">
        <Image
          src={image}
          width={52}
          height={52}
          alt="product"
        />
        <div className="product-content__wrapper">
          <span
            className={cn("product-content__subtitle", unbounded.className)}
          >
            {subtitle}
          </span>
          <h4 className={cn("product-content__title", unbounded.className)}>
            {title}
          </h4>
        </div>
        <span 
          className="product-content-status"
          style={{ background: statusBackground[status] }}
        >
          <Image
            src={require(`@/shared/assets/icons/status/${status}.svg`)}
            width={16}
            height={16}
            className="product-content-status__icon"
            alt="status"
          />
          <span className="product-content-status__text" style={{ color: statusColor[status] }}>{getProductStatusText(status)}</span>
        </span>
      </div>
      <SeparatorLine />
      <ul className="product-content__list">
        {tags.map((item, index) => (
          <li
            key={index}
            className={cn("product-content__item", {
              "product-content__item_highlight": item.highlight,
            })}
          >
            <span className="product-content__text">#{item.text}</span>
          </li>
        ))}
      </ul>
      <p className="product-content__description">{description}</p>
    </div>
  );
};

export default ProductContent;
