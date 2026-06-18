"use client";
import React from "react";
import { motion } from "motion/react";
import HeroSection from "../../molecules/HeroSection";
import InfoGraphic from "../../molecules/InfoGraphic";
import StrategiesFallShort from "./StrategiesFallShort";
import HowAppliesCroi from "./HowAppliesCroi";
import Image from "next/image";
import "@/uploads/styles/croi/croi.css";

const CroiPage = () => {
  return (
    <>
      <HeroSection
        classname="croi-banner"
        mediaSrc="/image/croi/croi-banner.jpg"
        tagline="Cooling Return on Investment (CROI)"
        heading="How We Measure Cooling Impact"
      />

      <InfoGraphic
        classname="croi-secA"
        heading="A Thermodynamic Measure for Real Climate Solutions"
        desc="
                    <p>Cooling Return on Investment (CROI) is a physics-based metric developed by Dr. Ye Tao of MEER to determine whether a climate solution can genuinely cool the planet. It does not measure emissions reductions, carbon credits, or financial returns. It measures something more fundamental: <strong>how much heat is removed from the Earth system relative to the energy required to deploy and operate the solution.</strong></p>
                    <p>Global warming is not primarily an accounting problem. It is an energy imbalance. Excess solar energy is being trapped in the Earth system, accumulating as heat in oceans, land, and atmosphere. Any intervention that claims to stabilize climate must therefore be evaluated by whether it reduces that heat burden in physical terms.</p>
                    <p>CROI provides that thermodynamic lens.</p>
                    "
        mediaSrc="/image/croi/secA.jpg"
      />

      <InfoGraphic
        classname="croi-secB"
        heading="What CROI Measures"
        desc="
                    <p>CROI quantifies the ratio between heat removed (or prevented from entering the climate system) and the total energy invested across the lifecycle of a solution — including extraction, manufacturing, deployment, and operation.</p>
                    <p>If one unit of energy removes two units of heat, CROI = 2.   If one unit removes 1,500 units of heat, CROI = 1,500. At planetary scale, only extremely high ratios matter.</p>
                    <p>CROI is analogous to Energy Return on Investment (EROI), which determines whether an energy source is viable for society. In the same way, CROI determines whether a climate intervention is viable for planetary cooling. It is not about popularity, policy alignment, or marketability. It is about thermodynamics.</p>
                    "
        mediaSrc="/image/croi/secB.jpg"
      />

      <InfoGraphic
        classname="croi-secC"
        heading="The Planetary Constraint"
        desc="
                    <p>Earth is currently accumulating roughly 1,500 terawatts (TW) of excess heat due to greenhouse gas forcing.</p>
                    <p>By comparison:</p>
                    <ul>
                        <li>Total human civilization operates on approximately 18 TW of continuous energy.</li>
                        <li>At most, around 1 TW could realistically be redirected toward active cooling without destabilizing essential systems.</li>
                    </ul>
                    <p>This creates a strict physical requirement:</p>
                    <p>If humanity can only invest ~1 TW in cooling, that 1 TW must counteract ~1,500 TW of heating.</p>
                    <p>That implies a minimum viable CROI in the range of 1,000–3,000.</p>
                    <p>Any solution below this threshold cannot cool the planet at meaningful scale. It may deliver local benefits, reduce emissions, or support ecosystems — but it cannot offset Earth’s energy imbalance.</p>
                    "
        mediaSrc="/image/croi/secC.jpg"
      />

      <StrategiesFallShort />

      <section>
        <div className={`info_grahphic croi-secE sec-pad-all`}>
          <div className="container">
            <div className="main_wrapper flex">
              <motion.figure
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="img-wrapper">
                  <Image
                    src="/image/croi/secE.jpg"
                    width={571}
                    height={416}
                    alt="section image"
                  ></Image>
                </div>
                <h4>Why CRO must be at least 1,000-3,000</h4>
              </motion.figure>
              <motion.figcaption
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="heading">
                  <h2>Why High CROI Is Essential</h2>
                </div>
                <div className="desc">
                  <p>
                    Humanity does not have unlimited energy to devote to climate
                    intervention. Food systems, healthcare, infrastructure, and
                    industry all depend on the same energy base. Only a small
                    fraction can be allocated to cooling efforts.
                  </p>
                  <p>This means viable solutions must:</p>
                  <ul>
                    <li>
                      Deliver extremely high heat removal per unit of energy
                      invested
                    </li>
                    <li>Require minimal ongoing energy input.</li>
                    <li>Scale across large geographic areas</li>
                    <li>Use abundant, low-energy materials</li>
                    <li>Produce immediate cooling effects</li>
                  </ul>
                  <p>
                    Low-CROI solutions collapse under scale because their energy
                    demand grows too quickly. High-CROI solutions scale
                    efficiently because they rely on passive physical processes
                    rather than continuous industrial energy.
                  </p>
                </div>
              </motion.figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* <InfoGraphic
                classname="croi-secE"
                heading="Why High CROI Is Essential"
                desc="
                    <p>Humanity does not have unlimited energy to devote to climate intervention. Food systems, healthcare, infrastructure, and industry all depend on the same energy base. Only a small fraction can be allocated to cooling efforts.</p>
                    <p>This means viable solutions must:</p>
                    <ul>
                        <li>Deliver extremely high heat removal per unit of energy invested</li>
                        <li>Require minimal ongoing energy input.</li>
                        <li>Scale across large geographic areas</li>
                        <li>Use abundant, low-energy materials</li>
                        <li>Produce immediate cooling effects</li>
                    </ul>
                    <p>Low-CROI solutions collapse under scale because their energy demand grows too quickly. High-CROI solutions scale efficiently because they rely on passive physical processes rather than continuous industrial energy.</p>
                    "
                mediaSrc="/image/croi/secE.jpg"
            /> */}

      <HowAppliesCroi />

      <InfoGraphic
        classname="croi-secG"
        heading="The Core Insight"
        desc="
                    <ul>
                        <li>Earth is accumulating ~1,500 TW of excess heat, while only a small fraction of human energy can be used to counter it.</li>
                        <li>This creates a simple requirement: any viable solution must multiply energy input by thousands in terms of heat removal.</li>
                        <li>Most climate strategies do not meet this threshold. Only passive, highly efficient, and scalable interventions can operate at the necessary magnitude.</li>
                        <li>CROI is not just a metric.It is the test of whether a solution can meaningfully influence global temperature</li>
                    </ul>
                    "
        mediaSrc="/image/croi/secG.jpg"
      />
    </>
  );
};

export default CroiPage;
