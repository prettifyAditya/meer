import InsightContainer from "../../organisms/InsightContainer";

const CanWeBuild = ({ data, className = "" }) => {
  const { heading, imgSrc, detail, subheading } = data;
  return (
    <div className="global-secC commanSec">
      <div className="heading">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
      <InsightContainer
        className={`container invert ${className}`}
        isBtn={{ href: "#", text: "How it Works (SRTM)" }}
        imgSrc={imgSrc}
        detail={detail}
      />
    </div>
  );
};

export default CanWeBuild;
