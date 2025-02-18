"use client";
import { FC, useEffect, useRef, useState } from "react";

import cn from "classnames";

import { unbounded } from "@/shared/fonts";
import { SeparatorLine } from "@/shared";

import "./styles.scss";

import { ReviewCard } from "@/shared";

import { REVIEW_STATUS } from "@/shared/ui/Cards/Review";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/store/App/index";
import { Pagination } from "@/shared/ui/Pagination";
import { getReviewsForProduct } from "@/entities/Review/api";

interface Props {
  reviews: any;
  onChangePage: (page: number) => void;
}

const ProfileReviews: FC<Props> = ({ reviews, onChangePage }) => {
  const t = useTranslations("profile.reviews");
  const user = useAppSelector((state) => state.session.user);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [reviews]);

  return (
    <div className="profile-reviews w-full">
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-between px-[14px]">
          <span className="text-[11px] text-[#595962]">
            {t("labels.your").toUpperCase()}
          </span>
          <span className="text-[11px] text-[#595962]">
            {t("labels.status").toUpperCase()}
          </span>
        </div>
        <SeparatorLine light />
      </div>
      <div className="profile-reviews__container mt-1">
        {reviews.data.map((review, index) => (
          <ReviewCard
            index={index}
            key={index}
            status={review.status}
            title={review.variant}
            description={review.text}
            game={{
              image: require(
                `@/shared/assets/icons/avatars/animoji-${user?.avatar}.png`,
              ),
              username: user?.name,
              title: new Date(review.created_at).toLocaleDateString(),
            }}
          />
        ))}
        {reviews?.last_page > 1 ? (
          <div className="p-4">
            <Pagination
              current={reviews.current_page}
              max={reviews?.last_page}
              change={(val) => onChangePage(val)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileReviews;
