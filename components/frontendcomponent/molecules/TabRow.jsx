"use client";
import "@/uploads/styles/component/component.css";

const TabRow = ({ children, data, activeTab, setActiveTab, className }) => {
  return (
    <div className={`row tab-row ${className}`}>
      <ul className="tabs">
        {data?.map(({ category }, i) => {
          const isActive = activeTab === i;
          return (
            <li
              onClick={() => setActiveTab(i)}
              key={i}
              className={`tab ${isActive ? "active" : ""}`}
            >
              {category}
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default TabRow;
