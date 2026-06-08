
const SolutionDesigned = ({ data , isPopUpVideo, isBtn  }) => {
  if (!data) return null;

  const { heading, subheading, imgSrc, videoSrc,listTitle, title, bulletList, para , buttonText } = data;
  console.log(data, 545454);

  return (
    <section className="SolutionDesigned">
        <div className="container">
            <InsightSection data={data} isBtn={true} isPopUpVideo={true}/>
        </div>
    </section>
  );
};

export default SolutionDesigned;
