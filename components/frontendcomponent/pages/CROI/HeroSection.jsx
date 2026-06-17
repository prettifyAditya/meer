
import HeroSection from "../../molecules/HeroSection";

const CROIHeroSection = ({data}) => {
    const {tagline, heading, mediaSrc} = data;
    return(
        <HeroSection
            tagline={tagline}
            heading={heading}
            mediaSrc={mediaSrc}
        />
    )
}

export default CROIHeroSection;
