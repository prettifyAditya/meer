import Image from "next/image";
import Button from "../atoms/Button";
import "@/uploads/styles/component/component.css";

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
        <div className="media">
          {imgSrc && (
            <Image src={imgSrc} alt={imgSrc} width={400} height={400} />
          )}
          {isPopUpVideo && (
            <button className="play-btn" onClick={isPopUpVideo}></button>
          )}
          {videoSrc && (
            <video src={videoSrc} autoPlay muted loop playsInline></video>
          )}
        </div>
        <div className="item-content">
          <h2>{heading}</h2>
          {detail && <div dangerouslySetInnerHTML={{ __html: detail }} />}
          {isBtn && (
            <Button href={isBtn.href} variant="btn btn-primary">
              {isBtn.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightContainer;
