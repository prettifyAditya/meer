import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SlideBtn from "../atoms/SlideBtn";
import ResourceCard from "../molecules/ResourceCard";
import "@/uploads/styles/component/component.css";
import TabRow from "../molecules/TabRow";

const TabContainer = ({ data, card }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab-container">
      
      <TabRow data={data} activeTab={activeTab} setActiveTab={setActiveTab}>
        <div className="swiper-nav group primary-border square">
          <SlideBtn className={`resource-button-prev-${activeTab}`} />
          <SlideBtn className={`resource-button-next-${activeTab}`} />
        </div>
      </TabRow>

      {data?.map(({ category, list }, idx) => {
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
