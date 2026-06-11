import "@/uploads/styles/home/home.css";
import HeroSection from "./HeroSection";
import ExtremeHeats from "./ExtremeHeats";
import MissingPiece from "./MissingPiece";
import WhoWeAre from "./WhoWeAre";
import SolutionDesigned from "./SolutionDesigned";
import GlobalImpact from "./GlobalImpact";
import WhatWeDo from "./WhatWeDo";
import CoolingMatters from "./CoolingMatters";
import Safe from "./Safe";
import ProjectHighlight from "./ProjectHighlight";

const HomePage = () => {

  return (
    <>
      <HeroSection />
      <ExtremeHeats />
      <MissingPiece />
      <WhoWeAre />
      <WhatWeDo />
      <SolutionDesigned />
      <GlobalImpact />
      <CoolingMatters />
      <Safe/>
      <ProjectHighlight />
    </>
  );
};

export default HomePage;
