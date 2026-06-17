import Image from "next/image";

export default function LocalCooling() {
  return (
    <section>
      <div className="local_cooling sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>From Local Cooling to Global Relevance</h2>
            <p>
              SRTM delivers immediate local benefits — but its impact goes far
              beyond.
            </p>
          </div>
          <div className="local_wrapper">
            <div className="local_col">
              <div className="icon">
                <Image
                  src="/image/how-works/local1.svg"
                  width={45}
                  height={45}
                  alt="Icon"
                />
              </div>
              <p>Cities absorb less heat</p>
            </div>
            <div className="local_col">
              <div className="icon">
                <Image
                  src="/image/how-works/local2.svg"
                  width={45}
                  height={45}
                  alt="Icon"
                />
              </div>
              <p>Landscapes release less thermal energy into the air</p>
            </div>
            <div className="local_col">
              <div className="icon">
                <Image
                  src="/image/how-works/local3.svg"
                  width={45}
                  height={45}
                  alt="Icon"
                />
              </div>
              <p>Atmospheric heating is reduced over large areas</p>
            </div>
          </div>
          <div className="simple_terms flex">
            <figcaption>
              <div className="title">
                <div className="icon">
                  <Image
                    src="/icon/bulb.svg"
                    width={45}
                    height={45}
                    alt="Icon"
                  ></Image>
                </div>
                <p>In Simple Terms</p>
              </div>
              <h5>
                Less heat entering the atmosphere means less heat retained in
                the climate system.
              </h5>
              <p>This makes SRTM one of the few approaches that can:</p>
              <ul>
                <li>Protect people today</li>
                <li>Scale safely over time</li>
                <li>Contribute to broader climate stabilisation</li>
              </ul>
            </figcaption>
            <figure>
              <Image
                src="/image/how-works/meer-cooling.jpg"
                width={579}
                height={388}
                alt="Meer Cooling"
              ></Image>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
