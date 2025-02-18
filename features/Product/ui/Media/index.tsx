"use client";

import Image from "next/image";
import { ProductContent } from "@/shared/ui/Cards/index";
import { SeparatorLine } from "@/shared/ui/Slugs/index";
import { FC, useState } from "react";
import { unbounded } from "@/shared/fonts";
import cn from "classnames";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import "./styles.scss";

interface Props {
  product: any;
  game: any;
  mainImage: any;
  video: string;
  images: any;
}

export const ProductMedia: FC<Props> = ({
  product,
  game,
  mainImage,
  video,
  images,
}) => {
  const lang = useLocale();

  const t = useTranslations("product");

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);

  const nextImage = () => {
    const items = images.filter((item) => !!item);

    if (currentImageIndex + 1 >= items.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    const items = images.filter((item) => !!item);

    if (currentImageIndex - 1 < 0) {
      setCurrentImageIndex(items.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="cheat-page__main w-full">
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

      {currentImageIndex > -1 && (
        <div className="cheat-page-media-full">
          <div
            className="cheat-page-media-full__button"
            onClick={prevImage}
          ></div>
          <div
            className="cheat-page-media-full__overlay"
            onClick={() => setCurrentImageIndex(-1)}
          ></div>
          <div className="cheat-page-media-full__image">
            <img src={images[currentImageIndex].image} alt="" />
          </div>
          <div
            className="cheat-page-media-full__button"
            onClick={nextImage}
          ></div>
        </div>
      )}

      <div className="cheat-page-media mt-5 rounded bg-[#13141566] p-1">
        <div className="cheat-page-media__top flex flex-col gap-[6px] rounded-md p-4">
          <h2
            className={cn(
              "cheat-page-media__title font-light text-[#C0C6D1]",
              unbounded.className,
            )}
          >
            {t("nav.media")}
          </h2>
          <p className="cheat-page-media__description text-[13px] text-[#595962]">
            {t("description.subtitle")}
          </p>
        </div>
        <SeparatorLine />

        {(mainImage || video) && (
          <div className="cheat-page-media__container  p-4">
            {!video || video.includes("null") ? (
              <Image
                src={mainImage.image}
                alt="image"
                width={732}
                height={388}
                className="cheat-page-media__image"
                onClick={() => setCurrentImageIndex(0)}
              />
            ) : (
              <iframe
                width="100%"
                height="315"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            <ul className="cheat-page-media__list mt-4 flex items-center gap-2">
              {images.slice(!video ? 1 : 0).map((item, index) => (
                <li
                  className="cheat-page-media__item cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={item.image}
                    alt="image"
                    width={140}
                    height={82}
                    className="cheat-page-media__small"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
