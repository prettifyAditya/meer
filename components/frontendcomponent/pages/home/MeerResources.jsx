"use client";
import "@/uploads/styles/component/component.css";
import TabContainer from "../../organisms/TabContainer";

const MeerResources = ({ data }) => {
  return (
    <section className="meerResource">
      <div className="heading">
        <h2>MEER Resource</h2>
      </div>
      <TabContainer card="resource" data={data} />
    </section>
  );
};

export default MeerResources;
