// "use client";
import staticData from "@/uploads/data/StaticData.json";
import HeroSection from "../../molecules/HeroSection";
import InfoGraphic from "../../molecules/InfoGraphic";
import ImpactSection from "./ImpactSection";
import WhyWeExist from "./WhyWeExist";
import MissionVision from "./MissionVision";
import OurStrategy from "./OurStrategy";
import TheoryChange from "./TheoryChange";
import MeerJourney from "./MeerJourney";
import PartnerSponser from "./PartnerSponser";
import GlobalTeam from "./GlobalTeam";
import TheoryPop from "./TheoryPop";
import "@/uploads/styles/about/about.css";

export default function AboutUsPage() {
  const theoryData = staticData.AboutUs.Section3;
  const MissionVisionData = staticData.AboutUs.Section6;
  const journeyData = staticData.AboutUs.Section7;
  const strategyData = staticData.AboutUs.Section8;
  return (
    <main>
      <HeroSection
        classname="about_hero"
        mediaSrc="/video/about-banner.mp4"
        posterSrc="/video/about-poster.png"
        tagline="Our Story"
        heading="Mirrors for Earth’s Energy Rebalancing"
      />
      <InfoGraphic
        classname="who_we_are"
        mediaSrc="/image/about/who_we_are.jpg"
        heading="Who we are"
        desc={
          "<p>MEER (Mirrors for Earth’s Energy Rebalancing) is a nonprofit organization dedicated to protecting communities from extreme heat, the deadliestand most overlooked climate threat. Our work begins with practical, low-cost cooling solutions that help people adapt to rising temperatures now, while also contributing to long-term climate balance.</p><p>Our planet is overheating. Heatwaves now kill more people than any other natural disaster, and communities in the Global South, who have contributed the least to climate change, are suffering the most. MEER exists to address this crisis by reflecting sunlight before it becomes heat, bringing relief today while helping rebalance Earth’s energy system for the future.</p>"
        }
      />
      <TheoryChange data={theoryData} />
      <ImpactSection />
      <WhyWeExist />
      <MissionVision data={MissionVisionData} />
      <MeerJourney data={journeyData} />
      <OurStrategy data={strategyData} />
      <GlobalTeam />
      <PartnerSponser />
      <TheoryPop />
    </main>
  );
}
