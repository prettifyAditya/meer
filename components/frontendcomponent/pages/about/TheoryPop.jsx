"use client";
import Image from "next/image";
import { useModalStore } from "@/store/modalStore";

export default function TheoryPop() {
  const isTheoryPopOpen = useModalStore((state) => state.isTheoryPopOpen);
  const closeTheoryPop = useModalStore((state) => state.closeTheoryPop);
  return (
    <div className={`model theory-pop ${isTheoryPopOpen ? "is-open" : ""}`}>
      <button className="close" onClick={closeTheoryPop}>
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
      </button>
      <div className="model-body">
        <div className="theory_wrapper">
          <div className="icon">
            <Image
              src="/image/icon.svg"
              width={62}
              height={42}
              alt="Meer Logo"
            ></Image>
          </div>
          <h4>Early Deployments and System Evolution</h4>
          <div className="desc">
            <p>
              MEER’s early work focused primarily on reflective rooftop systems
              installed on homes and community buildings in high-heat
              environments. These deployments demonstrated that highly
              reflective surfaces could reduce heat absorption and lower indoor
              temperatures beneath treated roofs.
            </p>
            <p>
              Building on these early rooftop projects, MEER’s work is now
              evolving toward a broader surface cooling approach that includes:
            </p>
            <ul>
              <li>Modular reflective canopy systems</li>
              <li>Passive Daytime Radiative Cooling (PDRC) paint</li>
              <li>
                Cooling applications for public spaces, schools, agricultural
                infrastructure, and water-related systems
              </li>
            </ul>
            <p>
              This evolution reflects a shift from isolated rooftop
              interventions toward wider-area surface cooling strategies
              designed to protect people, infrastructure, food systems, and
              urban environments from extreme heat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
