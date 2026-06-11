"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MissionVision({ data }) {
  if (!data) return null;
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="mission_vision sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Our Mission & Vision</h2>
          </div>
          <div className="main_wrapper">
            <Swiper
              ref={swiperRef}
              className="mission_slider"
              modules={[Navigation, Pagination]}
              speed={1000}
              navigation={{
                prevEl: ".mission-prev",
                nextEl: ".mission-next",
              }}
              pagination={{
                enabled: true,
                el: ".progressbar",
                type: "progressbar",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                540: {
                  slidesPerView: 1.8,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 15,
                },
                991: {
                  slidesPerView: 3.2,
                  spaceBetween: 20,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="mission_col">
                    <div className="title">
                      <h6>{item.title}</h6>
                      <div className="icon">
                        <Image
                          src={item.imgSrc}
                          width={50}
                          height={50}
                          alt="Mission"
                        ></Image>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-nav"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
