import LatestArticle from "@/components/frontendcomponent/molecules/LatestArticle";
import Motion from "@/components/frontendcomponent/molecules/Motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PodcastBrief = () => {
  return (
    <section className="podcastDetail ">
      <Motion variant="fadeUp">
        <div className="container">
          <div className="left">
            <div className="top">
              <div className="title">
                <p>09 Feb 2025</p>
                <h1>MEER Podcast - Dr. Klaus Ritcher</h1>
              </div>
              <ul className="share">
                {shareList.map(({ icon, href }, i) => {
                  return (
                    <li key={i}>
                      <Link href={href}>
                        <Image src={icon} alt="icon" width={20} height={20} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="website-content">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ip_5Szhsz4o?si=nvX5fO50lJgmnRCp"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p>
                In this episode we’re joined by Dr. Klaus Richter, physicist and
                President of the German Physical Society. Dr. Richter recently
                co-authored a joint statement with the German Meteorological
                Society that drew global attention, warning that the Earth could
                warm by as much as 3°C by 2050 if current trends continue.
              </p>
              <p>
                The statement — and the DIE ZEIT article that followed — sparked
                widespread debate about how fast the climate is changing and how
                society should respond.
              </p>

              <p>
                Read the article discussed in this episode:{" "}
                <a href="">Read more</a>
              </p>

              <p>
                Read the statement here: <a href="">Read more</a>
              </p>
            </div>
          </div>
          <div className="right">
            <LatestArticle heading="Older Podcasts" data={data} />

            <div className="newsLetter"></div>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default PodcastBrief;

const data = [
  {
    image: "/image/podcast/1.png",
    title: "MEER Podcast - Dr. Klaus Ritcher",
  },
  {
    image: "/image/podcast/2.png",
    title: "MEER Podcast - Dr. Klaus Ritcher",
  },
  {
    image: "/image/podcast/3.png",
    title: "MEER Podcast - Dr. Klaus Ritcher",
  },
  {
    image: "/image/podcast/4.png",
    title: "MEER Podcast - Dr. Klaus Ritcher",
  },
];

const shareList = [
  {
    icon: "/icon/share.svg",
    href: "#",
  },
  {
    icon: "/icon/twitter-blue.svg",
    href: "#",
  },
  {
    icon: "/icon/email_blue.svg",
    href: "#",
  },
  {
    icon: "/icon/whatsapp_blue.svg",
    href: "#",
  },
];
