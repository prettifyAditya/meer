
import InsightContainer from "../../organisms/InsightContainer";

const Thermodynamic = ({data}) => {
    const { heading, imgSrc, detail } = data
    return(
        <div className="global-secA commanSec">
              <InsightContainer className="container"   heading={heading} imgSrc={imgSrc} detail={detail} />
        </div>
    )
}

export default Thermodynamic;
