"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Overview", id: "overview" },
  { label: "Challenges", id: "challenges" },
  { label: "MEER's Approach", id: "meer-approach" },
  { label: "Success Stories", id: "success-stories" },
  { label: "Results & Impact", id: "results-impact" },
  { label: "Data & Monitoring", id: "data-monitoring" },
  { label: "Materials & Design", id: "materials-design" },
];

export default function ProjectNav() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 120; // Fixed header height + extra spacing
      const scrollPosition = window.scrollY + headerHeight;

      // Find the last section that has its top position less than or equal to the scroll position
      let activeSection = "overview";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top - 20) { // small buffer of 20px
            activeSection = item.id;
          }
        }
      }
      setActiveId(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // fixed header height + gap
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="project_nav">
      <div className="container">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeId === item.id ? "active" : ""}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
