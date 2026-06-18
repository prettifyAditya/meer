"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../../atoms/SwiperButton";
import StrategyCard from "../../molecules/StrategyCard";

export default function OurStrategy({ data }) {
  if (!data) return null;
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="our_strategy sec-pad-all">
        <div className="heading container">
          <h2>Our Strategy</h2>
          <p>
            We believe the best solutions are simple, sustainable, and just.
            MEER’s approach is guided by four core principles
          </p>
        </div>
        <div className="strategy_wrapper">
          <Swiper
            ref={swiperRef}
            className="strategy_slider"
            modules={[Navigation]}
            speed={1000}
            centeredSlides={true}
            centeredSlidesBounds={true}
            navigation={{
              prevEl: ".strategy-prev",
              nextEl: ".strategy-next",
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
                slidesPerView: 1.8,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 2.2,
                spaceBetween: 60,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data.strategyData.map((item) => (
              <SwiperSlide key={item.id}>
                <StrategyCard
                  classname="about_strategy logo_icon"
                  data={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-nav center-full white">
            <SwiperButton classname="strategy-prev swiper-prev" />
            <SwiperButton classname="strategy-next swiper-next" />
          </div>
        </div>
        <div className="info_details flex container">
          <motion.figure
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/image/logo-dark.svg"
              width={120}
              height={35}
              alt="Meer Logo"
            />
          </motion.figure>
          <motion.figcaption
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: data.smallDescription }}
          ></motion.figcaption>
        </div>
      </div>
    </section>
  );
}
