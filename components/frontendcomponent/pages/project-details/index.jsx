import Button from "../../atoms/Button";
import HeroSection from "../../molecules/HeroSection";
import InfoGraphic from "../../molecules/InfoGraphic";
import MeerApproach from "./MeerApproach";
import Overview from "./Overview";
import "@/uploads/styles/project/project.css";

export default function ProjectDetailsPage() {
  return (
    <main>
      <HeroSection
        classname="project_hero"
        mediaSrc="/image/project/project_details_banner.jpg"
        tagline="Freetown, Sierra Leone"
        heading="Community cooling in one of West Africa’s hottest and most vulnerable neighborhoods."
      />
      <Overview />
      <section>
        <div className="challenges_sec sec-pad-all">
          <div className="container">
            <div className="heading">
              <h2>Challenges</h2>
            </div>
            <InfoGraphic
              classname="challenge_sec blue_arrow"
              heading="Extreme Heat in Freetown"
              desc="<p>Freetown stretches from the Atlantic coastline into steep hillsides, creating a dense urban landscape that traps heat and exposes residents to extreme temperatures year-round. Sierra Leone already ranks among the top three most climate-vulnerable countries in the world. In the dry season, temperatures frequently exceed 40°C (104°F), and even nighttime offers little relief — humidity often sits above 80%, with indoor air near 30°C (86 °F).</p><p>
For families living in informal settlements built from tin, tarpaulin, and scrap materials, these conditions are not just uncomfortable — they are life-threatening. Crowded homes, lack of ventilation, and limited access to cooling leave thousands at risk of heat-related illness.</p><h6>Why Freetown’s Informal Settlements Are So Vulnerable</h6><p>Freetown’s heat burden is shaped by three interlocking factors:</p><ul><li><strong>Dense, unplanned housing</strong> — roofs often touch, lanes are narrow, and airflow is restricted.</li><li><strong>Heat-absorbing materials</strong> — most structures use rusted corrugated tin that traps solar heat.</li><li><strong>Limited basic services</strong> — many households lack reliable water, electricity, and cooling access.</li></ul><p>About <strong>33% of Freetown’s population lives in 74 informal settlements</strong> like Kroo Bay and Crab Town — communities at the frontlines of heat stress, disaster risk, and climate impacts.</p>"
              mediaSrc="/image/project/challenge-img.jpg"
            />
          </div>
        </div>
      </section>
      <MeerApproach />
      <InfoGraphic
        classname="community_sec blue_arrow"
        heading="Community-Led Implementation"
        desc="<p>Kroo Bay was MEER’s first Freetown project site. Homes are arranged so tightly that almost all sunlight hits the roofs directly — meaning rooftop interventions can dramatically influence indoor temperatures.</p><p>
MEER’s team began by engaging residents, youth leaders, and vulnerable groups to understand the severity of heat stress in their daily lives. Children, elders, and people with medical conditions were often unable to remain indoors during the day. Many families described “sleeping outside” or feeling “cooked alive” in overheated rooms.</p><p>From the start, the Freetown project has been guided by a <strong>community-first model.</strong> Local residents are directly involved in:</p><ul><li><strong>Fabrication:</strong> Cutting, sealing, and clamping reflective panels</li><li><strong>Installation:</strong> Mounting and securing systems over homes and community structures.</li><li><strong>Maintenance:</strong> Training households to care for and repair their reflective roofs.</li><li><strong>Documentation:</strong> Gathering feedback and performance data.</li></ul><p>This inclusive approach has created <strong>employment opportunities</strong> for residents, including several <strong>disabled workers</strong> who now hold permanent roles in fabrication, outreach, and data collection.</p>"
        mediaSrc="/image/project/community-img.jpg"
        cta={<Button>Human Impact Stories</Button>}
        playBtn="/video/about-banner.mp4"
      />
    </main>
  );
}
