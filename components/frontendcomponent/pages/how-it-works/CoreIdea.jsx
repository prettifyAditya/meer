import InfoGraphic from "../../molecules/InfoGraphic";

export default function CoreIdea() {
  return (
    <section>
      <div className="core_idea_sec sec-pad-all">
        <div className="container">
          <div className="heading main-head">
            <h2>The Core Idea</h2>
          </div>
          <InfoGraphic
            classname="core_idea"
            heading="Cooler surfaces create cooler air - starting where people live."
            desc="<h6>When surfaces stay cooler:
</h6><ul>
<li><strong>Less heat is absorbed and re-released into the air just above the surface</strong>, directly cooling the spaces around homes, roads, parks, markets, and shaded areas where people and animals spend time.</li><li><strong>Less heat continues to travel upward into the atmosphere</strong>, helping to reduce heat build-up at a regional scale and, when deployed widely, contributing to lower overall global temperatures as well.</li></ul><p>This simple principle underpins all of MEER’s work: cool the surface first, cool the surrounding air next, and reduce the heat that accumulates higher in the climate system.</p>"
            mediaSrc="/image/how-works/core-img.jpg"
          />
        </div>
      </div>
    </section>
  );
}
