import Motion from "../../molecules/Motion";
import InsightContainer from "../../organisms/InsightContainer";

const SolutionDesigned = () => {
  if (!data) return null;
  const { heading, imgSrc, detail } = data;

  return (
    <section className="SolutionDesigned">
      <div className="container">
        <Motion variant="fadeUp">
          <div className="heading">
            <h2>Our Solutions are Designed To</h2>
          </div>
        </Motion>
        <InsightContainer
          className="invert"
          imgSrc={imgSrc}
          detail={detail}
          isBtn={{
            text: "Science and Research",
            href: "/science-and-research",
          }}
        />
      </div>
    </section>
  );
};

export default SolutionDesigned;

const data = {
  imgSrc: "/image/home/solution.png",
  detail: `<ul>
  <li>Reduce indoor and outdoor heat exposure</li>
  <li>Lower dependence on mechanical cooling</li>
  <li>Protect people, crops, livestock, and water supplies</li>
  <li>Scale from individual homes and buildings toward broader neighbourhood and urban applications</li>
  </ul>
  <p>Cooling can begin with one rooftop, extend to shared community spaces, and potentially expand across neighborhoods, towns, and cities as deployment increases and scientific understanding develops.</p>
  <p>SRTM is grounded in simple, proven physics: keeping surfaces cooler so they absorb less solar heat and store less thermal energy during the day. This principle underpins all of MEER’s work.</p>
  `,
};
