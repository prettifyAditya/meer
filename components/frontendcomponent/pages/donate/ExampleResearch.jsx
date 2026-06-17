"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButton from "../../atoms/SwiperButton";
import "swiper/css";
import "swiper/css/navigation";

export default function ExampleResearch() {
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="example_research sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Examples of our research costs</h2>
          </div>
          <div className="main_wrapper">
            <div className="swiper-nav white center-full">
              <SwiperButton classname={`example-prev swiper-prev`} />
              <SwiperButton classname={`example-next swiper-next`} />
            </div>
            <Swiper
              ref={swiperRef}
              className="example-slider"
              modules={[Navigation]}
              speed={1000}
              navigation={{
                prevEl: `.example-prev`,
                nextEl: `.example-next`,
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
                  <div className="example_col">
                    <div className="icon">
                      <Image
                        src={item.imgSrc}
                        width={380}
                        height={260}
                        alt="Our Culture"
                      />
                    </div>
                    <p>{item.desc}</p>
                  </div>
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
    imgSrc: "/image/donate/example1.svg",
    desc: "$500 – Support a local field assistant collecting heat and community data",
  },
  {
    id: 2,
    imgSrc: "/image/donate/example2.svg",
    desc: "$1,500 – Train and Equip a Community Heat-Monitoring Team in Vulnerable Areas",
  },
  {
    id: 3,
    imgSrc: "/image/donate/example3.svg",
    desc: "$3,000 – Support a Local Environmental Researcher Working with Frontline Communities",
  },
  {
    id: 4,
    imgSrc: "/image/donate/example4.svg",
    desc: "$5,000 – Fund a full-time researcher or technician",
  },
  {
    id: 5,
    imgSrc: "/image/donate/example5.svg",
    desc: "$10,000 – Establish a community heat resilience and cooling research program",
  },
];
