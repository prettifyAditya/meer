import Button from "../../atoms/Button";
import Motion from "../../molecules/Motion";
import LogoSlider from "../../organisms/LogoSlider";

export default function PartnerSponser() {
  return (
    <section>
      <div className="partner_sec sec-pad-all">
        <div className="container">
          <Motion variant="fadeUp">
            <div className="heading">
              <h2>Partners & Sponsors</h2>
            </div>
            <LogoSlider data={data} />
            <div className="get_in_touch">
              <p>Interested in partnering with us?</p>
              <Button href="/contact-us">Get in touch</Button>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}

const data = [
  "/image/partner/1.svg",
  "/image/partner/2.svg",
  "/image/partner/3.svg",
  "/image/partner/4.svg",
  "/image/partner/5.svg",
  "/image/partner/6.svg",
  "/image/partner/7.svg",
  "/image/partner/1.svg",
  "/image/partner/2.svg",
  "/image/partner/3.svg",
  "/image/partner/4.svg",
  "/image/partner/5.svg",
  "/image/partner/6.svg",
  "/image/partner/7.svg",
];
