import HeroSection from "../../molecules/HeroSection";
import "@/uploads/styles/project/project.css";

export default function ProjectDetailsPage() {
  return (
    <main>
      <HeroSection
        classname="project_hero"
        mediaSrc="/image/project/project_details_banner.jpg"
        tagline="Freetown, Sierra Leone"
        heading="Community cooling in one of West Africa’s hottest and most vulnerable neighborhoods."
      />
    </main>
  );
}
