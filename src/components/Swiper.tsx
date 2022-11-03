import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Controller,
  SwiperOptions,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)<{ hideControls: boolean }>`
  .swiper-slide {
    width: fit-content;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: ${({ hideControls }) => (hideControls ? "none" : "")};
  }
`;

const ImagesSwiper = ({
  children,
  swiperParams,
  hideControls,
}: {
  children: React.ReactNode | React.ReactNode[];
  hideControls: boolean;
  swiperParams: {
    slidesPerView: string | number;
    spaceBetween?: number;
    autoplay?: { delay: number; disableOnInteraction: boolean };
  };
}) => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Controller, Autoplay]}
      navigation
      initialSlide={0}
      hideControls={hideControls}
      {...(swiperParams as SwiperOptions)}
    >
      {React.Children.map(children, (child, index) => {
        return <SwiperSlide key={index}>{child}</SwiperSlide>;
      })}
    </StyledSwiper>
  );
};

export default ImagesSwiper;
