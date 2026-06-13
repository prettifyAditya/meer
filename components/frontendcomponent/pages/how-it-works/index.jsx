import HeroSection from "../../molecules/HeroSection";
import "@/uploads/styles/how-it-works/how-works.css";
import InfoGraphic from "../../molecules/InfoGraphic";

export default function HowItWorksPage() {
  return (
    <main>
      <HeroSection
        classname="how_works_hero"
        mediaSrc="/image/how-works/how_banner.jpg"
        tagline="How It Works"
        heading="Surface Radiative Thermal Management (SRTM)"
      />
      <InfoGraphic
        classname="heat_surface"
        playBtn="/video/about-banner.mp4"
        heading="The Problem: Heat Is Accumulating at the Surface"
        desc="<p>The Earth is warming faster than at any point in human history. While reducing greenhouse gas emissions is essential, it does not remove the large amount of heat already stored in the climate system.</p><p>Much of this heat enters the atmosphere <strong>from the ground up.</strong></p><p>Dark roofs, paved surfaces, bare soil, and overheated buildings absorb sunlight during the day and release that energy back into the air as heat. This process raises air temperatures, increases humidity, and intensifies heatwaves — especially in cities and vulnerable communities.</p><p>Surface Radiative Thermal Management addresses this problem at its source: <strong>the land surface itself.</strong></p>"
        mediaSrc="/image/how-works/heat_surface.jpg"
      />
      <InfoGraphic
        classname="surface_radiative"
        heading="What Is Surface Radiative Thermal Management?"
        desc="<p>Surface Radiative Thermal Management (SRTM) is a science-based approach to cooling that changes how surfaces interact with sunlight and heat.</p><p>Instead of trying to cool the air directly, SRTM focuses on cooling the surfaces that heat the air in the first place — roofs, ground surfaces, shade structures, roads, and other exposed areas.</p><p>By altering how these surfaces absorb, reflect, and release energy, SRTM reduces heat where it is first felt — just above the surface — lowering temperatures around homes, streets, parks, and workplaces, and reducing the amount of heat that then travels upward into the atmosphere.</p>"
        mediaSrc="/image/how-works/surface_radiative.jpg"
      />
    </main>
  );
}
