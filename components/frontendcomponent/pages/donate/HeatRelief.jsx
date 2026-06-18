import Motion from "../../molecules/Motion";

export default function HeatRelief() {
  return (
    <section>
      <div className="heat_relief sec-pad-all">
        <div className="container">
          <Motion variant="fadeUp">
            <div className="heading">
              <h2>Heat Relief for Vulnerable Communities</h2>
            </div>
            <figure>
              <video
                src="/video/heat-relief.mp4"
                poster="/video/heat-relief-poster.png"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </figure>
          </Motion>
        </div>
      </div>
    </section>
  );
}
