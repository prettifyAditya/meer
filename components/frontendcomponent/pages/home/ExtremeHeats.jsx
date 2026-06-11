import InsightContainer from "../../organisms/InsightContainer";

const ExtremeHeats = () => {
  if (!data) return null
  const { heading, imgSrc, detail } = data
  return (
    <section className="extremeHeat">
      <InsightContainer className="container" heading={heading} imgSrc={imgSrc} detail={detail} />
    </section>
  );
};

export default ExtremeHeats;

const data = {
  heading: "Extreme Heat is Already Affecting Millions",
  imgSrc: "/image/home/homeAbout.png",
  detail: `<p>We are living through the hottest period in more than 100,000 years. Even if emissions stopped today, temperatures would continue rising due to heat already stored in the system.</p>
          <p>The impact is already being felt:</p>
          <ul>
            <li>Crop yields are falling due to heat stress</li>
            <li>Water sources are drying up faster</li>
            <li>Millions of people are exposed to dangerous temperatures without cooling</li>
            <li>Heat-related illness and deaths are increasing</li>
          </ul>`
}