import { FC } from "react";

import Image from "next/image";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import { useTranslations } from "next-intl";

import "./styles.scss";

export interface ISelectionCardProps {
  title: string;
  backgroundImage: string;
  text: string;
  href: string;
  gameImages: string[];
}

const SelectionCard: FC<ISelectionCardProps> = ({
  title,
  backgroundImage,
  text,
  href,
  gameImages,
}) => {
  const t = useTranslations("home.selections");
  return (
    <a 
      href={href} 
      className="selection-card"
      style={{ 'background-image': `url('${backgroundImage}')` }}
    >
      <div className="selection-card__container">
        <div className="selection-card__content">
          <h2 className={cn("selection-card__title", unbounded.className)}>
            {title}
          </h2>
          <span className="selection-card__text">{text}</span>
        </div>
        <div className="selection-card__wrapper">
          <h4 className={cn("selection-card__subtitle", unbounded.className)}>
            {t('list')}:
          </h4>
          <ul className="selection-card__list">
            {gameImages.map((game, index) => (
              <li className="selection-card__item" key={index}>
                <Image
                  src={game}
                  width={20}
                  height={20}
                  alt="game-icon"
                  className="selection-card__icon"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default SelectionCard;
