
import InsightContainer from "../../organisms/InsightContainer";

const GroundBase = ({data}) => {
    const { heading, imgSrc, detail } = data
    return(
        <div className="global-secA commanSec">
              <InsightContainer className="container"   heading={heading} imgSrc={imgSrc} detail={detail} />
        </div>
    )
}

export default GroundBase;
