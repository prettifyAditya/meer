"use client";
import { useState } from "react";
import Button from "../../atoms/Button";

export default function CurrentOpening() {
  const [isActive, setIsActive] = useState(null);
  return (
    <section>
      <div className="current_openings sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="heading">
              <h2>Current Openings</h2>
            </div>
            <div className="openings_wrapper">
              {openingData.map((item) => (
                <div className="opening_item" key={item.id}>
                  <div
                    className="opening_title"
                    onClick={() =>
                      setIsActive((prev) => (prev === item.id ? null : item.id))
                    }
                  >
                    <div className="opening_left">
                      <div className="location">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#004d99"
                            fillRule="evenodd"
                            d="m12.065 21.243l-.006-.005zm.182-.274a29 29 0 0 0 3.183-3.392c2.04-2.563 3.281-5.09 3.365-7.337a6.8 6.8 0 1 0-13.591 0c.085 2.247 1.327 4.774 3.366 7.337a29 29 0 0 0 3.183 3.392q.166.15.247.218zm-.985 1.165S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 12.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                          ></path>
                        </svg>
                        <p>{item.location}</p>
                      </div>
                      <h4 className="job_title">{item.role}</h4>
                      <ul className="role_info">
                        {item.roleInfo.map((role, index) => (
                          <li key={index}>{role}</li>
                        ))}
                      </ul>
                    </div>
                    <Button>Apply Now</Button>
                    <div
                      className={`icon ${isActive === item.id ? "rotate" : ""}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#004d99"
                          d="M831.9 340.9L512 652.7L192.1 340.9a30.6 30.6 0 0 0-42.7 0a29 29 0 0 0 0 41.6l340.3 331.7a32 32 0 0 0 44.6 0l340.3-331.7a29 29 0 0 0 0-41.7a30.6 30.6 0 0 0-42.7 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`opening_details ${isActive === item.id ? "active" : ""}`}
                  >
                    <div
                      className="job_desc website-content"
                      dangerouslySetInnerHTML={{ __html: item.openingDetails }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const openingData = [
  {
    id: 1,
    location: "Remote",
    role: "Executive Director",
    roleInfo: ["Full Time", "Administration", "Executive"],
    openingDetails:
      "<h2>Objective of this role</h2><p>MEER is pioneering globally scalable, surface-based cooling technologies to address one of the defining challenges of our time: extreme heat. Rooted in rigorous science, field-tested engineering, and deep commitment to climate justice, MEER works to reduce heat stress, rebalance Earth's energy system, and expand planetary resilience. We combine open science, local empowerment, and global deployment to advance safe, equitable, and effective cooling solutions at scale.</p><p>We are entering a period of rapid growth—expanding global field pilots, building a world-class scientific and engineering team, deepening community partnerships, and standing up the systems needed for a global nonprofit enterprise. MEER seeks an exceptional ED to lead this next chapter.</p><h2>Position Summary</h2><p>The ED is MEER's senior operational and administrative leader, responsible for ensuring that the organization has the systems, governance, financial infrastructure, and fundraising leadership needed to scale its mission worldwide. The ED will work closely with the Founder and Managing Director, staff and volunteers, global collaborators, and the Board to build a mission-driven, operationally excellent organization capable of global impact. The ED will also take a hands-on leadership role with the Advisory Chair and others to pursue a successful fundraising effort.</p><p>This role blends organizational leadership, financial and administrative oversight, fundraising, communications coordination, and board governance—all in service of MEER's scientific and climate-justice mission. The ED will translate MEER's scientific mission into an operationally excellent, globally trusted, well-funded organization that can deliver measurable climate cooling benefits at scale.</p><h2>Job Responsibilities</h2><h3>Fundraising and Communications (50%)</h3><p>The ED helps build the organizational backbone for MEER's fundraising and communications related to fundraising, serving as a strategic partner to the Board, volunteers, and senior leadership. Responsibilities include:</p><ul><li>Setting the direction for and actively leading the development and execution of MEER's fundraising strategies, including grants, individual giving, major donor cultivation, and appeals to high-net-worth donors.</li><li>Participating in and preparing materials for presentations to major donors and donor groups.</li><li>Supporting online appeals, donor acknowledgments, campaign updates, and other outbound communications.</li><li>Helping refine MEER's case for support, messaging frameworks, decks, and narratives to align with scientific integrity and donor expectations.</li><li>Oversee and align brand, message, and mission coherence across websites, newsletters, donor communications, media assets, and other public-facing materials, in collaboration with external communications team.</li><li>Supporting and participating in travel, presentations, and relationship-building at climate conferences and scientific gatherings.</li></ul><h3>Board Relations and Governance (25%)</h3><p>The ED is a central partner to the Board and helps ensure strong, transparent, and effective governance. Responsibilities include:</p><ul><li>Collaborating with the Board to develop and implement governance policies and practices.</li><li>Maintaining transparent, proactive communication with the Board regarding strategic plan implementation, financial health, risk, and resource needs.</li><li>Preparing timely updates, written reports, dashboards, and strategic recommendations to the Board and relevant committees.</li><li>Supporting Board recruitment, onboarding, training, and ongoing engagement.</li></ul><h3>Administration and Financial Management (25%)</h3><p>The ED provides administrative oversight for two U.S.-based full-time staff members and ensures smooth, compliant operations across a growing global organization. Responsibilities include:</p><ul><li>Oversee budgeting, forecasting, and financial reporting.</li><li>Ensuring MEER's legal and administrative infrastructure supports cross-border operations, multi-partner collaborations, and global deployment of climate adaptation projects.</li><li>Managing compliance with all legal and regulatory requirements in partnership with the Board and external experts.</li></ul><h2>Skills and Qualifications</h2><ul><li>Resourceful and proactive leader with proven experience in the nonprofit sector.</li><li>Strong organizational and operational management skills, with the ability to manage multiple priorities while driving towards tangible results.</li><li>Deep understanding of nonprofit financial management, budgeting, compliance, and governance.</li><li>Demonstrated fundraising experience, including securing and administering major grants and significant individual gifts; familiarity with platforms like Givebutter.</li><li>Excellent communication, relationship-building, and donor-facing skills.</li><li>Familiarity with remote work tools and virtual team management; comfort working across time zones.</li><li>Knowledge of climate change and a strong commitment to addressing its causes and mitigating its impacts.</li><li>Commitment to diversity, equity, inclusion, and community empowerment.</li><li>Experience managing cross-border operations or multi-country collaborations.</li><li>Background working with scientists, engineers, and technical advisors.</li><li>Bonus for knowledge of reflective and radiative cooling technologies (MEER can train the right candidate).</li></ul><h2>Location</h2><p>We are a remote team, with colleagues and leadership located across multiple time zones and larger team hubs in Sierra Leone and India. While we have a slight preference for ED candidates located in the U.S., this role is fully remote and open to candidates worldwide.</p><h2>Compensation</h2><p>This is a regular, full-time position with an annual salary range of $120,000–$150,000, depending on experience. We are committed to providing competitive compensation and benefits.</p><h2>How to Apply</h2><p>Please send your resume, a brief cover letter detailing your interest and relevant experience, and three references to <a href=\"mailto:careers@meer.org\">careers@meer.org</a> with the subject line: <strong>ED Application – [Your Name]</strong>. Applications will be reviewed on a rolling basis until the position is filled.</p>",
  },
  {
    id: 2,
    location: "Yunnan Province (Southwest China)",
    role: "Lead Scientist-China Research Program",
    roleInfo: ["Full Time", "Administration", "Executive"],
    openingDetails:
      "<h2>Objective of this role</h2><p>MEER is pioneering globally scalable, surface-based cooling technologies to address one of the defining challenges of our time: extreme heat. Rooted in rigorous science, field-tested engineering, and deep commitment to climate justice, MEER works to reduce heat stress, rebalance Earth's energy system, and expand planetary resilience. We combine open science, local empowerment, and global deployment to advance safe, equitable, and effective cooling solutions at scale.</p><p>We are entering a period of rapid growth—expanding global field pilots, building a world-class scientific and engineering team, deepening community partnerships, and standing up the systems needed for a global nonprofit enterprise. MEER seeks an exceptional ED to lead this next chapter.</p><h2>Position Summary</h2><p>The ED is MEER's senior operational and administrative leader, responsible for ensuring that the organization has the systems, governance, financial infrastructure, and fundraising leadership needed to scale its mission worldwide. The ED will work closely with the Founder and Managing Director, staff and volunteers, global collaborators, and the Board to build a mission-driven, operationally excellent organization capable of global impact. The ED will also take a hands-on leadership role with the Advisory Chair and others to pursue a successful fundraising effort.</p><p>This role blends organizational leadership, financial and administrative oversight, fundraising, communications coordination, and board governance—all in service of MEER's scientific and climate-justice mission. The ED will translate MEER's scientific mission into an operationally excellent, globally trusted, well-funded organization that can deliver measurable climate cooling benefits at scale.</p><h2>Job Responsibilities</h2><h3>Fundraising and Communications (50%)</h3><p>The ED helps build the organizational backbone for MEER's fundraising and communications related to fundraising, serving as a strategic partner to the Board, volunteers, and senior leadership. Responsibilities include:</p><ul><li>Setting the direction for and actively leading the development and execution of MEER's fundraising strategies, including grants, individual giving, major donor cultivation, and appeals to high-net-worth donors.</li><li>Participating in and preparing materials for presentations to major donors and donor groups.</li><li>Supporting online appeals, donor acknowledgments, campaign updates, and other outbound communications.</li><li>Helping refine MEER's case for support, messaging frameworks, decks, and narratives to align with scientific integrity and donor expectations.</li><li>Oversee and align brand, message, and mission coherence across websites, newsletters, donor communications, media assets, and other public-facing materials, in collaboration with external communications team.</li><li>Supporting and participating in travel, presentations, and relationship-building at climate conferences and scientific gatherings.</li></ul><h3>Board Relations and Governance (25%)</h3><p>The ED is a central partner to the Board and helps ensure strong, transparent, and effective governance. Responsibilities include:</p><ul><li>Collaborating with the Board to develop and implement governance policies and practices.</li><li>Maintaining transparent, proactive communication with the Board regarding strategic plan implementation, financial health, risk, and resource needs.</li><li>Preparing timely updates, written reports, dashboards, and strategic recommendations to the Board and relevant committees.</li><li>Supporting Board recruitment, onboarding, training, and ongoing engagement.</li></ul><h3>Administration and Financial Management (25%)</h3><p>The ED provides administrative oversight for two U.S.-based full-time staff members and ensures smooth, compliant operations across a growing global organization. Responsibilities include:</p><ul><li>Oversee budgeting, forecasting, and financial reporting.</li><li>Ensuring MEER's legal and administrative infrastructure supports cross-border operations, multi-partner collaborations, and global deployment of climate adaptation projects.</li><li>Managing compliance with all legal and regulatory requirements in partnership with the Board and external experts.</li></ul><h2>Skills and Qualifications</h2><ul><li>Resourceful and proactive leader with proven experience in the nonprofit sector.</li><li>Strong organizational and operational management skills, with the ability to manage multiple priorities while driving towards tangible results.</li><li>Deep understanding of nonprofit financial management, budgeting, compliance, and governance.</li><li>Demonstrated fundraising experience, including securing and administering major grants and significant individual gifts; familiarity with platforms like Givebutter.</li><li>Excellent communication, relationship-building, and donor-facing skills.</li><li>Familiarity with remote work tools and virtual team management; comfort working across time zones.</li><li>Knowledge of climate change and a strong commitment to addressing its causes and mitigating its impacts.</li><li>Commitment to diversity, equity, inclusion, and community empowerment.</li><li>Experience managing cross-border operations or multi-country collaborations.</li><li>Background working with scientists, engineers, and technical advisors.</li><li>Bonus for knowledge of reflective and radiative cooling technologies (MEER can train the right candidate).</li></ul><h2>Location</h2><p>We are a remote team, with colleagues and leadership located across multiple time zones and larger team hubs in Sierra Leone and India. While we have a slight preference for ED candidates located in the U.S., this role is fully remote and open to candidates worldwide.</p><h2>Compensation</h2><p>This is a regular, full-time position with an annual salary range of $120,000–$150,000, depending on experience. We are committed to providing competitive compensation and benefits.</p><h2>How to Apply</h2><p>Please send your resume, a brief cover letter detailing your interest and relevant experience, and three references to <a href=\"mailto:careers@meer.org\">careers@meer.org</a> with the subject line: <strong>ED Application – [Your Name]</strong>. Applications will be reviewed on a rolling basis until the position is filled.</p>",
  },
];
