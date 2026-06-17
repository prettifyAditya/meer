"use client"

import React from 'react'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from '../../atoms/SlideBtn';
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import Button from '../../atoms/Button';

const HowAppliesCroi = () => {
    return (
        <>
            <section>
                <div className="croi-secF  sec-pad-all">
                    <div className="container">
                        <div className="heading">
                            <h2>How MEER Applies CROI</h2>
                            <p>MEER uses CROI as the central filter in designing and evaluating cooling strategies. Only approaches capable of reaching CROI values in the 1,000–3,000 range are considered thermodynamically viable for planetary cooling.</p>
                            <p>This analysis leads to a clear conclusion: passive surface reflectivity enhancement is one of the few strategies capable of meeting this threshold.</p>
                            <p>Reflective surfaces remove heat by preventing solar radiation from being absorbed in the first place. Instead of converting or transporting heat, they reflect incoming shortwave radiation back toward space before it becomes thermal energy in the Earth system.</p>
                            <p>This approach has several defining characteristics:</p>
                        </div>

                        <div className="support-slider">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                navigation={{
                                    nextEl: ".support-button-next",
                                    prevEl: ".support-button-prev",
                                }}
                                modules={[Navigation]}
                            >
                                {supportData?.map(({ description, imgSrc }, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <figure>
                                                <Image src={imgSrc} width={78} height={78} alt="ico" ></Image>
                                            </figure>
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

                        <div className="get-in-touch">
                            <figure>
                                <Image src="/image/logo-dark.svg" width={112} height={32} alt="meer logo"></Image>
                            </figure>
                            <p>Because these systems operate passively, their cooling return over lifetime vastly exceeds the energy invested in manufacturing and deployment. This is what produces high CROI.</p>

                            <Button variant="btn-primary">Get in touch</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowAppliesCroi


const supportData = [
    {
        imgSrc: "/image/croi/swiper-ico/1.svg",
        description: "Near-zero operational energy once installed",
    },
    {
        imgSrc: "/image/croi/swiper-ico/2.svg",
        description: "Immediate cooling effect under sunlight",
    },
    {
        imgSrc: "/image/croi/swiper-ico/3.svg",
        description: "Extremely high radiative efficiency",
    },
    {
        imgSrc: "/image/croi/swiper-ico/4.svg",
        description: "Simple, recyclable, material-light construction",
    },
    {
        imgSrc: "/image/croi/swiper-ico/5.svg",
        description: "Applicability across buildings, water, land, and urban environments",
    },
    {
        imgSrc: "/image/croi/swiper-ico/6.svg",
        description: "Scalability without heavy industrial infrastructure",
    }

];