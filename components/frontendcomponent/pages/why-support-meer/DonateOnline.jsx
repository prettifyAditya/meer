"use client";
import React from "react";
import { motion } from "motion/react";
import Button from "../../atoms/Button";
import Image from "next/image";
import Link from "next/link";

const DonateOnline = () => {
  return (
    <>
      <section>
        <div className="wsm-secD sec-pad-all">
          <div className="container">
            <div className="flex-box">
              <motion.div
                className="col"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Donate Online</h2>
                <p>
                  Support MEER’s work through a secure online donation. Your
                  contribution helps expand field projects, strengthen research,
                  and protect communities from extreme heat.
                </p>
                <Button variant="btn-primary">Donate</Button>
              </motion.div>
              <motion.div
                className="col"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <figure>
                  <Image
                    src="/image/why-suppor-meer/secD.jpg"
                    width={362}
                    height={292}
                    alt="ico"
                  ></Image>
                </figure>
                <figcaption>
                  <figure>
                    <Image
                      src="/image/icon.svg"
                      width={56}
                      height={52}
                      alt="ico"
                    ></Image>
                  </figure>
                  <div className="bottom">
                    <p>
                      If you have any questions about donations, or if you
                      prefer to give in another way — including stock, estate
                      gifts, or other in-kind contributions — please contact us
                      at:
                    </p>
                    <Link href="mailto:donations@meer.org">
                      donations@meer.org
                    </Link>
                  </div>
                </figcaption>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonateOnline;
