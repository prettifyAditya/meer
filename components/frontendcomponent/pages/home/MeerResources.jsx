"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ResourceCard from "../../molecules/ResourceCard";
import "@/uploads/styles/component/component.css";

const MeerResources = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const visibleCategory = activeTab === 0 ? data : [data[activeTab - 1]];

  console.log(visibleCategory)

  return (
    <section className="meerResource">
      <div className="container">
        <div className="heading">
          <h2>MEER Resource</h2>
        </div>

        <div className="row">
          <ul className="tabs">
            {[{ category: "All" }, ...data]?.map(({ category }, i) => {
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
        </div>

        {visibleCategory.map(({ category, list }, idx) => {
          const isActive = idx === activeTab;
          return (
            <div key={idx} className={`content ${isActive ? "active" : ""}`}>
              <Swiper slidesPerView={4} spaceBetween={20}>
                {list.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <ResourceCard category={category} {...item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MeerResources;
