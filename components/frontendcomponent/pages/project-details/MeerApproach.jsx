import Image from "next/image";

export default function MeerApproach({ id }) {
  return (
    <section id={id}>
      <div className="meer_approach sec-pad-all">
        <div className="container">
          <div className="heading">
            <div className="icon">
              <Image
                src="/image/icon.svg"
                width={60}
                height={40}
                alt="Meer Icon"
              ></Image>
            </div>
            <h2>MEER’s Approach</h2>
          </div>
          <div className="desc">
            <p>
              MEER has been operating in Sierra Leone since early 2023, focusing
              on passive cooling solutions that can immediately reduce indoor
              temperatures for households with no access to conventional
              cooling. MEER’s Freetown project demonstrates how simple,
              science-based interventions can deliver rapid relief in
              heat-vulnerable urban communities.
            </p>
            <p>
              Our Sierra Leone team, led by locally trained technicians,
              fabricates and installs reflective roofing systems that deflect
              sunlight before it turns into heat. These roofs are built from
              high-albedo PET film clamped onto bamboo or lightweight framing,
              creating a durable, low-cost cooling layer that can be applied to
              existing structures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
