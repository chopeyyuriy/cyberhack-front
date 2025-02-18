"use client";

import Image from "next/image";
import { FC } from "react";

import { unbounded } from "@/shared/fonts";
import cn from "classnames";

import Link from "next/link";
import "./styles.scss";

export interface INewsCard {
  title: string;
  image?: string;
  href: string;
  description: string;
  date: string;
  icon?: string;
  game: string;
}

const NewsCard: FC<INewsCard> = ({
  title,
  image,
  href,
  description,
  date,
  icon,
  game,
}) => {
  return (
    <li>
      <a href={href} className="news-card">
        <h2 className={cn("news-card__title", unbounded.className)}>{title}</h2>
        <div className="flex w-full flex-col gap-3">
          <div 
            className="news-card__image"
            style={{ 'background-image': `url('${image}')` }}
          ></div>
          <p className="news-card__description">{description}</p>
        </div>

        <div className="news-card__wrapper">
          <div className="news-card-game">
            <Image
              src={icon}
              alt="icon"
              width={20}
              height={20}
              className="news-card-game__icon"
            />
            <span className={cn("news-card-game__text", unbounded.className)}>
              {game}
            </span>
          </div>
          <span className={cn("news-card__date", unbounded.className)}>
            {date}
          </span>
        </div>
      </a>
    </li>
  );
};

export default NewsCard;
