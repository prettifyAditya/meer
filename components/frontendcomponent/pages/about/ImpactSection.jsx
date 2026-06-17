import InfoGraphic from "../../molecules/InfoGraphic";

export default function ImpactSection() {
  return (
    <section>
      <div className="impact_sec sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>The Beginning of Impact</h2>
          </div>
          <InfoGraphic
            classname="logo_icon ceo_info"
            mediaSrc="/image/about/director_image.jpg"
            desc="<p>MEER was founded by Dr. Ye Tao, who recognized that while many climate discussions focus on carbon emissions, the overlooked crisis is heat itself. Communities across the Global South, often without reliable access to electricity or air conditioning, are already experiencing deadly consequences of rising temperatures.</p><p>In 2021, Dr. Tao shifted his research focus from nanoscience to climate solutions, developing <strong>surface-based reflective technologies</strong> that could offer immediate relief while also addressing the broader energy imbalance driving global warming.</p>"
            playBtn="/video/about-banner.mp4"
          />
        </div>
      </div>
    </section>
  );
}
