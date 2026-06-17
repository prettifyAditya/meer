import HeroSection from "../../molecules/HeroSection";
import WhyJoinMeer from "./WhyJoinMeer";
import OurCulture from "./OurCulture";
import CurrentOpening from "./CurrentOpening";
import JoinUs from "./JoinUs";
import "@/uploads/styles/career/career.css";

export default function CareerPage() {
  return (
    <main>
      <HeroSection
        classname="career_hero"
        mediaSrc="/image/career/career-banner.jpg"
        tagline="Careers"
        heading="Join MEER: Reflect a Cooler Future"
      />
      <WhyJoinMeer />
      <OurCulture />
      <CurrentOpening />
      <JoinUs />
    </main>
  );
}
