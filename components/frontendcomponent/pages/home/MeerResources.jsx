"use client";
import TabContainer from "../../organisms/TabContainer";

const MeerResources = ({ data }) => {
  return (
    <section className="meerResource">
      <div className="container">
        <div className="heading">
          <h2>MEER Resource</h2>
        </div>
        <TabContainer card="resource" data={data} />
        <a href="" className="btn view-all btn-primary">
          See All News & Events{" "}
        </a>
      </div>
    </section>
  );
};

export default MeerResources;
