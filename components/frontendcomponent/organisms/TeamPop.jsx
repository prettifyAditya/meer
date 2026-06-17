"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import "@/uploads/styles/component/component.css";
import CloseModal from "../atoms/CloseModal";

export default function TeamPop() {
  const { isModal } = useSelector((state) => state.modal);

  return (
    <div className={`model team-pop ${isModal === "team" ? "is-open" : ""}`}>
      {/* <button className="close" onClick={closeTeamPop}>
        Close
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button> */}
      <CloseModal />
      <div className="model-body">
        <div className="team_wrapper">
          <figure>
            <Image
              src="/image/other/team1.jpg"
              width={342}
              height={342}
              alt="Team Image"
            ></Image>
            <div className="social_icon">
              <a href="javascript:;" target="_blank" className="socialLinks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                  ></path>
                </svg>
              </a>
              <a href="javascript:;" target="_blank" className="socialLinks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                  />
                </svg>
              </a>
            </div>
          </figure>
          <figcaption>
            <div className="heading">
              <h6>Dr. Gregory Czap</h6>
              <p>Research Associate (USA)</p>
            </div>
            <div className="team_details">
              <p>
                Greg volunteers with MEER to assist with technical and
                scientific research questions. A lifelong California resident,
                Greg received his bachelor’s in physics at the University of
                California, Davis. He went on to pursue graduate studies at
                University of California, Irvine where he further developed his
                teaching, scientific and instrumentation skills. He received his
                doctorate in chemical and materials physics in 2018. Today he
                works as a researcher studying the physics and chemistry of
                individual atoms and molecules on surfaces, particularly their
                magnetic properties with a long-term goal of learning to build
                devices at the atomic scale. In his spare time, he enjoys
                gardening, running, and volunteering to help clean up creeks.
              </p>
              <p>
                Greg volunteers with MEER to assist with technical and
                scientific research questions. A lifelong California resident,
                Greg received his bachelor’s in physics at the University of
                California, Davis. He went on to pursue graduate studies at
                University of California, Irvine where he further developed his
                teaching, scientific and instrumentation skills. He received his
                doctorate in chemical and materials physics in 2018. Today he
                works as a researcher studying the physics and chemistry of
                individual atoms and molecules on surfaces, particularly their
                magnetic properties with a long-term goal of learning to build
                devices at the atomic scale. In his spare time, he enjoys
                gardening, running, and volunteering to help clean up creeks.
              </p>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
