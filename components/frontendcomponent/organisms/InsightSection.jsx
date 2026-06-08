import Image from "next/image";

const InsightSection = ({ data }) => {
  if (!data) return null;

  const { heading, subheading, imgSrc, videoSrc,listTitle, title, bulletList } = data;
  console.log(data, 545454);

  return (
    <section className="InsightSection">
      <div className="grid">
        <div className="media">
          {imgSrc && (
            <Image src={imgSrc} alt={imgSrc} width={400} height={400} />
          )}
          {videoSrc && (
            <video src={videoSrc} autoPlay muted loop playsInline></video>
          )}
        </div>
        <div className="item-content">
          <h2>{heading}</h2>
          <p>{subheading}</p>
          <ul>
            <p>{listTitle}</p>
            {bulletList &&
              bulletList.map((item) => <li key={item?.id}>{item.text}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
