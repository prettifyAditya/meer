import Image from "next/image";
import React from "react";
import Motion from "../../molecules/Motion";

const GetInvolved = () => {
  return (
    <section className="getInvolved">
      <Image
        alt="involved"
        width={1920}
        height={1080}
        src="/image/home/happy.png"
      />
      <div className="content">
        <Motion variant="fadeRight">
          <h2>Get Involved</h2>
          <div className="website-content website-content-white">
            <p>
              Cooling the world starts locally. Whether you’re a donor,
              researcher, policymaker, or community partner, there are many ways
              to support practical solutions to extreme heat.
            </p>
            <p>Your support helps:</p>
            <ul>
              <li>
                Fund cutting-edge research on extreme heat interventions,
                including next-generation passive cooling paints (PDRC)
              </li>
              <li>Install cooling systems where they are needed most</li>
              <li>Train local teams</li>
              <li>Build the evidence needed for wider adoption</li>
            </ul>
            <div className="action">
              <button className="btn btn-primary">Donate Now</button>
              <button className="btn btn-outline-white">Partner With Us</button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default GetInvolved;
