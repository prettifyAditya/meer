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
import GetInvolved from "./GetInvolved";
import CommunityVoice from "./CommunityVoice";
import Partners from "./Partners";
import MeerResources from "./MeerResources";
import RegionImpacts from "./RegionImpacts";

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
      <Safe />
      <ProjectHighlight />
      <RegionImpacts />
      <GetInvolved />
      <MeerResources data={meerResourceData} />
      <CommunityVoice />
      <Partners />
    </>
  );
};

export default HomePage;

const meerResourceData = [
  {
    category: "All",
    list: [
      {
        image: "/image/home/resource/1.png",
        title: "MEERTalk February 2026",
        description: "Goliath’s Curse: Why Societies Collapse",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/2.png",
        title: "MEERTalk Januray 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/3.png",
        title: "Newsletter February 2026",
        description:
          "As 2026 progresses, MEER’s work continues to build momentum..",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
    ],
  },
  {
    category: "MEER Talks",
    list: [
      {
        image: "/image/home/resource/1.png",
        title: "MEERTalk February 2026",
        description: "Goliath’s Curse: Why Societies Collapse",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/2.png",
        title: "MEERTalk Januray 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
    ],
  },
  {
    category: "Newsletters",
    list: [
      {
        image: "/image/home/resource/3.png",
        title: "Newsletter February 2026",
        description:
          "As 2026 progresses, MEER’s work continues to build momentum..",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
    ],
  },
  {
    category: "Podcasts",
    list: [
      {
        image: "/image/home/resource/3.png",
        title: "Newsletter February 2026",
        description:
          "As 2026 progresses, MEER’s work continues to build momentum..",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/3.png",
        title: "Newsletter February 2026",
        description:
          "As 2026 progresses, MEER’s work continues to build momentum..",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
    ],
  },
];
