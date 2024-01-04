import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { A11y, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface HeroCarouselProps {
  slide1?: React.ReactNode;
  slide2?: React.ReactNode;
  slide3?: React.ReactNode;
}

export const HeroCarousel = ({ slide1, slide2, slide3 }: HeroCarouselProps) => {
  return (
    <>
      <Swiper
        modules={[Pagination, A11y, Parallax]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet--active",
        }}
        parallax={true}
        //scrollbar={{ draggable: true }}
        className="!h-hero !w-full">
        <SwiperSlide className="cursor-grab !overflow-hidden">
          {slide1}
        </SwiperSlide>
        <SwiperSlide className="cursor-grab !overflow-hidden">
          {slide2}
        </SwiperSlide>
        <SwiperSlide className="cursor-grab !overflow-hidden">
          {slide3}
        </SwiperSlide>
      </Swiper>
    </>
  );
};
