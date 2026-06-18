"use client";
import { useModal } from "@/hooks/useModal";
import InsightContainer from "../../organisms/InsightContainer";

const WhoWeAre = () => {
  if (!data) return null;
  const { heading, videoSrc, btnText, detail } = data;
  const { openModal } = useModal();
  return (
    <section className="who-we-are">
      <InsightContainer
        className="container"
        videoSrc={videoSrc}
        heading={heading}
        isBtn={{ text: "Learn More About Us", href: "/about-us" }}
        isPopUpVideo={() => openModal("video", "/video/about-banner.mp4")}
        detail={detail}
      />
    </section>
  );
};

export default WhoWeAre;

const data = {
  heading: "Who We Are",
  videoSrc: "/video/whoWeAre.mp4",
  btnText: "Learn More About Us",
  detail: `<p>MEER (Mirrors for Earth’s Energy Rebalancing) is an independent nonprofit organisation addressing one of the most urgent and under-recognised climate threats: extreme heat.</p>
            <p>MEER operates at the intersection of humanitarian protection, climate adaptation, and physical climate science. We focus on what can be done now: deploying, measuring, and improving cooling solutions in real environments, with real communities, under real heat conditions</p>`,
};
