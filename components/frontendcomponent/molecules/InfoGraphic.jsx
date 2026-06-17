"use client";
import Image from "next/image";
import "@/uploads/styles/component/component.css";
import { useModal } from "@/hooks/useModal";

export default function InfoGraphic({
  classname = "",
  mediaSrc = "",
  heading = "",
  playBtn = "",
  desc = "",
  location = "",
  cta,
  id,
}) {
  // const openVideo = useModalStore((state) => state.openVideo);

  const { openModal } = useModal();

  return (
    <section id={id}>
      <div className={`info_grahphic sec-pad-all ${classname}`}>
        <div className="container">
          <div className="main_wrapper flex">
            <figure>
              {mediaSrc.includes("mp4") ? (
                <video src={mediaSrc} autoPlay muted loop playsInline></video>
              ) : (
                <Image
                  src={mediaSrc}
                  width={571}
                  height={416}
                  alt="section image"
                ></Image>
              )}
              {playBtn && (
                <button
                  className="play-btn"
                  data-video={playBtn}
                  onClick={() => openModal("video", playBtn)}
                ></button>
              )}
              {classname.includes("logo_icon") && (
                <Image
                  className="logoIcon"
                  src="/logo-vector-white.svg"
                  width={60}
                  height={42}
                  alt="Logo Icon"
                ></Image>
              )}
              {classname.includes("ceo_info") && (
                <div className="ceo_details">
                  <p>MEER founder</p>
                  <h6>Dr. Ye Tao</h6>
                </div>
              )}
            </figure>
            <figcaption>
              {location && <span className="location">{location}</span>}
              <div className="heading">
                <h2>{heading}</h2>
              </div>
              <div
                className="desc"
                dangerouslySetInnerHTML={{ __html: desc }}
              ></div>
              {cta}
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
