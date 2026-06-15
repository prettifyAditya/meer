import Image from "next/image";

export default function WhyJoinMeer() {
  return (
    <section>
      <div className="why_join sec-pad-all">
        <div className="container">
          <div className="heading">
            <p>why join meer</p>
            <h2>Build a Career That Creates Real Impact</h2>
          </div>
          <div className="main_wrapper">
            <div className="why_col">
              <div className="icon">
                <Image
                  src="/image/career/why_join1.svg"
                  width={60}
                  height={60}
                  alt="Why Icon"
                />
              </div>
              <h6>Purpose That Matters</h6>
              <p>
                Create meaningful, on-ground impact in regions facing extreme
                heat and climate challenges.
              </p>
            </div>
            <div className="why_col">
              <div className="icon">
                <Image
                  src="/image/career/why_join2.svg"
                  width={60}
                  height={60}
                  alt="Why Icon"
                />
              </div>
              <h6>Global Impact, Local Action</h6>
              <p>
                Work on scalable solutions that reach and improve lives across
                vulnerable communities worldwide.
              </p>
            </div>
            <div className="why_col">
              <div className="icon">
                <Image
                  src="/image/career/why_join3.svg"
                  width={60}
                  height={60}
                  alt="Why Icon"
                />
              </div>
              <h6>Innovate for a Better Climate</h6>
              <p>
                Design, test, and implement sustainable cooling solutions for a
                rapidly warming world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
