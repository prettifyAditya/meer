"use client"

import React from 'react'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from '../../atoms/SlideBtn';
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';

const StrategiesFallShort = () => {
    return (
        <>
            <section>
                <div className="croi-secD sec-pad-all">
                    <div className="container">
                        <div className="heading">
                            <h2>Why Most Climate Strategies Fall Short</h2>
                            <p>Many climate proposals are well intentioned and environmentally beneficial. However, when evaluated strictly through CROI, most fail to meet the thermodynamic threshold required for planetary cooling.</p>
                        </div>

                        <div className="support-slider">
                            <Swiper
                                slidesPerView={1.2}
                                spaceBetween={20}
                                navigation={{
                                    nextEl: ".support-button-next",
                                    prevEl: ".support-button-prev",
                                }}
                                modules={[Navigation]}
                            >
                                {supportData?.map(({ title, description, image }, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <figure>
                                                <Image src={image} width={1920} height={1080} alt="ico" />
                                            </figure>
                                            <figcaption>
                                                <h4>{title}</h4>
                                                <p>{description}</p>
                                            </figcaption>
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

export default StrategiesFallShort


const supportData = [
    {
        image: "/image/croi/swiper-img/1.jpg",
        title: "Tree planting and reforestation",
        description: "Tree planting and reforestation involve land preparation, irrigation, transport, and decades-long growth cycles. Cooling effects are slow, uncertain, and often reversible through drought or wildfire. In some regions, darker canopy surfaces reduce reflectivity, offsetting cooling benefits. At global scale, the CROI is extremely low."
    },
    {
        image: "/image/croi/swiper-img/2.jpg",
        title: "Direct Air Capture (DAC)",
        description: "Direct Air Capture (DAC) requires substantial electricity and heat to separate CO₂ from air. Fans, compressors, chemical processing, and regeneration cycles consume large amounts of energy. The operational energy demand can approach or exceed the cooling benefit, resulting in very low or even negative CROI."
    },
    {
        image: "/image/croi/swiper-img/3.jpg",
        title: "Bioenergy with Carbon Capture and Storage (BECCS)",
        description: "Bioenergy with Carbon Capture and Storage (BECCS) depends on large-scale biomass cultivation, harvesting, drying, transport, combustion, carbon capture, compression, and geological storage. Each stage requires industrial energy inputs. When lifecycle energy costs are included, the thermodynamic return often collapses."
    },
    {
        image: "/image/croi/swiper-img/4.jpg",
        title: "Enhanced weathering",
        description: "Enhanced weathering requires mining, crushing, grinding, and distributing massive volumes of rock. The mechanical energy required to process minerals at scale undermines the net cooling effect."
    },
    {
        image: "/image/croi/swiper-img/5.jpg",
        title: "",
        description: "These approaches may contribute to emissions management or industrial transition. But under CROI analysis, they do not meet the physical threshold required to reverse planetary heating."
    },

];