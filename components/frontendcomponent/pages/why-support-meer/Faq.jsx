import React from 'react'
import Button from '../../atoms/Button'
import Accordion from '../../molecules/Accordion'

const Faq = () => {
    return (
        <section>
            <div className="wsm-secG sec-pad-all">
                <div className="container">
                    <div className="flex-box">
                        <div className="col">
                            <h2>Frequently Asked Questions</h2>
                            <Button variant="btn-primary">Global Cooling and Climate Relevance</Button>
                        </div>
                        <div className="col">
                            <Accordion
                                data={AccordianData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq


const AccordianData = [
    {
        mainTitle: "Is this geoengineering?",
        paragraph: `
                <p>The term “geoengineering” is typically used to describe deliberate interventions in the Earth system at planetary scale — such as stratospheric aerosol injection or space-based solar shields.</p>
                <p>MEER’s work is different in both scale and approach. </p>
                <p>We focus on surface-based thermal and radiative management: increasing reflectivity and enhancing heat emission at the ground level — on rooftops, canopies, agricultural systems, and infrastructure. These interventions are local, modular, and reversible. They do not alter atmospheric chemistry or operate at planetary altitude. </p>
                <p>At present, MEER’s research operates at building and community scale. The long-term vision is to expand proven local systems to regional networks where appropriate. Scaling, if it occurs, would happen through distributed surface deployment — not through a single global intervention. In short: this is applied surface physics, not planetary atmospheric manipulation.</p>
                `
    },
    {
        mainTitle: "Does this work everywhere?",
        paragraph: `
                <p>Albedo enhancement works wherever significant sunlight reaches the surface.</p>
                <p>Reflective and radiative cooling systems are most effective in high-solar, heat-vulnerable environments — urban heat islands, drylands, tropical regions, and exposed agricultural zones. Performance depends on local climate, cloud cover, humidity, and surface conditions.</p>
                <p>Because these systems are modular, they can be adapted to different environments. However, materials and installation strategies must be tailored to local conditions (e.g., coastal salt air, arid dust exposure, heavy rainfall regions). That is why climate-specific durability testing is central to our research.</p>
                `
    },
    {
        mainTitle: "Does this replace emissions reductions?",
        paragraph: `
            <p>No.</p>
            <p>Rapid reductions in greenhouse gas emissions and the transition away from fossil fuels are essential. Decarbonisation addresses the cause of long-term warming.</p>
            <p>Surface reflectivity and radiative cooling address heat absorption directly. They can reduce temperatures immediately at the community level and contribute incrementally to restoring energy balance.</p>
            <p>These are complementary strategies. Emissions reduction slows future warming. Surface thermal management reduces present heat exposure and energy absorption.
            Both are necessary.</p>
        `
    },
    {
        mainTitle: "Why can’t planting trees be the primary global solution?",
        paragraph: `
                <p>Protecting existing forests — particularly tropical rainforests such as the Amazon — is absolutely critical. Forests regulate regional climate, store vast amounts of carbon, and influence atmospheric circulation. Emerging research on “biotic pumps” suggests large forest systems may also contribute to cloud formation and moisture recycling, potentially affecting albedo and rainfall patterns over land and oceans. Conservation of intact ecosystems is therefore non-negotiable.</p>
<p>However, large-scale tree planting alone cannot resolve the climate crisis within the time frame required.</p>
<p>First, speed matters. Newly planted forests take decades to mature and accumulate significant carbon. The climate system is warming now. Even optimistic reforestation scenarios cannot reduce atmospheric carbon concentrations quickly enough to counter near-term warming trends.</p>
<p>Second, albedo effects are complex. In some regions — particularly drylands or lighter-coloured landscapes — replacing higher-albedo ground with darker forest canopy can actually lower surface reflectivity and increase local heat absorption. The net climate effect depends heavily on geography, baseline land cover, and scale.</p>
<p>Third, scalability is constrained. Reforestation at the magnitude required would demand enormous land areas, careful ecological planning, and long-term protection. It cannot simply be deployed everywhere without trade-offs in food production, biodiversity, or water systems.
For these reasons, we see forest conservation as essential — but not sufficient.
</p>
<p>Climate stabilisation requires a portfolio of interventions: protecting existing forests, reducing emissions, improving land management, and directly addressing Earth’s energy imbalance. Reflective and radiative cooling strategies operate on a different but complementary principle: they reduce heat absorption immediately, without waiting decades for biological growth cycles.</p>
<p>This is not a choice between trees and technology. It is about matching solutions to physics, timescale, and scale. We strongly support the conservation of existing forests and responsible reforestation. At the same time, additional tools are needed to reduce heat exposure and restore energy balance within the critical window available to us.</p>
        `
    }
];