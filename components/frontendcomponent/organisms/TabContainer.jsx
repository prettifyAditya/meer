"use client";
import React from "react";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { useModalStore } from "@/store/modalStore";
import SlideBtn from "../atoms/SlideBtn";
import ResourceCard from "../molecules/ResourceCard";
import TeamCol from "../molecules/TeamCol";
import "@/uploads/styles/component/component.css";
import "swiper/css/grid";

const TabContainer = ({ data, card, swiperType }) => {
  const openTeamPop = useModalStore((state) => state.openTeamPop);
  const gridProps =
    swiperType === "grid" ? { grid: { rows: 2, fill: "row" } } : {};
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container tab-container">
      <div className="row">
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

        <div className="swiper-nav group primary-border square">
          <SlideBtn className={`resource-button-prev-${activeTab}`} />
          <SlideBtn className={`resource-button-next-${activeTab}`} />
        </div>
      </div>

      {data?.map(({ category, list }, idx) => {
        const isActive = activeTab === idx;
        return (
          <div key={idx} className={`content ${isActive ? "active" : ""}`}>
            <Swiper
              navigation={{
                prevEl: `.resource-button-prev-${idx}`,
                nextEl: `.resource-button-next-${idx}`,
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
                      <TeamCol data={item} onClick={openTeamPop} />
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
