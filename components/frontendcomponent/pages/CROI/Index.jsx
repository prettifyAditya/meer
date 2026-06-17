import "@/uploads/styles/CROI/croi.css";
import CROIHeroSection from "./HeroSection"
import Thermodynamic from "./Thermodynamic";
import CroiMeasures from "./CroiMeasures";
import StaticData from "@/uploads/data/StaticData.json";

const CROI = () => {
    const CROIHeroSectionData = StaticData?.CROIPage?.heroSection
    const ThermodynamicData = StaticData?.CROIPage?.section1
    const CroiMeasuresData = StaticData?.CROIPage?.section2
    
    return (
        <>
         <CROIHeroSection data={CROIHeroSectionData}/>
         <Thermodynamic data={ThermodynamicData}/>
         <CroiMeasures data={CroiMeasuresData}/>
        </>
    )
}

export default CROI;