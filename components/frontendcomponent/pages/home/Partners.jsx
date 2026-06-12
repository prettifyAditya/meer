"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
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
    </section>
  );
};

export default Partners;

const data = [
  "/image/partner/1.svg",
  "/image/partner/2.svg",
  "/image/partner/3.svg",
  "/image/partner/4.svg",
  "/image/partner/5.svg",
  "/image/partner/6.svg",
  "/image/partner/7.svg",
  "/image/partner/1.svg",
  "/image/partner/2.svg",
  "/image/partner/3.svg",
  "/image/partner/4.svg",
  "/image/partner/5.svg",
  "/image/partner/6.svg",
  "/image/partner/7.svg",
];
