"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Button from "../../atoms/Button";

export default function TakeAway() {
  return (
    <section>
      <div className="takeaway_sec sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <motion.figcaption
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="heading">
                <h2>The Takeaway</h2>
                <p>Cooling the surface cools the system.</p>
              </div>
              <div className="desc">
                <p>
                  Surface Radiative Thermal Management offers a practical way to
                  protect communities from extreme heat while contributing to a
                  more stable and livable planet.
                </p>
                <p>
                  MEER exists to develop, test, and scale this approach —
                  openly, responsibly, and in partnership with the communities
                  most affected by rising temperatures.
                </p>
              </div>
              <div className="btn_wrap">
                <Button>Science & Research</Button>
                <Button className="btn-primary-outline">
                  Global Cooling & Climate Relevance
                </Button>
              </div>
            </motion.figcaption>
            <motion.figure
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/image/how-works/takeaway-img.jpg"
                width={571}
                height={416}
                alt="section image"
              ></Image>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
