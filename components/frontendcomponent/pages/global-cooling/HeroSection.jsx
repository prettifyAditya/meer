
import HeroSection from "../../molecules/HeroSection";

const GlobalCoolingHeroSection = ({data}) => {
    const {tagline, heading, mediaSrc} = data;
    return(
        <HeroSection
            tagline={tagline}
            heading={heading}
            mediaSrc={mediaSrc}
        />
    )
}

export default GlobalCoolingHeroSection;
