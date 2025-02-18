import Link from "next/link";
import { FC, ReactNode } from "react";

import Image from "next/image";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LogoIcon from "@/shared/assets/icons/logo.svg";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";
import { useMediaQuery } from "react-responsive";

export interface IAuthorizationWithoutStepsProps {
  children?: ReactNode;
}

const AuthorizationWithoutSteps: FC<IAuthorizationWithoutStepsProps> = ({
  children,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <div className="authorization-widget-without-steps flex items-center max-md:m-3">
      <div className="authorization-widget-without-steps__container flex h-[100vh] w-1/2 flex-col justify-center bg-[#14161A] px-[262px] max-md:w-full max-md:p-[18px]">
        <div className="flex h-[100vh] w-[428px] flex-col items-start justify-center max-md:w-full">
          <a href="/" className="mb-[48px]">
            <Image src={LogoIcon} alt="logo" width={92} height={40} />
          </a>
          {children}
        </div>
      </div>
      {!isMobile && (
        <div className="authorization-widget-without-steps__wrapper  flex h-[100vh] w-1/2 items-end pb-16">
          <Swiper
            pagination
            modules={[Pagination]}
            loop
            slidesPerView={1}
            className="w-[508px]"
          >
            <SwiperSlide className="cursor-pointer">
              <Image
                src={require("@/shared/assets/images/auth/login-banner.png")}
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <Image
                src={require("@/shared/assets/images/auth/login-banner.png")}
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <Image
                src={require("@/shared/assets/images/auth/login-banner.png")}
                alt="banner"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default AuthorizationWithoutSteps;
