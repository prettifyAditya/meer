import HeroSection from "../../molecules/HeroSection";
import OurProjects from "./OurProjects";
import "@/uploads/styles/our-work/our-work.css";

export default function OurWorkPage() {
  return (
    <main>
      <HeroSection
        classname="our_works_hero"
        mediaSrc="/video/work_banner.mp4"
        posterSrc="/video/work-poster.png"
        tagline="Our Work"
        heading="Our work focuses on community cooling projects that can be scaled across cities, farms and reservoirs."
      />
      <OurProjects />
    </main>
  );
}
