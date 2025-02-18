import Image from "next/image";
import { FC, useMemo } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import { ReviewStatus } from "../../Slugs";
import { useTranslations } from "next-intl";

import "./styles.scss";

export enum REVIEW_STATUS {
  PUBLISHED,
  ON_MODERATION,
}
export interface IReviewCardProps {
  game: {
    image: string;
    username: string;
    title?: string;
  };
  title: number;
  description: string;
  status?: REVIEW_STATUS;
  date: string;
  index: number;
}

const ReviewCard: FC<IReviewCardProps> = ({
  game,
  title,
  description,
  status,
  date,
  index,
}) => {
  const t = useTranslations("product.reviews");

  const variants = useMemo(() => {
    const result: string[] = [];
    const maxVariants = 8;
    for (let variant = 0; variant < maxVariants; ++variant) {
      result.push(t(`modal.variants.${variant}`));
    }
    return result;
  }, []);

  return (
    <div
      className={cn("review-card", {
        "review-card_light": index % 2 === 0,
      })}
    >
      <div className="review-card__container">
        <div className="review-card-game review-card__wrapper">
          <Image
            src={game.image}
            alt="game"
            width={48}
            height={48}
            className="review-card-game__image"
          />
          <div className="review-card-game__content">
            <h4 className={cn("review-card-game__title", unbounded.className)}>
              {game.username}
            </h4>
            <span className="review-card__subtitle">{game.title ?? date}</span>
          </div>
        </div>
        {status !== undefined && (
          <div className="review-card__wrapper items-end">
            <ReviewStatus status={status} />
            <span className="review-card__subtitle">{date}</span>
          </div>
        )}
      </div>
      <div className="review-card__content">
        <h4
          className={cn("review-card__title", unbounded.className, {
            "review-card__title_bad": title >= 4,
          })}
        >
          <Image
            src={require(`@/shared/assets/icons/reviews/${title}.png`)}
            width={16}
            height={16}
          />
          {variants[title]}
        </h4>
        <p className="review-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
