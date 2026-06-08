import Image from "next/image";
import Button from "../atoms/Button";

const InsightSection = ({ data , isPopUpVideo, isBtn  }) => {
  if (!data) return null;

  const { heading, subheading, imgSrc, videoSrc,listTitle, title, bulletList, para , buttonText } = data;
  console.log(data, 545454);

  return (
    <section className="InsightSection">
      <div className="grid">
        <div className="media">
          {imgSrc && (
            <Image src={imgSrc} alt={imgSrc} width={400} height={400} />
          )}
          {
            isPopUpVideo && (<button className="play-btn"></button>)
          }
          {videoSrc && (
            <video src={videoSrc} autoPlay muted loop playsInline></video>
          )}
        </div>
        <div className="item-content">
          <h2>{heading}</h2>
          <p>{subheading}</p>
          {
            para && para.map((item) => <p key={item?.id}>{item.text}</p>)
          }
          <ul>
            <p>{listTitle}</p>
            {bulletList &&
              bulletList.map((item) => <li key={item?.id}>{item.text}</li>)}
          </ul>
          {
            isBtn && (<Button variant="btn btn-primary">{buttonText}</Button>)
          }
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
