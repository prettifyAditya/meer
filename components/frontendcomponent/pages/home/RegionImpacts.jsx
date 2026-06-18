"use client";
import Image from "next/image";
import { useState } from "react";
import MapFilter from "../../atoms/MapFilter";
import ProjectsMap from "../../molecules/ProjectsMap";
import Motion from "../../molecules/Motion";

const RegionImpacts = () => {
  const [activeRegion, setActiveRegion] = useState(0);
  const [projectStatus, setProjectStatus] = useState("");
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="regionImpacts">
      <div className="container">
        <Motion variant="fadeUp">
          <div className="heading">
            <h6>Impact Across Regions</h6>
            <h2>MEER Global Projects</h2>
          </div>
        </Motion>
        <Motion variant="fadeUp">
          <div className="content">
            <div className="left">
              <div className="upper">
                <h4>Search Projects</h4>
                <div className="map-filter">
                  <MapFilter
                    type="country"
                    data={data.map(({ country }) => country)}
                    state={projectStatus}
                    setState={setProjectStatus}
                  />
                  <MapFilter
                    type="status"
                    data={["Ongoing", "Delivered"]}
                    state={projectStatus}
                    setState={setProjectStatus}
                  />
                </div>
              </div>
              <ul className="filter-content">
                {data[activeRegion].projects.map(
                  ({ projectName, role, focus }, i) => {
                    const isProjectActive = activeProject === i;
                    return (
                      <li
                        key={i}
                        className={isProjectActive ? "active" : ""}
                        onClick={() => setActiveProject(i)}
                      >
                        <div className="info">
                          <h5>{projectName}</h5>
                          <p>
                            <strong>Role:</strong> {role}
                          </p>
                          <p>
                            <strong>Focus:</strong> {focus}
                          </p>
                        </div>
                        <figure className="icon">
                          <Image
                            src="/icon/right-large-blue.svg"
                            alt="icon"
                            width={26}
                            height={11}
                          />
                        </figure>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>

            <div className="right">
              <ProjectsMap projects={data[0].projects} />
            </div>
          </div>
        </Motion>
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
        status: "ongoing",
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
        status: "delivered",
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
        status: "ongoing",
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
        coordinates: {
          lat: "",
          long: "",
        },
        status: "delivered",
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
        status: "delivered",
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
        coordinates: {
          lat: "",
          long: "",
        },
        status: "delivered",
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
        coordinates: {
          lat: "",
          long: "",
        },
        status: "delivered",
      },
    ],
  },
];
