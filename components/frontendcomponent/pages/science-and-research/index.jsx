import React from 'react'
import HeroSection from '../../molecules/HeroSection'
import InfoGraphic from '../../molecules/InfoGraphic'
import "@/uploads/styles/science-research/science-research.css"
import OurResearchFocus from './OurResearchFocus'

const ScienceAndResearch = () => {
    return (
        <>
            <HeroSection
                classname="science-research-banner"
                mediaSrc="/image/scrience-and-reasearch/science-research-banner.png"
                tagline="Science and Research"
                heading="Cooling Through Reflection and Emission"
            />
            <InfoGraphic
                classname="science-research-secA"
                heading="The Science Behind MEER"
                desc="
                    <p>Climate change is, at its foundation, a problem of energy imbalance. The Earth is currently absorbing more energy from the Sun than it radiates back into space. This measurable imbalance drives rising global temperatures, intensifying heatwaves, and increasing stress on ecosystems and human health.</p>
                    <p>The imbalance begins at the surface. When sunlight (shortwave radiation) strikes dark materials — asphalt, conventional rooftops, exposed soil — most of that energy is absorbed and converted into heat. That heat warms buildings and the surrounding air, contributing to urban heat islands and dangerous indoor temperatures. Greenhouse gases then reduce the efficiency with which heat (longwave infrared radiation) escapes to space, compounding the warming effect.</p>
                    "
                mediaSrc="/image/scrience-and-reasearch/science-secA.svg"
            />
            <InfoGraphic
                classname="science-research-secB"
                heading="MEER’s work addresses both sides of this radiative equation."
                desc="
                    <p>First, we increase shortwave reflectivity (albedo), sending more incoming solar radiation back upward before it can be absorbed and converted into heat. Our reflector materials are engineered with very high albedo values (0.85+), dramatically reducing surface heat gain.</p>
                    <p>Second, we develop and test passive daytime radiative cooling (PDRC) materials. These advanced surfaces are designed not only to reflect sunlight, but also to efficiently emit longwave infrared radiation through the atmospheric transparency window (8–13 microns), allowing heat to escape directly to outer space — even under direct sunlight.</p>
                    <p>Together, high shortwave reflectivity and enhanced longwave emissivity form a complementary passive cooling strategy. One prevents solar energy from entering the system; the other accelerates the release of thermal energy back to space.</p>
                    <p>These processes require no electricity, no refrigerants, and no moving parts. They produce no operational emissions and deliver immediate temperature reductions in buildings, public spaces, and agricultural environments. At scale, combining reflective and radiative cooling materials contributes both to local heat protection and to the broader goal of rebalancing Earth’s energy flow.</p>
                    "
                mediaSrc="/image/scrience-and-reasearch/science-secB-1.jpg"
            />
            <InfoGraphic
                classname="science-research-secC"
                heading="Reflectivity and Passive Cooling"
                desc="
                    <p>Cooling begins with physics. When a surface reflects most incoming sunlight (shortwave radiation), far less energy is absorbed and converted into heat. This property — known as albedo — determines how hot a surface becomes under direct sun.</p>
                    <p>MEER reflector materials are engineered with very high albedo values (0.85+), meaning they reflect more than 85% of incoming solar radiation — approaching the reflectivity of fresh snow. By preventing solar energy from being absorbed in the first place, these surfaces remain dramatically cooler than conventional dark roofs.</p>
                    <p>But reflection is only part of the solution.</p>
                    <p>In parallel, MEER develops passive daytime radiative cooling (PDRC) materials. These advanced surfaces are designed not only to reflect sunlight, but also to efficiently emit heat in the form of longwave infrared radiation through the atmospheric transparency window (8–13 microns). This allows thermal energy to escape directly to outer space — even under full sun.</p>
                    <p>Together, high shortwave reflectivity and strong longwave emissivity reduce heat gain and accelerate heat loss.</p>
                    <p>This combined passive approach produces measurable, real-world benefits:</p>
                    <ul>
                        <li>5–10 °C reductions in indoor temperatures in homes and schools</li>
                        <li>Up to 90% reductions in water evaporation from exposed reservoirs</li>
                        <li>Significant health and comfort improvements in high-heat environments</li>
                    </ul>
                    <p>These processes require no electricity, no refrigerants, no fuel, and no moving parts. They produce no operational emissions and begin working immediately upon installation.</p>
                    "
                mediaSrc="/image/scrience-and-reasearch/science-secC.svg"
            />
            <OurResearchFocus />
            <InfoGraphic
                classname="science-research-secE"
                heading="Why This Science Matters"
                desc="
                    <p>Earth’s Energy Imbalance (EEI) is the fundamental driver of modern climate change. The planet is accumulating more energy than it releases back to space, accelerating warming across oceans, land, and atmosphere. Addressing that imbalance is not abstract theory — it is applied physics, and it is actionable.</p>
                    <p>Heating begins at the point of solar absorption. When sunlight is absorbed by dark surfaces, it is converted into heat. That is the first step in the warming chain. By increasing reflectivity and enhancing radiative heat loss, we intervene precisely where energy enters the system — where small percentage changes translate into significant thermal effects.</p>
                    "
                mediaSrc="/image/scrience-and-reasearch/science-secE.svg"
            />
            <InfoGraphic
                classname="science-research-secF"
                heading="Measuring What Matters: CROI"
                desc="
                    <p>To ensure impact, MEER uses a simple but rigorous metric developed by MEER’s Lead Scientist, Dr. Ye Tao: Cooling Return on Investment (CROI). It measures how much heat a solution removes from Earth’s system for every unit of energy required to build and maintain it.</p>
                    <p>A climate solution only helps cool the Earth if it removes far more heat than the energy it consumes.</p>
                    "
                mediaSrc="/image/scrience-and-reasearch/science-secF.jpg"
            />
        </>
    )
}

export default ScienceAndResearch