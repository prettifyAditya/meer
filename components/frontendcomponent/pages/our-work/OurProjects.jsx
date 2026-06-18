import Image from "next/image";
import StrategyCard from "../../molecules/StrategyCard";
import Motion from "../../molecules/Motion";

export default function OurProjects() {
  return (
    <section>
      <div className="our_projects sec-pad-all">
        <div className="container">
          <Motion variant="fadeUp">
            <div className="heading">
              <div className="icon">
                <Image
                  src="/image/icon.svg"
                  width={60}
                  height={40}
                  alt="Meer Icon"
                ></Image>
              </div>
              <h2>Our Projects</h2>
              <p>
                Extreme heat is the deadliest climate hazard and it’s only
                getting worse. In communities without access to electricity or
                reliable cooling, heat can be life-threatening. At MEER, we
                provide simple, low-cost, and sustainable solutions that bring
                immediate relief while contributing to long-term climate
                balance.
              </p>
            </div>
          </Motion>
          <Motion variant="fadeUp">
            <div className="project_wrapper">
              {data.map((item) => (
                <StrategyCard
                  key={item.id}
                  classname="project_card"
                  data={item}
                  btnSrc="/"
                />
              ))}
            </div>
          </Motion>
          <Motion variant="fadeUp">
            <div className="btn_wrap">
              <button>
                <Image
                  src="/image/icon.svg"
                  width={44}
                  height={30}
                  alt="Logo Icon"
                ></Image>
                Load More Projects
              </button>
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
    imgSrc: "/image/work/project1.jpg",
    title: "Sierra Leone",
    desc: "Community cooling in one of West Africa’s hottest and most vulnerable neighborhoods.",
  },
  {
    id: 2,
    imgSrc: "/image/work/project2.jpg",
    title: "India",
    desc: "Community-led cooling in one of Pune’s most heat-affected neighborhoods.",
  },
  {
    id: 3,
    imgSrc: "/image/work/project3.jpg",
    title: "California",
    desc: "Reduce indoor heat stress in informal housing through reflective roofing.",
  },
  {
    id: 4,
    imgSrc: "/image/work/project4.jpg",
    title: "Tanzania",
    desc: "Reduce indoor heat stress in informal housing through reflective roofing.",
  },
];
