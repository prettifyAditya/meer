import React from "react";
import InsightContainer from "../../organisms/InsightContainer";

const GlobalImpact = () => {
  if (!data) return null;
  const { heading, imgSrc, detail } = data;

  return (
    <section className="globalImpact">
      <InsightContainer
        className="container static"
        heading={heading}
        imgSrc={imgSrc}
        detail={detail}
      />
    </section>
  );
};

export default GlobalImpact;

const data = {
  heading: "From Local Trials to Global Impact",
  imgSrc: "/image/home/globalImpact.png",
  detail: `
    <p>Every installation we deploy is part of a broader research effort.</p>
    <p>We measure how these systems perform in different climates, materials, and environments — from coastal West Africa to urban India.</p>
    <p>This data allows us to:</p>
    <ul>
        <li>Improve performance</li>
        <li>Adapt designs for different regions</li>
        <li>Build the scientific case for large-scale cooling</li>
    </ul>
    <p>Our goal is not only to reduce heat exposure at the level of individual buildings and community spaces, but also to understand how surface cooling approaches may contribute to broader cooling impacts when deployed at larger scales across towns, cities, and regions</p>
    `,
};
