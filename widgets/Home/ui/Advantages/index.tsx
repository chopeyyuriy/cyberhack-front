"use client";

import Image from "next/image";
import { FC } from "react";

import cn from "classnames";

import { MainContainer } from "@/shared";

import { useAdvantages } from "@/shared/constants";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { unbounded } from "@/shared/fonts";
import "./styles.scss";

const Advantages: FC = () => {
  const advantages = useAdvantages();

  return (
    <div className="advantages">
      <Image
        src={require("@/shared/assets/images/home/advantages/bg.svg")}
        alt="bg"
        className="advantages__background"
      />
      <MainContainer>
        <h2 className={cn("advantages__title", unbounded.className)}>
          Почему выбирают нас?
        </h2>
        <Swiper
          pagination
          modules={[Pagination]}
          className="advantages-list_mobile"
        >
          {advantages.map((advantage, index) => (
            <SwiperSlide key={index}>
              <li className="advantages-list__item">
                <Image
                  src={require(
                    `@/shared/assets/images/home/advantages/${advantage.image}.svg`,
                  )}
                  width={224}
                  height={136}
                  alt="advantage-image"
                  className="advantages-list__image"
                />
                <div className="advantages-list__content">
                  <h2 className="advantages-list__title">{advantage.title}</h2>
                  <p className="advantages-list__description">
                    {advantage.description}
                  </p>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
        <ul className="advantages-list">
          {advantages.map((advantage, index) => (
            <li className="advantages-list__item" key={index}>
              <Image
                src={require(
                  `@/shared/assets/images/home/advantages/${advantage.image}.svg`,
                )}
                width={224}
                height={136}
                alt="advantage-image"
                className="advantages-list__image"
              />
              <div className="advantages-list__content">
                <h2 className="advantages-list__title">{advantage.title}</h2>
                <p className="advantages-list__description">
                  {advantage.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </MainContainer>
    </div>
  );
};

export default Advantages;
