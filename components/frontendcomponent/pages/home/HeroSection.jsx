import Button from "../../atoms/Button";
import "@/uploads/styles/home/home.css";

const HeroSection = ({ data }) => {
  if (!data) return null;
  const { videoSrc, heading, subheading, buttonText } = data;
  return (
    <section className="banner home_banner">
      <div className="bg">
        <video src={videoSrc} autoPlay muted loop playsInline></video>
        <div className="banner-wrapper">
          <div className="container">
            <div className="content">
              <h1>{heading}</h1>
              <p>{subheading}</p>
              <Button variant="btn-primary">{buttonText}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
