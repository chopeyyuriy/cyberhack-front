"use client";

import { FC } from "react";

import "./styles.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

export interface IBannersListProps {
  image?: string;
  count?: number;
}

interface Props {
  images: string[];
}

const BannersList: FC<Props> = ({ images }) => {

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  let slidesPerView = null;

  if (isMobile) {
    slidesPerView = 1;
  } else {
    slidesPerView = 3;
  }

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={20}
      navigation
      className="banners-list max-md:!w-full"
      loop
      modules={[Pagination]}
      pagination
    >
      {images.map((item, index) => (
        <SwiperSlide className="banners-list__item max-md:!w-full" key={index}>
          <div 
            className="banners-list__image"
            style={{ 'background-image': `url('${item}')` }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannersList;
