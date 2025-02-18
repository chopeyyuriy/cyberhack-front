"use client";

import Image from "next/image";
import { ProductContent } from "@/shared/ui/Cards/index";
import { SeparatorLine } from "@/shared/ui/Slugs/index";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { PrimaryButton } from "@/shared";
import { Pagination } from "@/shared/ui/Pagination/index";
import { ReviewCard } from "@/shared";
import { REVIEW_STATUS } from "@/shared/ui/Cards/Review";
import { ReviewModal } from "../ReviewModal/index";
import { useAppSelector } from "@/store";
import { getReviewsForProduct } from "@/entities/Review/api";

interface Props {
  product: any;
  game: any;
}

export const ProductReviews: FC<Props> = ({ product, game }) => {
  const lang = useLocale();
  const user = useAppSelector((state) => state.session.user);
  const [items, setItems] = useState<any>({});
  const wrapperRef = useRef<any>(null);

  const [isModalActive, setIsModalActive] = useState(false);

  const t = useTranslations("product");

  const handleGetItems = (page: number = 1) => {
    getReviewsForProduct("product", product.id, page).then((resp) => {
      setItems(resp?.data);
      wrapperRef.current &&
        wrapperRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        });
    });
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <div className="cheat-page__main w-full">
      {isModalActive && (
        <ReviewModal
          type="product"
          productID={product.id}
          close={() => setIsModalActive(false)}
        />
      )}

      <ProductContent
        image={product.image}
        subtitle={`${t("cheatFor")} ${game[`name_${lang}`]}`}
        title={product[`name_${lang}`]}
        status={product.status}
        tags={product.tags.map(({ tag }) => ({
          text: tag[`label_${lang}`],
          highlight: tag.is_selected,
        }))}
        description={product[`description_${lang}`]}
      />
      <div
        className="cheat-page-media mt-5 rounded bg-[#13141566] p-1"
        ref={wrapperRef}
      >
        {user ? (
          <>
            {" "}
            <div className="cheat-page-media__top flex flex-row items-center justify-between gap-1 rounded-md p-4">
              <div className="flex flex-col gap-[6px]">
                <h2
                  className={cn(
                    "cheat-page-media__title font-light text-[#C0C6D1]",
                    unbounded.className,
                  )}
                >
                  {t("nav.updates")}
                </h2>
                <p className="cheat-page-media__description text-[13px] text-[#595962]">
                  {t("description.updates")}
                </p>
              </div>
              <div className="pr-4">
                <PrimaryButton
                  color="#C0C6D1"
                  textColor="#0E1012"
                  text={t("reviews.leave")}
                  classes="w-full"
                  click={() => setIsModalActive(true)}
                />
              </div>
            </div>
            <SeparatorLine />
          </>
        ) : (
          <div className="cheat-page-media__top flex items-center justify-center pt-5">
            <h2 className={"cheat-page-media__title font-light text-[#C0C6D1]"}>
              {t("reviews.noAuthMesssage")}
            </h2>
          </div>
        )}

        <ul className="cheat-page-media__list flex flex-col gap-4 p-4">
          {items?.data?.map((review, index) => (
            <ReviewCard
              index={index}
              key={index}
              title={review.variant}
              description={review.text}
              game={{
                image: require(
                  `@/shared/assets/icons/avatars/animoji-${review?.user?.avatar}.png`,
                ),
                username: review?.user?.name,
                title: new Date(review.created_at).toLocaleDateString(),
              }}
            />
          ))}
        </ul>
        {items?.last_page > 1 ? (
          <div className="p-4">
            <Pagination
              current={items.current_page}
              max={items?.last_page}
              change={(val) => handleGetItems(val)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
