import GlobalCoolingHeroSection from "./HeroSection";
import WhyCoolingMatters from "./WhyCoolingMatters";
import GroundBase from "./GroundBase";
import LocalBenefits from "./LocalBenefits";
import OurApproach from "./OurApproach";
import CanWeBuild from "./CanWeBuild";
import StaticData from "@/uploads/data/StaticData.json";
import "@/uploads/styles/global-cooling/global-cooling.css";

export default function GlobalCoolingPage() {
  const globalCoolingPageData = StaticData?.globalCoolingPage?.heroSection;
  const whyCoolingMattersData = StaticData?.globalCoolingPage?.section1;
  const GroundBaseData = StaticData?.globalCoolingPage?.section2;
  const LocalBenefitsData = StaticData?.globalCoolingPage?.section3;
  const OurApproachData = StaticData?.globalCoolingPage?.section4;
  const CanWeBuildData = StaticData?.globalCoolingPage?.section5;

  return (
    <>
      <GlobalCoolingHeroSection data={globalCoolingPageData} />
      <WhyCoolingMatters data={whyCoolingMattersData} />
      <GroundBase data={GroundBaseData} />
      <LocalBenefits data={LocalBenefitsData} />
      <OurApproach data={OurApproachData} />
      <CanWeBuild data={CanWeBuildData} />
    </>
  );
}
