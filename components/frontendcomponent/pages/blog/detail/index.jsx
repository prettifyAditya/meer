import HeroSection from "@/components/frontendcomponent/molecules/HeroSection";
import "@/uploads/styles/blog/blog.css";
import BlogArticle from "./BlogArticle";
import MoreSection from "@/components/frontendcomponent/organisms/MoreSection";

const BlogDetail = () => {
  return (
    <>
      <HeroSection
        classname="blogDetailHero"
        mediaSrc="/image/blog/banner.png"
        tagline="09 Feb 2025"
        heading="Groundbreaking Seminar Paves the Way for Global Climate Solutions"
      />
      <BlogArticle />
      <MoreSection data={data} heading="More Blogs" />
    </>
  );
};

export default BlogDetail;

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
