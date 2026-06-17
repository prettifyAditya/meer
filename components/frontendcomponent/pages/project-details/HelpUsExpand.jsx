import Image from "next/image";
import Button from "../../atoms/Button";

export default function HelpUsExpand() {
  return (
    <section>
      <div className="banner help-us">
        <div className="bg">
          <Image
            src="/image/project/help-us.jpg"
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
                <h2>Help us expand cooling access in Freetown.</h2>
                <p>
                  MEER’s Freetown project serves as a proof of concept for
                  equitable heat adaptation — a blueprint for similar
                  interventions across the Global South.
                </p>
                <Button>Donate</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
