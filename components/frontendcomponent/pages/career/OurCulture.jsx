"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButton from "../../atoms/SwiperButton";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function OurCulture() {
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="our_culture sec-pad-all">
        <div className="container">
          <div className="heading">
            <p>our culture</p>
            <h2>Working Together to Create Change</h2>
          </div>
          <div className="main_wrapper">
            <div className="swiper-nav white center-full">
              <SwiperButton classname={`culture-prev swiper-prev`} />
              <SwiperButton classname={`culture-next swiper-next`} />
            </div>
            <Swiper
              ref={swiperRef}
              className="culture-slider"
              modules={[Navigation]}
              speed={1000}
              navigation={{
                prevEl: `.culture-prev`,
                nextEl: `.culture-next`,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                991: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <figure>
                    <Image
                      src={item.imgSrc}
                      width={380}
                      height={260}
                      alt="Our Culture"
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    id: 1,
    imgSrc: "/image/career/culture1.jpg",
  },
  {
    id: 2,
    imgSrc: "/image/career/culture2.jpg",
  },
  {
    id: 3,
    imgSrc: "/image/career/culture3.jpg",
  },
  {
    id: 4,
    imgSrc: "/image/career/culture1.jpg",
  },
  {
    id: 5,
    imgSrc: "/image/career/culture2.jpg",
  },
  {
    id: 6,
    imgSrc: "/image/career/culture3.jpg",
  },
];
