import HeroSection from "../../molecules/HeroSection";
import "@/uploads/styles/human-stories/human-stories.css";
import StoryNav from "./StoryNav";
import StoriesWrapper from "./StoriesWrapper";

export default function HumanStoriesPage() {
  return (
    <main>
      <HeroSection
        classname="human_stories_hero"
        mediaSrc="/image/human/human_banner.jpg"
        tagline="Human Impact Stories"
        heading="Stories of Courage and Change"
      />
      <StoryNav />
      <StoriesWrapper />
    </main>
  );
}
