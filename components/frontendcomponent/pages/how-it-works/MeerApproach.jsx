import Image from "next/image";
import Button from "../../atoms/Button";
import Motion from "../../molecules/Motion";

export default function MeerApproach() {
  return (
    <section>
      <div className="meer_approach sec-pad-all">
        <div className="container">
          <Motion variant="fadeUp">
            <div className="heading">
              <h2>What Makes MEER’s Approach Different</h2>
              <p>MEER focuses on ground-based, community-centred cooling</p>
            </div>
            <div className="main_wrapper">
              {data.map((item) => (
                <div className="approach_col" key={item.id}>
                  <div className="icon">
                    <Image
                      src={item.icon}
                      width={52}
                      height={52}
                      alt="Icon"
                    ></Image>
                  </div>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="desclaimar">
              <div className="info">
                <Image
                  className="logo"
                  src="/image/logo-dark.svg"
                  width={115}
                  height={32}
                  alt="Meer Logo"
                ></Image>
                <p>
                  MEER works closely with communities to ensure cooling systems
                  are appropriate, maintainable, and beneficial in local
                  contexts.
                </p>
              </div>
              <Button>Get in touch</Button>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    id: 1,
    icon: "/image/how-works/approach1.svg",
    title: "Passive",
    desc: "No electricity, refrigerants, or fuel",
  },
  {
    id: 2,
    icon: "/image/how-works/approach2.svg",
    title: "Modular",
    desc: "Adaptable to homes, shared spaces, and landscapes",
  },
  {
    id: 3,
    icon: "/image/how-works/approach3.svg",
    title: "Measurable",
    desc: "Tested and monitored in real environments",
  },
  {
    id: 4,
    icon: "/image/how-works/approach4.svg",
    title: "Open",
    desc: " Guided by transparent science and field data",
  },
];
