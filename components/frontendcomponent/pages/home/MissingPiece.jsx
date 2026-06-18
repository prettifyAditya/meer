import Image from "next/image";
import Motion from "../../molecules/Motion";

const MissingPiece = () => {
  if (!data) return null;
  const { videoSrc, heading, para, title } = data;
  return (
    <section className="missingPiece">
      <div className="container">
        <div className="grid">
          <Motion variant="fadeRight">
            <div className="heading">
              <Image src="/image/icon.svg" alt="Meer" width={20} height={20} />
              <h2>{heading}</h2>
            </div>
          </Motion>
          <Motion variant="fadeUp">
            <div className="earth">
              <video src={videoSrc} autoPlay muted loop playsInline />
            </div>
          </Motion>
          <Motion variant="fadeLeft">
            <div className="content">
              {para && <div dangerouslySetInnerHTML={{ __html: para }} />}
              <h6>{title}</h6>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default MissingPiece;

const data = {
  heading: "There is a Missing Piece",
  videoSrc: "/video/earth.mp4",
  para: `<p>Reducing emissions is essential, but it won’t cool the planet fast enough to help those suffering now.</p><p>Most climate solutions focus on reducing emissions or removing carbon. Both are important, but neither directly reduces heat today.</p>`,
  title: "MEER focuses on cooling.",
};
