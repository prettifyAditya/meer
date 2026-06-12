import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SlideBtn from "../atoms/SlideBtn";
import ResourceCard from "../molecules/ResourceCard";

const TabContainer = ({ data, card }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container tab-container">
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

        <div className="swiper-nav group primary-border square">
          <SlideBtn className={`resource-button-prev-${activeTab}`} />
          <SlideBtn className={`resource-button-next-${activeTab}`} />
        </div>
      </div>

      {[
        {
          category: "All",
          list: data.flatMap(({ list }) => {
            return list;
          }),
        },
        ...data,
      ]?.map(({ category, list }, idx) => {
        const isActive = activeTab === idx;
        return (
          <div key={idx} className={`content ${isActive ? "active" : ""}`}>
            <Swiper
              navigation={{
                nextEl: `.resource-button-next-${idx}`,
                prevEl: `.resource-button-prev-${idx}`,
              }}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={20}
            >
              {list.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    {card === "resource" ? (
                      <ResourceCard category={category} {...item} />
                    ) : (
                      ""
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
};

export default TabContainer;
