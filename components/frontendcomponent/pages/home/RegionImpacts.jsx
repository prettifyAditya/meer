"use client";

import { useState } from "react";

const RegionImpacts = () => {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="regionImpacts">
      <div className="container">
        <div className="heading">
          <h6>Impact Across Regions</h6>
          <h2>MEER Global Projects</h2>
        </div>

        <div className="content">
          <div className="left">
            <div className="upper">
              <h4>Search Projects</h4>
              <div className="map-filter"></div>
            </div>
            <ul className="filter-content">
              {data[activeRegion].projects.map(
                ({ projectName, role, focus }, i) => {
                  return (
                    <li key={i}>
                      <div className="info">
                        <h5>{projectName}</h5>
                        <p>
                          <strong>Role:</strong> {role}
                        </p>
                        <p>
                          <strong>Focus:</strong> {focus}
                        </p>
                      </div>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default RegionImpacts;

const data = [
  {
    country: "Sierra Leone",
    projects: [
      {
        projectName: "FAWE School Site – Freetown, Sierra Leone",
        role: "Historical Pilot Site",
        focus:
          "Rooftop reflector installation for educational and cooling demonstration",
        coordinates: {
          lat: 8.483833040218455,
          lng: -13.233723242889049,
        },
      },
      {
        projectName: "Kroo Bay Settlement – Freetown, Sierra Leone",
        role: "Ongoing Field Research Site",
        focus:
          "Passive rooftop cooling study, community survey on heat stress, and environmental monitoring",
        coordinates: {
          lat: 8.49169,
          lng: -13.24062,
        },
      },
      {
        projectName: "Beach Site – Freetown, Sierra Leone",
        role: "Experimental Trial Site",
        focus:
          "Marine-adjacent reflector testing; material durability under salt, wind, and humidity exposure",
        coordinates: {
          lat: 8.489519778033253,
          lng: -13.290272987751994,
        },
      },
    ],
  },
  {
    country: "Tanzania",
    projects: [
      {
        projectName: "Kijichi Secondary School Site – Dar es Salaam, Tanzania",
        role: "Preliminary Assessment Site",
        focus: "Roof-structure evaluation for MEER installations",
        coordinates: "https://maps.app.goo.gl/9ZdLq9LN5QYSDEVi6",
      },
    ],
  },
  {
    country: "India",
    projects: [
      {
        projectName: "Pune Site – Maharashtra, India",
        role: "Experimental Demonstration Site",
        focus:
          "Rooftop reflector installation and monitoring for urban cooling performance assessment",
        coordinates: {
          lat: 18.511086,
          lng: 73.822747,
        },
      },
    ],
  },
  {
    country: "United States",
    projects: [
      {
        projectName: "California Rooftop Experiment",
        role: "Historical Pilot Site",
        focus: "Early rooftop reflector testing under real-world conditions",
        location: "225 Vera Ave, Redwood City, CA 94061",
      },
    ],
  },
  {
    country: "China",
    projects: [
      {
        projectName: "Beijing",
        role: "Material Science Testing Site",
        focus: "PDRC paint development",
        location: "Beijing, China",
      },
    ],
  },
];
