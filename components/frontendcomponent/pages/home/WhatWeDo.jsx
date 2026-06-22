"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import SlideBtn from "../../atoms/SlideBtn";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Motion from "../../molecules/Motion";

const WhatWeDo = () => {
  return (
    <section className="whatWeDo">
      <div className="container">
        <Motion variant="fadeRight">
          <div className="left">
            <h2>What We Do</h2>
            <div className="website-content">
              <p>
                We design and deploy passive cooling systems — using highly
                reflective materials and radiative cooling structures to keep
                surfaces cooler under the sun.{" "}
              </p>
              <p>
                This approach is called{" "}
                <strong>Surface Radiative Thermal Management</strong> (SRTM)
              </p>
              <p>
                MEER’s early deployments focused primarily on reflective rooftop
                systems installed on homes and community buildings in extreme
                heat environments. These projects demonstrated that highly
                reflective surfaces couldreduce heat absorption and lower
                temperatures beneath treated roofs and shaded areas.
              </p>
              <p>
                Building on these early deployments, MEER’s work has evolved
                into a broadersurface cooling approach that now includes modular
                canopy systems, public cooling structures, agricultural cooling
                applications, water-related cooling systems, and the development
                of advanced passive cooling materials such as PDRC cooling
                paint.
              </p>
              <p>
                Our work spans a range of solutions, includingreflective
                surfaces, modularcanopy systems, and the development of
                next-generation passive cooling paints (PDRC). Together, these
                approaches reduce dangerous heat at the ground level, where
                people live, work, farm, and store water.
              </p>
              <p>
                These systems are currently built using materialssuch as
                aluminum (including recycledcontent) and PET plastic, with
                ongoing research into more sustainable, nature-based
                alternatives and higher recycled content in future components.
              </p>
              <p>
                Our work combinesopen science, engineering innovation, and
                community partnership to deliver practical cooling today while
                building the evidence needed for broader climate impact.
              </p>
            </div>
            <a href="/how-it-works" className="btn btn-primary">
              How It (SRTM ) Works
            </a>
          </div>
        </Motion>
        <Motion variant="fadeRight">
          <div className="left">
            <h2>What We Do</h2>
            <div className="website-content">
              <p>
                We design and deploy passive cooling systems — using highly
                reflective materials and radiative cooling structures to keep
                surfaces cooler under the sun.{" "}
              </p>
              <p>
                This approach is called{" "}
                <strong>Surface Radiative Thermal Management</strong> (SRTM)
              </p>
              <p>
                MEER’s early deployments focused primarily on reflective rooftop
                systems installed on homes and community buildings in extreme
                heat environments. These projects demonstrated that highly
                reflective surfaces couldreduce heat absorption and lower
                temperatures beneath treated roofs and shaded areas.
              </p>
              <p>
                Building on these early deployments, MEER’s work has evolved
                into a broadersurface cooling approach that now includes modular
                canopy systems, public cooling structures, agricultural cooling
                applications, water-related cooling systems, and the development
                of advanced passive cooling materials such as PDRC cooling
                paint.
              </p>
              <p>
                Our work spans a range of solutions, includingreflective
                surfaces, modularcanopy systems, and the development of
                next-generation passive cooling paints (PDRC). Together, these
                approaches reduce dangerous heat at the ground level, where
                people live, work, farm, and store water.
              </p>
              <p>
                These systems are currently built using materialssuch as
                aluminum (including recycledcontent) and PET plastic, with
                ongoing research into more sustainable, nature-based
                alternatives and higher recycled content in future components.
              </p>
              <p>
                Our work combinesopen science, engineering innovation, and
                community partnership to deliver practical cooling today while
                building the evidence needed for broader climate impact.
              </p>
            </div>
            <a href="/how-it-works" className="btn btn-primary">
              How It (SRTM ) Works
            </a>
          </div>
        </Motion>

        <div className="right">
          <div className="main_wrapper">
            <Swiper
              loop={true}
              speed={1000}
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".whatWeDo-button-prev",
                nextEl: ".whatWeDo-button-next",
              }}
              pagination={{
                el: ".whatWeDo-progressbar",
                type: "progressbar",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.4,
                  spaceBetween: 0,
                  centeredSlides: true,
                },
                540: { slidesPerView: 1.6, centeredSlides: true },
                991: { slidesPerView: 1.9 },
              }}
              modules={[Pagination, Navigation]}
            >
              {slideData?.map(({ image, title }, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="whatWeCard">
                      <figure>
                        <Image
                          src={image}
                          alt={title}
                          width={1920}
                          height={1080}
                        />
                      </figure>
                      <figcaption>
                        <h4>{title}</h4>
                      </figcaption>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="whatWeDo-pagination">
              <div className="whatWeDo-progressbar"></div>
              <div className="swiper-nav group primary-border square">
                <SlideBtn className="whatWeDo-button-prev" />
                <SlideBtn className="whatWeDo-button-next " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

const slideData = [
  {
    image: "/image/home/what-we-do/2.png",
    title: "Reduce indoor and outdoor heat exposure",
  },
  {
    image: "/image/home/what-we-do/4.png",
    title: "Lower dependence on mechanical cooling",
  },
  {
    image: "/image/home/what-we-do/3.jpg",
    title: "Protect people, crops, livestock, and water supplies",
  },
  {
    image: "/image/home/what-we-do/1.png",
    title: "Scale from individual homes to neighbourhoods and regions",
  },
];
