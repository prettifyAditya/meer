import LatestArticle from "@/components/frontendcomponent/molecules/LatestArticle";
import Motion from "@/components/frontendcomponent/molecules/Motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogArticle = () => {
  return (
    <section className="blogArticle">
      <Motion variant="fadeUp">
        <div className="container">
          <div className="left website-content">
            <p>
              On February 9, 2025, Huazhong University of Science and Technology
              hosted the landmark Cooling the Earth Technology Seminar, drawing
              experts, academics, and policymakers from around the globe. The
              event focused on innovative technologies designed to combat global
              warming, showcasing ground-breaking solutions and fostering
              discussions on scalable, practical approaches to climate
              mitigation. 
            </p>
            <h4>
              Spearheading Climate Innovation: Mirrors for Earth's Energy
              Rebalancing (MEER) 
            </h4>
            <p>
              At the forefront of these discussions was Dr. Ye Tao, Executive
              Director and Chief Scientist at Mirrors for Earth's Energy
              Rebalancing (MEER). Dr. Tao presented cutting-edge research on the
              deployment of ground-based reflectors, a promising technology that
              aims to reflect sunlight and reduce global temperatures. This
              session highlighted how such technologies could be integrated into
              everyday human activities, offering not only a method to combat
              climate change but also a practical solution adaptable across
              various sectors.
            </p>

            <Image
              src="/image/blog/banner2.png"
              alt="banner2"
              width={1920}
              height={1080}
            />

            <h4>Engaging a Diverse Audience </h4>

            <p>
              The seminar was met with enthusiastic responses from attendees,
              reflecting a growing awareness and interest in technological
              solutions to environmental challenges. Participants from diverse
              fields brought forward thoughtful questions and insights,
              enriching the discourse and underlining the importance of
              multi-disciplinary approaches to environmental issues. 
            </p>

            <h4>Emphasizing Collaboration and Future Strategies </h4>

            <p>
              A key insight from the seminar was the critical importance of
              interdisciplinary collaboration in addressing climate change. The
              event underscored the necessity for partnerships that foster
              innovation and enable the scaling of effective solutions to make a
              tangible impact.  Inspired by the discussions, MEER is now looking
              to expand its research initiatives and pilot projects. The seminar
              provided invaluable perspectives that will shape the
              organization’s future strategies, aiming to enhance and implement
              technologies on a global scale. 
            </p>

            <Image
              src="/image/blog/banner3.png"
              alt="banner2"
              width={1920}
              height={1080}
            />

            <h4>A Global Call to Action</h4>

            <p>
              The success of the Cooling the Earth Technology Seminar is a
              testament to the power of collective effort and shared knowledge
              in the fight against climate change. It serves as a call to action
              for all stakeholders to remain engaged, to share knowledge, and to
              collaborate on developing solutions that can significantly impact
              our planet's climate health. 
            </p>

            <p>
              The Cooling the Earth Technology Seminar is just the beginning.
              It's up to us, the global community, to take these insights and
              innovations forward, turning them into action that cools our Earth
              and leads to a sustainable way of life for future generations.
            </p>
          </div>
          <div className="right">
            <LatestArticle heading="Latest Blogs" data={data} />
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default BlogArticle;

const data = [
  {
    image: "/image/blog/1.png",
    title:
      "Empowering Change: MEER's Upcycling Training Session with the Dorothy...",
  },
  {
    image: "/image/blog/2.png",
    title: "MEER India Project Advances to Zonal Level in Prestigious",
  },
  {
    image: "/image/blog/3.png",
    title: "Empowering Freetown: MEER's Upcycling Workshop",
  },
  {
    image: "/image/blog/4.png",
    title: "MEER Shines at Avishkar: Our Journey at Pune's Premier",
  },
];
