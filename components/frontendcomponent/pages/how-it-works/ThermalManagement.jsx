import Image from "next/image";
import Button from "../../atoms/Button";
import Motion from "../../molecules/Motion";

export default function ThermalManagement() {
  return (
    <section>
      <div className="thermal_management sec-pad-all">
        <div className="container">
          <Motion variant="fadeUp">
            <div className="heading">
              <h2>Surface Radiative Thermal Management (SRTM)</h2>
              <p>
                Four connected physical processes that cool surfaces, air, and
                climate
              </p>
            </div>
            <div className="main_wrapper">
              <div className="surface_col">
                <div className="count">1</div>
                <h6>Sun</h6>
                <p>Sunlight reaches the surface.</p>
                <figure>
                  <Image
                    src="/image/how-works/thermal1.jpg"
                    width={245}
                    height={235}
                    alt="Thermal Image"
                  ></Image>
                </figure>
                <Button>MEER Surface</Button>
              </div>
              <div className="surface_col">
                <div className="count">2</div>
                <h6>Convential Dark Roof</h6>
                <p>Dark surfaces absorb sunlight and become hot.</p>
                <figure>
                  <Image
                    src="/image/how-works/thermal2.jpg"
                    width={245}
                    height={235}
                    alt="Thermal Image"
                  ></Image>
                </figure>
                <Button>MEER Surface</Button>
              </div>
              <div className="surface_col">
                <div className="count">3</div>
                <h6>Hot Surface</h6>
                <p>
                  The hot surface heats the air by evaporation, releasing water
                  vapour (a greenhouse gas)
                </p>
                <figure>
                  <Image
                    src="/image/how-works/thermal3.jpg"
                    width={245}
                    height={235}
                    alt="Thermal Image"
                  ></Image>
                </figure>
                <Button>MEER Surface</Button>
              </div>
              <div className="surface_col">
                <div className="count">4</div>
                <h6>Outer Space</h6>
                <p>
                  MEER surfaces release heat through the atmospheric
                  transparency window into outer space.
                </p>
                <figure>
                  <Image
                    src="/image/how-works/thermal4.jpg"
                    width={275}
                    height={275}
                    alt="Thermal Image"
                  ></Image>
                </figure>
                <Button>MEER Surface</Button>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
