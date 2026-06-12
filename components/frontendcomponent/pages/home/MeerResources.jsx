"use client";
const MeerResources = ({ data }) => {
  return (
    <section className="meerResource">
      <div className="container">
        <div className="heading">
          <h2>MEER Resource</h2>
        </div>

        <div className="row">
          <ul className="tabs">
            {data?.map(({ category }, i) => {
              return (
                <li key={i} className="tab">
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MeerResources;
