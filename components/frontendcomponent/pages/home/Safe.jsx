import Image from "next/image";
import React from "react";
import Motion from "../../molecules/Motion";

const Safe = () => {
  return (
    <section className="safePractical">
      <div className="container">
        <Motion variant="fadeUp">
          <div className="heading">
            <Image
              className="icon"
              src="/image/icon.svg"
              alt="icon"
              width={61}
              height={40}
            />
            <h2>Safe, Practical, and Scalable </h2>
            <p>
              MEER’s approach is simple and grounded in known physics. This is
              practical cooling that works today.
            </p>
          </div>
        </Motion>
        <Motion variant="fadeUp">
          <div className="content">
            {data?.map(({ title, icon }, i) => {
              return (
                <div className="safe-card" key={i}>
                  <Image
                    className="icon"
                    src={icon}
                    alt="icon"
                    width={52}
                    height={52}
                  />
                  <p>{title}</p>
                </div>
              );
            })}
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default Safe;

const data = [
  {
    title: "Local and controllable",
    icon: "/icon/shield-check-outline.svg",
  },
  {
    title: "Low-cost and reversible",
    icon: "/icon/reload.svg",
  },
  {
    title: "No atmospheric intervention",
    icon: "/icon/stop.svg",
  },
  {
    title: "Immediate benefits for communities",
    icon: "/icon/handshake.svg",
  },
];
