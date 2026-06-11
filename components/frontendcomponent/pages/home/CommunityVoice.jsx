"use client";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from "../../atoms/SlideBtn";

const CommunityVoice = () => {
  return (
    <section className="communityVoice">
      <div className="container">
        <div className="heading">
          <h6>Real Stories, Real Impact</h6>
          <h2>Voices from the Community</h2>

          <div className="swiper-nav group square primary-border">
            <SlideBtn className="community-button-prev"></SlideBtn>
            <SlideBtn className="community-button-next"></SlideBtn>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          className="communitySlider"
          navigation={{
            prevEl: ".community-button-prev",
            nextEl: ".community-button-next",
          }}
        >
          {data?.map(({ image, description }, i) => {
            return (
              <SwiperSlide key={i}>
                <figure className="community-card">
                  <Image
                    className="img"
                    src={image}
                    alt="community"
                    width={1080}
                    height={1920}
                  />
                  <img className="logo" src="/image/logo.svg" alt="" />
                  <figcaption>
                    <p>{description}</p>
                    <div className="btn-container">
                      <button className="play-btn outline"></button>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CommunityVoice;

const data = [
  {
    image: "/image/home/community/1.png",
    description:
      "Rani Bhavne, a mother in Pune, India, describes how extreme heat impacts her children's health",
  },
  {
    image: "/image/home/community/2.png",
    description:
      "Rani Bhavne, a mother in Pune, India, describes how extreme heat impacts her children's health",
  },
  {
    image: "/image/home/community/3.png",
    description:
      "Rani Bhavne, a mother in Pune, India, describes how extreme heat impacts her children's health",
  },
  {
    image: "/image/home/community/4.png",
    description:
      "Rani Bhavne, a mother in Pune, India, describes how extreme heat impacts her children's health",
  },
  {
    image: "/image/home/community/5.jpg",
    description:
      "Rani Bhavne, a mother in Pune, India, describes how extreme heat impacts her children's health",
  },
  {
    image: "/image/home/community/6.jpg",
    description:
      "Rani Bhavne, a mother in Pune, India, describes how extreme heat impacts her children's health",
  },
];
