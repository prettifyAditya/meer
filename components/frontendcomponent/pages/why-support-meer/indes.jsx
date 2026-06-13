import React from 'react'
import HeroSection from '../../molecules/HeroSection'
import "@/uploads/styles/why-support-meer/whysupportmeer.css"
import InfoGraphic from '../../molecules/InfoGraphic'
import HowYourSupport from './HowYourSupport'
import DonateOnline from './DonateOnline'
import BuildCooler from './BuildCooler'
import Faq from './Faq'

const WhySupportMeerPage = () => {
    return (
        <>
            <HeroSection
                classname="wsm-banner"
                mediaSrc="/image/why-suppor-meer/why-support-meer-banner.jpg"
                tagline="Action with Integrity"
                heading="Support Practical Cooling for a Hotter World"
            />
            <InfoGraphic
                classname="wsm-secA"
                playBtn="/video/about-banner.mp4"
                heading="Why Support MEER"
                desc="
                    <p>Extreme heat is already reshaping health, livelihoods, and ecosystems across the world. While emissions reduction remains essential, it does not remove the heat already stored in the climate system.</p>
                    <p>MEER exists to address this challenge through surface-based cooling, climate adaptation, and open scientific collaboration. Our work focuses on practical, ground-level interventions that reduce heat where people live, work, and farm while building evidence for broader climate impact.</p>
                    <p>Support from donors allows MEER to remain independent, evidence-driven, and focused on public benefit.</p>"
                mediaSrc="/image/why-suppor-meer/secA.png"
            />
            <InfoGraphic
                classname="wsm-secB"
                heading="MEER Funding Policy"
                desc="
                    <p>MEER is a nonprofit organization dedicated to addressing the global heat crisis through surface-based cooling, climate adaptation, and open scientific collaboration.</p>
                    <p>We welcome support from individuals, foundations, institutions, and companies that share this commitment.</p>
                    <p>We do not accept funding from fossil fuel corporations or from any entity seeking to influence our research, operations, governance, or public communications.</p>
                    <p>All contributions are received with the clear understanding that:</p>
                    <ul>
                        <li><strong>Funding does not influence MEER’s research, decisions, or public statements.</strong> MEER retains full scientific and organisational independence.</li>
                        <li><strong>Funds are used transparently</strong> and accountably and directed toward the public benefit.</li>
                        <li><strong>Every grant or donation supports open science, community-based innovation, and measurable environmental improvement.</strong></li>
                    </ul>
                    <p>This funding philosophy is central to MEER’s credibility and long-term impact.</p>"
                mediaSrc="/image/why-suppor-meer/secB.png"
            />

            <HowYourSupport />
            <DonateOnline />

            <InfoGraphic
                classname="wsm-secE"
                heading="Fiscal Sponsorship & Tax Status"
                desc="
                    <p>MEER is fiscally sponsored by Social & Environmental Entrepreneurs (SEE), a California-based nonprofit organisation.</p>
                    <ul>
                        <li>SEE EIN: <strong>95-4116679</strong></li>
                        <li>SEE is audited annually, and its accounts are published for full transparency.</li>
                        <li>Donations made to SEE on behalf of MEER are deposited directly into MEER’s designated account.</li>
                    </ul>
                    <p>This funding philosophy is central to MEER’s credibility and long-term impact.</p>"
                mediaSrc="/image/why-suppor-meer/secE.png"
            />
            <BuildCooler />
            <Faq />

        </>
    )
}

export default WhySupportMeerPage