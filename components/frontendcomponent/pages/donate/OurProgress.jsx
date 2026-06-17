import Image from "next/image";

export default function OurProgress() {
  return (
    <section>
      <div className="our_progress sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <figure>
              <video
                src="/image/donate/our-progress.mp4"
                autoPlay
                muted
                loop
                playsInline
              ></video>
              {/* <Image
                src="/image/donate/our-progress.png"
                width={310}
                height={324}
                alt="Our Progress"
              ></Image> */}
            </figure>
            <figcaption>
              <h2>Our Progress</h2>
              <p>
                MEER successfully installed 800 m2 of solar reflectors in the
                Freetown project, which provided interior cooling of 5-7ºC to 40
                families and valuable scientific research. MEER is expanding to
                further its mission of reducing global and local heat, and your
                support will directly contribute to these projects.
              </p>
              <div className="info_wrap">
                <div className="info_col">
                  <p>Solar Reflectors Installed</p>
                  <h6>
                    800 m<sup>2</sup>
                  </h6>
                </div>
                <div className="info_col">
                  <p>Interior Cooling Provided</p>
                  <h6>3-6ºC</h6>
                </div>
                <div className="info_col">
                  <p>Cooling provided for people</p>
                  <h6>up to 500</h6>
                </div>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
