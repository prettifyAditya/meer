"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "../atoms/Button";
import "@/uploads/styles/component/component.css";
import Motion from "../molecules/Motion";

const InsightContainer = ({
  isPopUpVideo,
  isBtn,
  detail,
  imgSrc,
  videoSrc,
  heading,
  className,
}) => {
  return (
    <div className={`InsightContainer  ${className} `}>
      <div className="grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="media"
        >
          {imgSrc && (
            <Image src={imgSrc} alt={imgSrc} width={400} height={400} />
          )}
          {isPopUpVideo && (
            <button className="play-btn" onClick={isPopUpVideo}></button>
          )}
          {videoSrc && (
            <video src={videoSrc} autoPlay muted loop playsInline></video>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`item-content ${className}`}
        >
          <h2>{heading}</h2>
          {detail && <div dangerouslySetInnerHTML={{ __html: detail }} />}
          {isBtn && (
            <Button href={isBtn.href} variant="btn btn-primary">
              {isBtn.text}
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default InsightContainer;
