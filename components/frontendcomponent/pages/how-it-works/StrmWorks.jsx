"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButton from "../../atoms/SwiperButton";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function StrmWorks() {
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="strm_works sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>How SRTM Works: The Physics Made Simple</h2>
            <p>SRTM operates through four connected physical processes.</p>
          </div>
          <div className="main_wrapper">
            <div className="swiper-nav primary center-full">
              <SwiperButton classname={`srtm-prev swiper-prev`} />
              <SwiperButton classname={`srtm-next swiper-next`} />
            </div>
            <Swiper
              ref={swiperRef}
              className="srtm-slider"
              modules={[Navigation]}
              speed={1000}
              navigation={{
                prevEl: `.srtm-prev`,
                nextEl: `.srtm-next`,
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
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="strm_col flex">
                    <figure>
                      <Image
                        src={item.imgSrc}
                        width={525}
                        height={418}
                        alt="Strm Image"
                      ></Image>
                    </figure>
                    <figcaption>
                      <h5>{item.heading}</h5>
                      <div
                        className="desc"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></div>
                    </figcaption>
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
    imgSrc: "/image/how-works/strm1.jpg",
    heading: "Reflecting Sunlight Away",
    desc: `<p>Most conventional surfaces absorb a large portion of incoming sunlight, converting it directly into heat.</p>
            <p>SRTM systems increase surface reflectivity, meaning:</p>
            <ul>
                <li>More sunlight is reflected away before it becomes heat</li>
                <li>Less solar energy is absorbed by the surface</li>
                <li>Surfaces heat up more slowly and reach lower peak temperatures</li>
            </ul>
            <p>This immediately reduces heat build-up during the hottest parts of the day — especially in streets, rooftops, and open areas.</p>`,
  },
  {
    id: 2,
    imgSrc: "/image/how-works/strm2.jpg",
    heading: "Reducing Heat Transfer Into the Air",
    desc: `<p>Hot surfaces warm the surrounding air through radiation and convection.</p>
            <p>When a surface stays cooler:</p>
            <ul>
                <li>Less heat is radiated into the air just above it</li>
                <li>Less hot air rises from roofs, roads, and ground surfaces</li>
                <li>Nearby outdoor and indoor air temperatures are lower</li>
            </ul>
            <p>This is why reflective roofs, shaded surfaces, and cooled ground areas can significantly reduce heat exposure for people nearby.</p>`,
  },
  {
    id: 3,
    imgSrc: "/image/how-works/strm3.jpg",
    heading: "Reducing Evaporation and Humidity",
    desc: `<p>Hot surfaces accelerate evaporation from soil, water containers, rooftops, and vegetation. Evaporation adds water vapour to the air and water vapour is the strongest natural greenhouse gas.</p>
            <p>By cooling surfaces : </p>
            <ul>
                <li>Evaporation rates decrease</li>
                <li>Humidity levels can be lower near the surface</li>
                <li>Heat stress becomes more manageable</li>
            </ul>
            <p>Lower humidity also makes existing cooling — such as shade, ventilation, and fans — far more effective.</p>`,
  },
  {
    id: 4,
    imgSrc: "/image/how-works/strm4.jpg",
    heading: "Releasing Heat Back to Space",
    desc: `<p>Some SRTM materials are designed not only to reflect sunlight, but also to emit heat efficiently as infrared radiation.</p>
            <p>This emitted heat can travel upward and escape into space, rather than remaining trapped near the surface or within the lower atmosphere.</p>
            <p>In this way, SRTM helps reduce heat both where people feel it directly and higher in the climate system, supporting regional cooling and long-term global heat balance.</p>`,
  },
];
