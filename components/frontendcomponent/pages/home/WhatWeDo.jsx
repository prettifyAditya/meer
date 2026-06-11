"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WhatWeDo = () => {
  return (
    <section className="whatWeDo">
      <div className="container">
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
              systems installed on homes and community buildings in extreme heat
              environments. These projects demonstrated that highly reflective
              surfaces couldreduce heat absorption and lower temperatures
              beneath treated roofs and shaded areas.
            </p>
            <p>
              Building on these early deployments, MEER’s work has evolved into
              a broadersurface cooling approach that now includes modular canopy
              systems, public cooling structures, agricultural cooling
              applications, water-related cooling systems, and the development
              of advanced passive cooling materials such as PDRC cooling paint.
            </p>
            <p>
              Our work spans a range of solutions, includingreflective surfaces,
              modularcanopy systems, and the development of next-generation
              passive cooling paints (PDRC). Together, these approaches reduce
              dangerous heat at the ground level, where people live, work, farm,
              and store water.
            </p>
            <p>
              These systems are currently built using materialssuch as aluminum
              (including recycledcontent) and PET plastic, with ongoing research
              into more sustainable, nature-based alternatives and higher
              recycled content in future components.
            </p>
            <p>
              Our work combinesopen science, engineering innovation, and
              community partnership to deliver practical cooling today while
              building the evidence needed for broader climate impact.
            </p>
          </div>
          <a href="javascript:void(0)" className="btn btn-primary">
            How It (SRTM ) Works
          </a>
        </div>

        <div className="right">
          <Swiper>
            <SwiperSlide>
              
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
