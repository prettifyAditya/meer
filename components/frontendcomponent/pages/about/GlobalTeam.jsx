import Button from "../../atoms/Button";
import Motion from "../../molecules/Motion";
import TabContainer from "../../organisms/TabContainer";

export default function GlobalTeam() {
  return (
    <div className="global_team sec-pad-all">
      <div className="container">
        <Motion variant="fadeUp">
          <div className="heading">
            <h2>Meet Our Global Team</h2>
            <p>
              MEER spans an international network of scientists, engineers,
              project managers, volunteers, students and supporters. Energized
              and motivated, our network aims to be a leader in climate
              mitigation and adaptation development.
            </p>
          </div>
        </Motion>
        <TabContainer
          className="about_team"
          card="team"
          data={globalTeamData}
          swiperType="grid"
        />
        <div className="btn_wrap">
          <Button href="/science-and-research">Work with us</Button>
          <Button href="/science-and-research">Work with us</Button>
        </div>
      </div>
    </div>
  );
}

const globalTeamData = [
  {
    category: "Our Team",
    list: [
      {
        id: 1,
        imgSrc: "/image/other/team1.jpg",
        name: "Dr. Gregory Czap",
        role: "Research Associate (USA)",
      },
      {
        id: 2,
        imgSrc: "/image/other/team2.jpg",
        name: "Dr. Gregory Czap",
        role: "Education Coordinator (UK)",
      },
      {
        id: 3,
        imgSrc: "/image/other/team3.jpg",
        name: "Simon de Wrangel",
        role: "Architect (Belgium)",
      },
      {
        id: 4,
        imgSrc: "/image/other/team4.jpg",
        name: "Dominic Ashmole",
        role: "Administrative Assistant (UK)",
      },
      {
        id: 5,
        imgSrc: "/image/other/team5.jpg",
        name: "Kate Hill",
        role: "Donor Stewardship Officer (UK)",
      },
      {
        id: 6,
        imgSrc: "/image/other/team6.jpg",
        name: "Erik Schreiner",
        role: "Research Assistant (USA)",
      },
      {
        id: 7,
        imgSrc: "/image/other/team7.jpg",
        name: "Samiksha Gotephode",
        role: "Project Officer (India)",
      },
      {
        id: 8,
        imgSrc: "/image/other/team8.jpg",
        name: "Mark Milne",
        role: "Projects Officer (Switzerland)",
      },
    ],
  },
  {
    category: "Our Directors",
    list: [
      {
        id: 1,
        imgSrc: "/image/other/team1.jpg",
        name: "Dr. Gregory Czap",
        role: "Research Associate (USA)",
      },
      {
        id: 2,
        imgSrc: "/image/other/team2.jpg",
        name: "Dr. Gregory Czap",
        role: "Education Coordinator (UK)",
      },
      {
        id: 3,
        imgSrc: "/image/other/team3.jpg",
        name: "Simon de Wrangel",
        role: "Architect (Belgium)",
      },
      {
        id: 4,
        imgSrc: "/image/other/team4.jpg",
        name: "Dominic Ashmole",
        role: "Administrative Assistant (UK)",
      },
      {
        id: 5,
        imgSrc: "/image/other/team5.jpg",
        name: "Kate Hill",
        role: "Donor Stewardship Officer (UK)",
      },
      {
        id: 6,
        imgSrc: "/image/other/team6.jpg",
        name: "Erik Schreiner",
        role: "Research Assistant (USA)",
      },
    ],
  },
  {
    category: "Our Collaborators",
    list: [
      {
        id: 1,
        imgSrc: "/image/other/team1.jpg",
        name: "Dr. Gregory Czap",
        role: "Research Associate (USA)",
      },
      {
        id: 2,
        imgSrc: "/image/other/team2.jpg",
        name: "Dr. Gregory Czap",
        role: "Education Coordinator (UK)",
      },
      {
        id: 3,
        imgSrc: "/image/other/team3.jpg",
        name: "Simon de Wrangel",
        role: "Architect (Belgium)",
      },
      {
        id: 4,
        imgSrc: "/image/other/team4.jpg",
        name: "Dominic Ashmole",
        role: "Administrative Assistant (UK)",
      },
    ],
  },
  {
    category: "Alumini",
    list: [
      {
        id: 1,
        imgSrc: "/image/other/team1.jpg",
        name: "Dr. Gregory Czap",
        role: "Research Associate (USA)",
      },
      {
        id: 2,
        imgSrc: "/image/other/team2.jpg",
        name: "Dr. Gregory Czap",
        role: "Education Coordinator (UK)",
      },
      {
        id: 3,
        imgSrc: "/image/other/team3.jpg",
        name: "Simon de Wrangel",
        role: "Architect (Belgium)",
      },
      {
        id: 4,
        imgSrc: "/image/other/team4.jpg",
        name: "Dominic Ashmole",
        role: "Administrative Assistant (UK)",
      },
      {
        id: 5,
        imgSrc: "/image/other/team5.jpg",
        name: "Kate Hill",
        role: "Donor Stewardship Officer (UK)",
      },
      {
        id: 6,
        imgSrc: "/image/other/team6.jpg",
        name: "Erik Schreiner",
        role: "Research Assistant (USA)",
      },
      {
        id: 7,
        imgSrc: "/image/other/team7.jpg",
        name: "Samiksha Gotephode",
        role: "Project Officer (India)",
      },
    ],
  },
];
