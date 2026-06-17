import DonateHero from "./DonateHero";
import HeatRelief from "./HeatRelief";
import OurProgress from "./OurProgress";
import TypicalCost from "./TypicalCost";
import ExampleResearch from "./ExampleResearch";
import "@/uploads/styles/donate/donate.css";

export default function DonatePage() {
  return (
    <main>
      <DonateHero />
      <HeatRelief />
      <OurProgress />
      <TypicalCost />
      <ExampleResearch />
    </main>
  );
}
