"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Overview({ id }) {
  return (
    <section id={id}>
      <div className="overview_sec sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <motion.figcaption
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Overview</h2>
              <p>
                Freetown's unique geography, reaching from coast to mountains,
                makes it vulnerable to climate change and the urban heat island
                effect. MEER plans to expand in the city and is currently
                providing cooling solutions to the shanty town Kroo Bay. Read
                below for more details, including initial data showing a 6 °C
                (10.8 °F) decrease in interior temperature.
              </p>
              <div className="info_wrap">
                <div className="info_col">
                  <p>People living in slums</p>
                  <h6>45,000</h6>
                </div>
                <div className="info_col">
                  <p>MEER Ultracool coverage</p>
                  <h6>
                    1,025 m<sup>2</sup>
                  </h6>
                </div>
                <div className="info_col">
                  <p>Average summer daytime temperatures</p>
                  <h6>28.3 °C (83 °F)</h6>
                </div>
              </div>
            </motion.figcaption>
            <motion.figure
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/image/project/overivew-img.jpg"
                width={610}
                height={325}
                alt="Overview Image"
              ></Image>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
