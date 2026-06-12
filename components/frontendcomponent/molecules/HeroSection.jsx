import Image from "next/image";
import "@/uploads/styles/component/component.css";

export default function HeroSection({ classname="", mediaSrc="", posterSrc="", tagline="", heading=""}){
    return(
        <section>
            <div className={`banner hero_banner ${classname}`}>
                <div className="bg">
                    {mediaSrc?.includes("mp4") ? (
                        <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={mediaSrc}
                        poster={posterSrc}
                        >
                            
                        </video>
                    ) : (
                        <Image
                        src={mediaSrc}
                        width={1280}
                        height={700}
                        alt={`${tagline} Image`}
                        />
                    )}
                    <div className="banner-wrapper">    
                        <div className="container">
                            <div className="heading">
                                <p>{tagline}</p>
                                <h1>{heading}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}