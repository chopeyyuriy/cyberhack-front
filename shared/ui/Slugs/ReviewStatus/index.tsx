import { FC } from "react";

import { REVIEW_STATUS } from "../../Cards/Review";

import cn from "classnames";

import "./styles.scss";

export interface IReviewStatusProps {
  status: REVIEW_STATUS;
}

const ReviewStatus: FC<IReviewStatusProps> = ({ status }) => {
  let text: string | null = null;

  if (status === REVIEW_STATUS.PUBLISHED) {
    text = "ОПУБЛИКОВАН";
  } else {
    text = "НА МОДЕРАЦИИ";
  }

  return (
    <span
      className={cn("review-status", {
        "review-status_delivered": status === REVIEW_STATUS.PUBLISHED,
        "review-status_progress": status === REVIEW_STATUS.ON_MODERATION,
      })}
    >
      {text}
    </span>
  );
};

export default ReviewStatus;
