"use client";
import ResourceCard from "@/components/frontendcomponent/molecules/ResourceCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import SlideBtn from "@/components/frontendcomponent/atoms/SlideBtn";

const MoreSection = ({ data, heading }) => {
  return (
    <section className="moreSection">
      <div className="container">
        <div className="heading">
          <h2>{heading}</h2>
        </div>
        <div className="content">
          <div className="swiper-nav center-full primary-border white">
            <SlideBtn className="blog-button-prev " />
            <SlideBtn className="blog-button-next " />
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: ".blog-button-next",
              prevEl: ".blog-button-prev",
            }}
          >
            {data.map(({ category, list }, i) => {
              return (
                <React.Fragment key={i}>
                  {list?.map((item, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <ResourceCard
                          className="border"
                          category={category}
                          {...item}
                        />
                      </SwiperSlide>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MoreSection;
