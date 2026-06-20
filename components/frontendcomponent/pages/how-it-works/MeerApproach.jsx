"use client";
import Image from "next/image";
import Button from "../../atoms/Button";
import Motion from "../../molecules/Motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../../atoms/SwiperButton";

export default function MeerApproach() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <section>
      <div className="meer_approach sec-pad-all">
        <div className="container">
          <Motion variant="fadeUp">
            <div className="heading">
              <h2>What Makes MEER’s Approach Different</h2>
              <p>MEER focuses on ground-based, community-centred cooling</p>
            </div>
            <div className="main_wrapper">
              {isMobile ? (
                <Swiper
                  className="approach_slider"
                  speed={1000}
                  navigation={{
                    prevEl: ".approach-prev",
                    nextEl: ".approach-next",
                  }}
                  modules={[Navigation]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    540: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                  }}
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="approach_col">
                        <div className="icon">
                          <Image
                            src={item.icon}
                            width={52}
                            height={52}
                            alt="Icon"
                          ></Image>
                        </div>
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                data.map((item) => (
                  <div className="approach_col" key={item.id}>
                    <div className="icon">
                      <Image
                        src={item.icon}
                        width={52}
                        height={52}
                        alt="Icon"
                      ></Image>
                    </div>
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                ))
              )}
              {isMobile && (
                <div className="swiper-nav center-full primary-border">
                  <SwiperButton classname="swiper-prev approach-prev" />
                  <SwiperButton classname="swiper-next approach-next" />
                </div>
              )}
            </div>
            <div className="desclaimar">
              <div className="info">
                <Image
                  className="logo"
                  src="/image/logo-dark.svg"
                  width={115}
                  height={32}
                  alt="Meer Logo"
                ></Image>
                <p>
                  MEER works closely with communities to ensure cooling systems
                  are appropriate, maintainable, and beneficial in local
                  contexts.
                </p>
              </div>
              <Button>Get in touch</Button>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    id: 1,
    icon: "/image/how-works/approach1.svg",
    title: "Passive",
    desc: "No electricity, refrigerants, or fuel",
  },
  {
    id: 2,
    icon: "/image/how-works/approach2.svg",
    title: "Modular",
    desc: "Adaptable to homes, shared spaces, and landscapes",
  },
  {
    id: 3,
    icon: "/image/how-works/approach3.svg",
    title: "Measurable",
    desc: "Tested and monitored in real environments",
  },
  {
    id: 4,
    icon: "/image/how-works/approach4.svg",
    title: "Open",
    desc: " Guided by transparent science and field data",
  },
];
