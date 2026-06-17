
import InsightContainer from "../../organisms/InsightContainer";

const CroiMeasures = ({data}) => {
    const { heading, imgSrc, detail } = data
    return(
        <div className="croi-secA commanSec">
              <InsightContainer className="container invert"   heading={heading} imgSrc={imgSrc} detail={detail} />
        </div>
    )
}

export default CroiMeasures;
