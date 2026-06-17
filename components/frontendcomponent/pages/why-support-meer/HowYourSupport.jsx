"use client";
import React from 'react'
import Image from 'next/image'
import Button from '../../atoms/Button'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from '../../atoms/SlideBtn';
import "swiper/css";
import "swiper/css/navigation";

const HowYourSupport = () => {
    return (
        <>
            <section>
                <div className="wsm-secC sec-pad-all">
                    <div className="container">
                        <h2>How Your Support Is Used</h2>

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
                                {supportData?.map(({ description, image }, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <figure>
                                                <Image src={image} width={1920} height={1080} alt="ico" />
                                            </figure>
                                            <h4>{description}</h4>
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
                            <p>MEER prioritises <strong>real-world deployment, evidence-building, </strong> and <strong>shared learning, </strong> ensuring that lessons from one location can inform solutions elsewhere.</p>

                            <Button variant="btn-primary">Get in touch</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowYourSupport

const supportData = [
    {
        image: "/image/why-suppor-meer/support-ico/1.svg",
        description: "Community-based cooling projects in heat-exposed regions",
    },
    {
        image: "/image/why-suppor-meer/support-ico/2.svg",
        description: "Field testing and measurement of surface cooling performance",
    },
    {
        image: "/image/why-suppor-meer/support-ico/3.svg",
        description: "Training and employment of local technicians and partners",
    },
    {
        image: "/image/why-suppor-meer/support-ico/4.svg",
        description: "Open research, data collection, and public communication",
    },
    {
        image: "/image/why-suppor-meer/support-ico/5.svg",
        description: "Responsible development of scalable cooling approaches",
    },

];