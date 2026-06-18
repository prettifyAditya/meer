import Button from "../../atoms/Button";
import "@/uploads/styles/home/home.css";
import Motion from "../../molecules/Motion";

const HeroSection = () => {
  if (!data) return null;
  const { videoSrc, heading, subheading, cta } = data;
  return (
    <section className="banner home_banner">
      <div className="bg">
        <video src={videoSrc} autoPlay muted loop playsInline></video>
        <div className="banner-wrapper">
          <div className="container">
            <Motion variant="fadeUp">
              <div className="content">
                <h1>{heading}</h1>
                <p>{subheading}</p>
                <Button href={cta.href} variant="btn-primary">
                  {cta.text}
                </Button>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const data = {
  videoSrc: "/video/home-banner.mp4",
  heading: "Cooling the Earth from the Surface up",
  subheading:
    "Practical, affordable cooling that protectspeople from extremeheat today and helps reduce global temperatures over time.",
  cta: { href: "/how-it-works", text: "Learn how it works" },
};
