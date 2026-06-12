
import HeroSection from "../../molecules/HeroSection";
import StaticData from "@/uploads/data/StaticData.json";

const GlobalCoolingHeroSection = () => {
    const {title, heading, mediaSrc} = StaticData.globalCoolingPage.heroSection;
    return(
        <>
            <HeroSection
                title={title}
                heading={heading}
                mediaSrc={mediaSrc}
            />
        </>
    )
}

export default GlobalCoolingHeroSection;
