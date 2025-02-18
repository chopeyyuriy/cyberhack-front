"use client";

import { MainContainer, PrimaryButton } from "@/shared";

import { unbounded } from "@/shared/fonts";
import { ProfileReviews } from "@/widgets/Profile";
import { useTranslations } from "next-intl";

import cn from "classnames";
import { getUserReviews } from "@/entities/Review/api/index";
import { getGamesApi } from "@/entities/Game/api/index";
import { useEffect, useMemo, useState } from "react";

export default function ProfileReviewsWidget() {
  const t = useTranslations("profile.reviews");

  const [reviews, setReviews] = useState<any>(null);

  const handleGetReviews = (page: number) =>
    getUserReviews(page).then(({ data }) => setReviews(data));

  useEffect(() => {
    handleGetReviews(1);
  }, []);

  return (
    <div className="reviews">
      <MainContainer classes="flex flex-col gap-6 !px-[30px]">
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-3">
            <h2 className={cn("text-sm text-[#C0C6D1]", unbounded.className)}>
              {t("title")}
            </h2>
            <span className="support__number flex h-6 w-6 items-center justify-center rounded-md bg-[#95B6B3] text-[11px] font-semibold text-[#0E1012]">
              {reviews ? reviews.total : 0}
            </span>
          </div>
          <p className="text-[13px] text-[#595962]">{t("text")}</p>
        </div>
        {reviews && (
          <ProfileReviews reviews={reviews} onChangePage={handleGetReviews} />
        )}
      </MainContainer>
    </div>
  );
}
