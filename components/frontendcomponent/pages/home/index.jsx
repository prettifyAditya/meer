import "@/uploads/styles/home/home.css";
import HeroSection from "./HeroSection";
import ExtremeHeats from "./ExtremeHeats";
import MissingPiece from "./MissingPiece";
import WhoWeAre from "./WhoWeAre";
import SolutionDesigned from "./SolutionDesigned";
import StaticData from "@/uploads/data/StaticData.json";

const HomePage = () => {
  const HeroSectionData = StaticData?.Homepage?.HeroSection;
  const ExtremeHeatsData = StaticData?.Homepage?.Section1;
  const MissingPieceData = StaticData?.Homepage?.Section2;
  const WhoWeAreData = StaticData?.Homepage?.Section3;
  const SolutionDesignedData = StaticData?.Homepage?.Section4;

  return (
    <main>
      <HeroSection data={HeroSectionData} />
      <ExtremeHeats data={ExtremeHeatsData} />
      <MissingPiece data={MissingPieceData} />
      <WhoWeAre data={WhoWeAreData} />
      <SolutionDesigned data={SolutionDesignedData} />
    </main>
  );
};

export default HomePage;
