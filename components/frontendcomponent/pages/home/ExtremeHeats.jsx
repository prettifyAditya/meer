import InsightSection from "../../organisms/InsightSection";

const ExtremeHeats = ({ data }) => {
  if (!data) return null;
  return (
    <div className="home-secA">
        <div className="container">
                <InsightSection data={data} />
        </div>
    </div>
  );
};

export default ExtremeHeats;
