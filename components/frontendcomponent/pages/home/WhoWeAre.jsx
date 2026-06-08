
import InsightSection from "../../organisms/InsightSection";

const WhoWeAre = ({data}) => {
    return (
        <section className="who-we-are">
            <div className="container">
                <InsightSection data={data} isBtn={true} isPopUpVideo={true}/>
            </div>
        </section>
    );
};

export default WhoWeAre;