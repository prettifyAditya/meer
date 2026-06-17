import InsightContainer from "../../organisms/InsightContainer";

const OurApproach = ({ data }) => {
  const { heading, imgSrc, detail } = data;
  return (
    <div className="global-secB commanSec">
      <h3>our approach</h3>
      <InsightContainer
        className="container white"
        heading={heading}
        imgSrc={imgSrc}
        detail={detail}
      />
    </div>
  );
};

export default OurApproach;
