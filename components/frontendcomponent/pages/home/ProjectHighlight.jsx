import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectHighlight = () => {
  return (
    <section className="projectHighlight">
      <div className="heading">
        <h2>Key Project Highlights</h2>
        <p>
          MEER is active in Sierra Leone, India, and Tanzania. We are deploying
          cooling systems on homes, schools, and community buildings — while
          training local teams to build and maintain them. Each project:
        </p>
      </div>
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

      <Swiper className="highlight-slider">
        {highlightData?.map(({ country, description, image, href }, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="highlight-card">
                <Image width={1920} height={1080} src={image} alt={country} />
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
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
    country: "Tanzania",
    description:
      "In Tanzania, MEER assessed roof structures to determine suitability for MEER cooling system deployment",
    image: "/image/home/highlight/1.jpg",
    href: "",
  },
  {
    country: "Tanzania",
    description:
      "In Tanzania, MEER assessed roof structures to determine suitability for MEER cooling system deployment",
    image: "/image/home/highlight/1.jpg",
    href: "",
  },
  {
    country: "Tanzania",
    description:
      "In Tanzania, MEER assessed roof structures to determine suitability for MEER cooling system deployment",
    image: "/image/home/highlight/1.jpg",
    href: "",
  },
  {
    country: "Tanzania",
    description:
      "In Tanzania, MEER assessed roof structures to determine suitability for MEER cooling system deployment",
    image: "/image/home/highlight/1.jpg",
    href: "",
  },
];
