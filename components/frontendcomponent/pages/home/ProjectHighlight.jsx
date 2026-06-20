"use client";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from "../../atoms/SlideBtn";
import Motion from "../../molecules/Motion";

const ProjectHighlight = () => {
  return (
    <section className="projectHighlight">
      <Motion variant="fadeUp">
        <div className="heading">
          <h2>Key Project Highlights</h2>
          <p>
            MEER is active in Sierra Leone, India, and Tanzania. We are
            deploying cooling systems on homes, schools, and community buildings
            — while training local teams to build and maintain them. Each
            project:
          </p>
        </div>
      </Motion>
      <Motion variant="fadeUp">
        <div className="info">
          {infoData?.map(({ title, icon }, i) => {
            return (
              <div className="project-highlight" key={i}>
                <Image
                  className="icon"
                  src={icon}
                  alt="icon"
                  width={38}
                  height={38}
                />
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </Motion>
      <Motion variant="fadeUp">
        <div className="highlight-slider">
          <Swiper
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 15,
                centeredSlides: false,
              },
              540: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: { slidesPerView: 1.4, spaceBetween: 20 },
              991: { slidesPerView: 1.4, spaceBetween: 40 },
              1280: {
                slidesPerView: 1.4,
                spaceBetween: 56,
              },
            }}
            navigation={{
              nextEl: ".highlight-button-next",
              prevEl: ".highlight-button-prev",
            }}
            modules={[Navigation]}
          >
            {highlightData?.map(({ country, description, image, href }, i) => {
              return (
                <SwiperSlide key={i}>
                  <figure className="highlight-card">
                    <Image
                      width={1920}
                      height={1080}
                      src={image}
                      alt={country}
                    />
                    <figcaption className="content">
                      <h4>{country}</h4>
                      <p>{description}</p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-nav center-full white">
            <SlideBtn className="highlight-button-prev" />
            <SlideBtn className="highlight-button-next" />
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default ProjectHighlight;

const infoData = [
  {
    title: "Reduces heat exposure",
    icon: "/icon/temprature.svg",
  },
  {
    title: "Builds local skills",
    icon: "/icon/wrench.svg",
  },
  {
    title: "Generates real-world data",
    icon: "/icon/stat.svg",
  },
];

const highlightData = [
  {
    country: "Sierra Leone",
    description:
      "In Freetown, Sierra Leone, MEER works with frontline communities to deploy reflective rooftops, shade structures, and community cooling systems designed to reduce dangerous heat exposure.",
    image: "/image/home/highlight/4.png",
    href: "#",
  },

  {
    country: "India",
    description:
      "In Pune, India, MEER is testing reflective rooftop systems, canopy concepts, and passive cooling materials across rural and urban environments.",
    image: "/image/home/highlight/2.png",
    href: "#",
  },
  {
    country: "Tanzania",
    description:
      "In Tanzania, MEER assessed roof structures to determine suitability for MEER cooling system deployment",
    image: "/image/home/highlight/3.png",
    href: "#",
  },
  {
    country: "California",
    description:
      "In Tanzania, MEER assessed roof structures to determine suitability for MEER cooling system deployment",
    image: "/image/home/highlight/1.jpg",
    href: "#",
  },
  {
    country: "China",
    description:
      "Developing next-generation cooling materials for large-scale deployment.",
    image: "/image/home/highlight/5.jpg",
    href: "#",
  },
];
