import Image from "next/image";

export default function TypicalCost() {
  return (
    <section>
      <div className="typical_costs sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Typical Costs for Projects</h2>
          </div>
          <div className="main_wrapper flex">
            <figure>
              <Image
                src="/image/donate/typical-cost.jpg"
                width={590}
                height={442}
                alt="Typical Cost"
              ></Image>
            </figure>
            <figcaption>
              <ul>
                <li>
                  <h6>$100</h6>
                  <p>
                    Helps keep a household safe and cool during extreme heat.
                  </p>
                </li>
                <li>
                  <h6>$500</h6>
                  <p>Creating shaded areas for clinics and patient care</p>
                </li>
                <li>
                  <h6>$1,500</h6>
                  <p>Helps cool a small school building/classroom area</p>
                </li>
                <li>
                  <h6>$10,000</h6>
                  <p>
                    Helps establishing community cooling spaces during extreme
                    heat
                  </p>
                </li>
              </ul>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
