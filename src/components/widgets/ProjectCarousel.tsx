import { t } from "astro-i18n";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/parallax";
import "swiper/css/scrollbar";
import { A11y, FreeMode, Parallax, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type AstroSlotReactNode = React.ReactNode & { props: any };

export interface ProjectCarouselProps {
  slide1?: AstroSlotReactNode;
  slide2?: AstroSlotReactNode;
  slide3?: AstroSlotReactNode;
  slide4?: AstroSlotReactNode;
  slide5?: AstroSlotReactNode;
  slide6?: AstroSlotReactNode;
  slide7?: AstroSlotReactNode;
  slide8?: AstroSlotReactNode;
  slide9?: AstroSlotReactNode;
}

export const ProjectCarousel = ({
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
}: ProjectCarouselProps) => {
  return (
    <Swiper
      modules={[Scrollbar, FreeMode, A11y, Parallax]}
      slidesPerView={"auto"}
      spaceBetween={28}
      scrollbar={{
        draggable: true,
        horizontalClass: "carousel-scrollbar",
      }}
      parallax={true}
      freeMode={true}
      watchSlidesProgress={true}
      onProgress={({ slides }, progress) => {
        if (progress >= 1) {
          progress = 0.9;
        }

        slides.forEach((slide: any) => {
          slide.progress = progress;
        });
      }}>
      <SwiperSlide className="!ml-10vw !hidden !h-hero10 !w-screen2 md:!block md:!h-[45rem] md:!w-[32rem]">
        <div className="flex h-full flex-col justify-end gap-4 pb-8 pr-8 md:gap-10">
          <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-black md:text-5xl lg:mb-0 dark:text-white">
            {t("section.projects.title")}
          </h1>
          <p className="text-2xl leading-tight text-gray-400 md:text-3xl xl:text-4xl dark:text-blueGray-500">
            {t("section.projects.subtitle")}
          </p>
        </div>
      </SwiperSlide>

      {slide1?.props.value.toString() !== "" ? (
        <SwiperSlide className="!ml-10vw !h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide1}
        </SwiperSlide>
      ) : null}

      {slide2?.props.value.toString() !== "" ? (
        <SwiperSlide className="!h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide2}
        </SwiperSlide>
      ) : null}

      {slide3?.props.value.toString() !== "" ? (
        <SwiperSlide className="!h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide3}
        </SwiperSlide>
      ) : null}

      {slide4?.props.value.toString() !== "" ? (
        <SwiperSlide className="!h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide4}
        </SwiperSlide>
      ) : null}

      {slide5?.props.value.toString() !== "" ? (
        <SwiperSlide className="!h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide5}
        </SwiperSlide>
      ) : null}

      {slide6?.props.value.toString() !== "" ? (
        <SwiperSlide className="!h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide6}
        </SwiperSlide>
      ) : null}

      {slide7?.props.value.toString() !== "" ? (
        <SwiperSlide className="!h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide7}
        </SwiperSlide>
      ) : null}

      {slide8?.props.value.toString() !== "" ? (
        <SwiperSlide className="!h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide8}
        </SwiperSlide>
      ) : null}

      {slide9?.props.value.toString() !== "" ? (
        <SwiperSlide className="!mr-10vw !h-hero10 !w-screen2 !overflow-hidden !rounded-lg md:!ml-0 md:!h-[45rem] md:!w-96">
          {slide9}
        </SwiperSlide>
      ) : null}
    </Swiper>
  );
};
