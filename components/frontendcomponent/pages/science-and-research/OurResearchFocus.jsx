"use client";
import React from 'react'
import Image from 'next/image'
import Button from '../../atoms/Button'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from '../../atoms/SlideBtn';
import "swiper/css";
import "swiper/css/navigation";

const OurResearchFocus = () => {
    return (
        <>
            <section>
                <div className="science-research-secD sec-pad-all">
                    <div className="container">
                        <div className="heading">
                            <h2>Our Research Focus</h2>
                            <p>MEER’s research and development program integrates material science, environmental physics, engineering, and field validation across multiple climatic regions. Our objective is to develop reflective and radiative cooling technologies that are scientifically rigorous, economically viable, and durable in challenging environments.</p>
                        </div>

                        <div className="support-slider">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={20}
                                navigation={{
                                    nextEl: ".support-button-next",
                                    prevEl: ".support-button-prev",
                                }}
                                modules={[Navigation]}
                            >
                                {supportData?.map(({ description, title, numbering }, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <figure>
                                                <p>{numbering}</p>
                                            </figure>
                                            <h4>{title}</h4>
                                            <p>{description}</p>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            <div className="swiper-nav center-full white">
                                <SlideBtn className="support-button-prev" />
                                <SlideBtn className="support-button-next" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurResearchFocus

const supportData = [
    {
        numbering: "1",
        title: "Material Innovation",
        description: "Development of bamboo–PET composite panels and reflective laminates that are strong, recyclable, locally repairable, and low-cost with a target production cost of $1–2 per square metre.",
    },
    {
        numbering: "2",   
        title: "Durability and Environmental Testing",
        description: "Long-term exposure trials measuring performance under high humidity, salt air, tropical UV radiation, heavy rainfall, and particulate pollution.",
    },
    {
        numbering: "3",   
        title: "Sensor and Instrumentation Development",
        description: "Design and calibration of low-cost, high-precision temperature and radiation sensors (±0.1 °C accuracy) to enable defensible, community-based data collection across rooftops, agricultural spaces, water bodies, and public areas.",
    },
    {
        numbering: "4",   
        title: "Field Validation",
        description: "Continuous monitoring of indoor and outdoor cooling performance in Freetown (Sierra Leone) and Pune (India), across residential, educational, and agricultural settings.",
    }

];