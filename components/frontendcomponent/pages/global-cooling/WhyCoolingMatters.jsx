
import InsightContainer from "../../organisms/InsightContainer";

const WhyCoolingMatters = ({data}) => {
    const { heading, imgSrc, detail } = data
    return(
        <div className="commanSec">
              <InsightContainer className="container invert"   heading={heading} imgSrc={imgSrc} detail={detail} />
        </div>
    )
}

export default WhyCoolingMatters;
