import "@/uploads/styles/home/home.css";
import HeroSection from "./HeroSection";
import ExtremeHeats from "./ExtremeHeats";
import StaticData from "@/uploads/data/StaticData.json";

const HomePage = () => {

  const HeroSectionData = StaticData?.Homepage?.HeroSection
  const ExtremeHeatsData = StaticData?.Homepage?.Section1
  
  return (
    <main>
      <HeroSection data={HeroSectionData} />
      <ExtremeHeats data={ExtremeHeatsData} />
    </main>
  );
};

export default HomePage;
