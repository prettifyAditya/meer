import Image from "next/image";

export default function DataMonitoring({ id }) {
  return (
    <section id={id}>
      <div className="banner data-monitoring">
        <div className="bg">
          <Image
            src="/image/project/data-monitoring.jpg"
            width={1280}
            height={680}
            alt="Banner Image"
          ></Image>
          <div className="banner-wrapper">
            <div className="container">
              <div className="icon">
                <Image
                  src="/image/icon-white.svg"
                  width={60}
                  height={40}
                  alt="Meer Icon"
                ></Image>
              </div>
              <div className="heading">
                <h2>Data & Monitoring</h2>
                <p>
                  To measure performance, MEER is deploying environmental
                  sensors that track temperature, humidity, and radiation in
                  real time. This data informs both scientific validation and
                  community feedback loops, ensuring the designs evolve with
                  local needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
