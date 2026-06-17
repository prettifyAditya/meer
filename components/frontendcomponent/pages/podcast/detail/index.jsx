import "@/uploads/styles/podcast/podcast.css";
import PodcastBrief from "./PodcastBrief";
import MoreSection from "@/components/frontendcomponent/organisms/MoreSection";

const PodcastDetail = () => {
  return (
    <>
      <PodcastBrief />
      <MoreSection data={data} heading="More Podcasts" />
    </>
  );
};

export default PodcastDetail;

const data = [
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
];
