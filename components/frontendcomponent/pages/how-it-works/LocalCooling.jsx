"use client";
import Image from "next/image";
import Motion from "../../molecules/Motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function LocalCooling() {
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
      <div className="local_cooling sec-pad-all">
        <div className="container">
          <Motion variant="fadeUp">
            <div className="heading">
              <h2>From Local Cooling to Global Relevance</h2>
              <p>
                SRTM delivers immediate local benefits — but its impact goes far
                beyond.
              </p>
            </div>
            <div className="local_wrapper">
              {isMobile ? (
                <Swiper
                  className="local_slider"
                  speed={1000}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.2,
                      spaceBetween: 15,
                    },
                    540: {
                      slidesPerView: 2.3,
                      spaceBetween: 15,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="local_col">
                      <div className="icon">
                        <Image
                          src="/image/how-works/local1.svg"
                          width={45}
                          height={45}
                          alt="Icon"
                        />
                      </div>
                      <p>Cities absorb less heat</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="local_col">
                      <div className="icon">
                        <Image
                          src="/image/how-works/local2.svg"
                          width={45}
                          height={45}
                          alt="Icon"
                        />
                      </div>
                      <p>Landscapes release less thermal energy into the air</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="local_col">
                      <div className="icon">
                        <Image
                          src="/image/how-works/local3.svg"
                          width={45}
                          height={45}
                          alt="Icon"
                        />
                      </div>
                      <p>Atmospheric heating is reduced over large areas</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                <>
                  <div className="local_col">
                    <div className="icon">
                      <Image
                        src="/image/how-works/local1.svg"
                        width={45}
                        height={45}
                        alt="Icon"
                      />
                    </div>
                    <p>Cities absorb less heat</p>
                  </div>
                  <div className="local_col">
                    <div className="icon">
                      <Image
                        src="/image/how-works/local2.svg"
                        width={45}
                        height={45}
                        alt="Icon"
                      />
                    </div>
                    <p>Landscapes release less thermal energy into the air</p>
                  </div>
                  <div className="local_col">
                    <div className="icon">
                      <Image
                        src="/image/how-works/local3.svg"
                        width={45}
                        height={45}
                        alt="Icon"
                      />
                    </div>
                    <p>Atmospheric heating is reduced over large areas</p>
                  </div>
                </>
              )}
            </div>
            <div className="simple_terms flex">
              <figcaption>
                <div className="title">
                  <div className="icon">
                    <Image
                      src="/icon/bulb.svg"
                      width={45}
                      height={45}
                      alt="Icon"
                    ></Image>
                  </div>
                  <p>In Simple Terms</p>
                </div>
                <h5>
                  Less heat entering the atmosphere means less heat retained in
                  the climate system.
                </h5>
                <p>This makes SRTM one of the few approaches that can:</p>
                <ul>
                  <li>Protect people today</li>
                  <li>Scale safely over time</li>
                  <li>Contribute to broader climate stabilisation</li>
                </ul>
              </figcaption>
              <figure>
                <Image
                  src="/image/how-works/meer-cooling.jpg"
                  width={579}
                  height={388}
                  alt="Meer Cooling"
                ></Image>
              </figure>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
