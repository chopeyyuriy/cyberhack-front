"use client";

import { FC } from "react";

import { GroupHeading, MainContainer, SelectionCard } from "@/shared";

import { ISelectionCardProps } from "@/shared/ui/Cards/Selection";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

interface Props {
  selections: ISelectionCardProps[];
}

const Selection: FC<Props> = ({
  selections
}) => {
  const t = useTranslations("home.selections");

  return (
    <section className="selection">
      {/* TODO add translation */}
      <MainContainer>
        <GroupHeading
          title={t('title')}
          text={t('text')}
        />
        <Swiper
          className="selection-list_mobile"
          modules={[Pagination]}
          pagination
        >
          {selections.map((item, index) => (
            <SwiperSlide key={index}>
              <SelectionCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="selection-list">
          {selections.map((item, index) => (
            <SelectionCard {...item} key={index} />
          ))}
        </div>
      </MainContainer>
    </section>
  );
};

export default Selection;
