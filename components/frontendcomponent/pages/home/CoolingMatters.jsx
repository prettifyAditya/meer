"use client";

import { useModal } from "@/hooks/useModal";
import Motion from "../../molecules/Motion";

const CoolingMatters = () => {
  const { openModal } = useModal();
  return (
    <section className="coolingMatters">
      <div className="left">
        <Motion variant="fadeUp">
          <div className="heading">
            <h2>Why Surface Cooling Matters?</h2>
          </div>
        </Motion>
        <Motion variant="fadeUp">
          <div className="website-content">
            <p>
              By reducing heat absorption at the surface, these systems can
              reduce heat stress for people today while contributing to broader
              effortsto reduce heat accumulation in built and managed
              environments over time.
            </p>
            <ul>
              <li>
                <strong>600+ m²</strong> reflective surface coverage installed
              </li>
              <li>
                <strong>55+ households</strong> cooled across two pilot sites
              </li>
              <li>
                <strong>5–7 °C (9-12.6 °F)</strong> averageindoor cooling
              </li>
              <li>
                <strong> 30+ local workers</strong> trained in fabrication and
                installation
              </li>
            </ul>
          </div>
        </Motion>
      </div>
      <div className="right">
        <video
          className=""
          src="/video/inspection.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <button
          onClick={() => openModal("video", "/video/about-banner.mp4")}
          className="play-btn"
        ></button>
      </div>
    </section>
  );
};

export default CoolingMatters;
