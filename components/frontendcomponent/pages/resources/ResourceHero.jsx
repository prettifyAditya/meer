import Motion from "../../molecules/Motion";

const ResourceHero = () => {
  return (
    <section className="resourceHero">
      <div className="container">
        <Motion variant="fadeUp">
          <h2>Resources</h2>
          <p>
            You can learn more about MEER by watching our MEERTALKS and through
            our other media content.
          </p>
        </Motion>
      </div>
    </section>
  );
};

export default ResourceHero;
