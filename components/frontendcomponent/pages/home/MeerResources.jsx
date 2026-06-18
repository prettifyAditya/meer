"use client";
import Motion from "../../molecules/Motion";
import TabContainer from "../../organisms/TabContainer";

const MeerResources = ({ data }) => {
  return (
    <section className="meerResource">
      <div className="container">
        <Motion variant="fadeUp">
          <div className="heading">
            <h2>MEER Resource</h2>
          </div>
        </Motion>
        <TabContainer card="resource" data={data} />
        <a href="" className="btn view-all btn-primary">
          See All News & Events{" "}
        </a>
      </div>
    </section>
  );
};

export default MeerResources;
