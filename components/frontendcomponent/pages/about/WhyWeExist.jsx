import Image from "next/image";

export default function WhyWeExist() {
  return (
    <section>
      <div className="banner why_we_exist">
        <div className="bg">
          <Image
            src="/image/about/why_banner.png"
            width={1280}
            height={650}
            alt="Why We Exist"
          ></Image>
          <div className="banner-wrapper">
            <div className="container">
              <div className="icon">
                <Image
                  className="logoIcon"
                  src="/logo-vector-white.svg"
                  width={60}
                  height={42}
                  alt="Logo Icon"
                ></Image>
              </div>
              <div className="heading">
                <h2>Why We Exist</h2>
                <div className="desc">
                  <p>
                    As global temperatures rise, the burden falls hardest on
                    those least responsible families living in informal
                    settlements, farmers facing crop failures, and frontline
                    workers laboring in unsafe conditions
                  </p>
                  <p>
                    MEER exists to change that reality. By combining science,
                    engineering, and community collaboration, we’re creating
                    low-cost cooling solutions that protect lives today while
                    building long-term resilience for tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
