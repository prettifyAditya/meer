"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import Motion from "../../molecules/Motion";
import { Swiper, SwiperSlide } from "swiper/react";

const Safe = () => {
  return (
    <section className="safePractical">
      <div className="container">
        <Motion variant="fadeUp">
          <div className="heading">
            <Image
              className="icon"
              src="/image/icon.svg"
              alt="icon"
              width={61}
              height={40}
            />
            <h2>Safe, Practical, and Scalable </h2>
            <p>
              MEER’s approach is simple and grounded in known physics. This is
              practical cooling that works today.
            </p>
          </div>
        </Motion>
        <Motion variant="fadeUp">
          <div className="content">
            <Swiper
              breakpoints={{
                0: { slidesPerView: 1.4, spaceBetween: 15 },
                540: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                991: { slidesPerView: 4, spaceBetween: 20 },
              }}
              navigation={{
                nextEl: ".highlight-button-next",
                prevEl: ".highlight-button-prev",
              }}
              modules={[Navigation]}
            >
              {data?.map(({ title, icon }, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="safe-card">
                      <Image
                        className="icon"
                        src={icon}
                        alt="icon"
                        width={52}
                        height={52}
                      />
                      <p>{title}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default Safe;

const data = [
  {
    title: "Local and controllable",
    icon: "/icon/shield-check-outline.svg",
  },
  {
    title: "Low-cost and reversible",
    icon: "/icon/reload.svg",
  },
  {
    title: "No atmospheric intervention",
    icon: "/icon/stop.svg",
  },
  {
    title: "Immediate benefits for communities",
    icon: "/icon/handshake.svg",
  },
];
