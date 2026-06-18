"use client";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SlideBtn from "../atoms/SlideBtn";
import ResourceCard from "../molecules/ResourceCard";
import TabRow from "../molecules/TabRow";
import TeamCol from "../molecules/TeamCol";
import "swiper/css/grid";
import "@/uploads/styles/component/component.css";
import Motion from "../molecules/Motion";

const TabContainer = ({ data, card, swiperType }) => {
  const gridProps =
    swiperType === "grid" ? { grid: { rows: 2, fill: "row" } } : {};
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab-container">
      <Motion variant="fadeUp">
        <TabRow data={data} activeTab={activeTab} setActiveTab={setActiveTab}>
          <div className="swiper-nav group primary-border square">
            <SlideBtn className={`resource-button-prev-${activeTab}`} />
            <SlideBtn className={`resource-button-next-${activeTab}`} />
          </div>
        </TabRow>
      </Motion>

      {data?.map(({ category, list }, idx) => {
        const isActive = activeTab === idx;
        return (
          <div key={idx} className={`content ${isActive ? "active" : ""}`}>
            <Motion variant="fadeUp">
              <Swiper
                navigation={{
                  nextEl: `.resource-button-next-${idx}`,
                  prevEl: `.resource-button-prev-${idx}`,
                }}
                modules={[Navigation, Grid]}
                slidesPerView={4}
                spaceBetween={20}
                {...gridProps}
              >
                {list.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      {card === "resource" ? (
                        <ResourceCard category={category} {...item} />
                      ) : card === "team" ? (
                        <TeamCol data={item} />
                      ) : (
                        ""
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Motion>
          </div>
        );
      })}
    </div>
  );
};

export default TabContainer;
