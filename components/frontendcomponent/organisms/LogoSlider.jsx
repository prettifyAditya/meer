import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/uploads/styles/component/component.css";


const LogoSlider = ({data}) => {
  return (
    <div className="container logo-slider">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        allowTouchMove={false}
        slidesPerView={7}
        spaceBetween={32}
        loop={true}
        speed={2000}
      >
        {data?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <figure>
                <Image alt="partner" width={1920} height={1080} src={item} />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
