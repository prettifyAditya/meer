import InfoGraphic from "../../molecules/InfoGraphic";

export default function StoriesWrapper() {
  return (
    <section>
      <div className="stories_wrapper sec-pad-bottom">
        <div className="container">
          <InfoGraphic
            classname="story_wrap logo_icon"
            location="India"
            mediaSrc="/image/human/story1.jpg"
            heading="Rani’s Home, Reclaimed from the Heat"
            desc="<p>In Pune, India, extreme heat once made Rani Bhavane’s single-room home nearly unlivable, forcing her to spend much of the day outside and disrupting basic daily activities like cooking and sleeping. As part of MEER’s Pune Cooling Pilot, her roof was repaired and fitted with a reflective, passively cooling surface. The change led to noticeably lower indoor temperatures, improved comfort, and a dry, leak-free home during monsoon season.</p>"
            playBtn="/video/about-banner.mp4"
          />
          <InfoGraphic
            classname="story_wrap logo_icon"
            location="Sierra Leone"
            mediaSrc="/image/human/story2.jpg"
            heading="Freetown - Kadie Mattiah"
            desc="<p>Kadie Mattiah has lived in Kroo Bay for years, where daily life is shaped by extreme heat and difficult living conditions. Before the installation of MEER’s heat-adaptive roof, her home would trap heat from the sun, making it almost unbearable to stay indoors. The constant exposure not only caused discomfort but also led to health issues, including skin rashes and persistent irritation. Even resting at home offered little relief.</p>"
            playBtn="/video/about-banner.mp4"
          />
          <InfoGraphic
            classname="story_wrap logo_icon"
            location="Sierra Leone"
            mediaSrc="/image/human/story3.jpg"
            heading="Shebora Kamara"
            desc="<p>Shebora Kamara, a 32-year-old resident of Kroo Bay, Sierra Leone, grew up amid poverty, conflict, and limited access to healthcare during the civil war, an environment that contributed to a childhood illness leaving her partially disabled. Despite years of delayed education, discrimination, and social exclusion, he persisted, eventually completing secondary school and pursuing further training in IT and vocational skills.</p>"
            playBtn="/video/about-banner.mp4"
          />
          <InfoGraphic
            classname="story_wrap logo_icon"
            location="Sierra Leone"
            mediaSrc="/image/human/story4.jpg"
            heading="Sheku Sumah"
            desc="<p>Sheku Sumah, a 28-year-old from Freetown, Sierra Leone, grew up facing significant financial hardship and social exclusion after losing his father at a young age and living with a disability that limited his access to education and employment. Despite strong academic performance, poverty forced him to leave university, and he relied on basic ICT work and shoemaking to support himself in an environment where disabled individuals are often overlooked.</p>"
            playBtn="/video/about-banner.mp4"
          />
          <div className="pagination_wrapper">
            <button type="button" className="pagination-button page-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.222 9.897q3.45-3.461 6.744-6.754a.65.65 0 0 0 0-.896c-.311-.346-.803-.316-1.027-.08Q9.525 5.59 5.796 9.322q-.296.243-.296.574t.296.592l7.483 7.306a.75.75 0 0 0 1.044-.029c.358-.359.22-.713.058-.881a3408 3408 0 0 1-7.16-6.988"
                ></path>
              </svg>
            </button>
            <ul>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <button type="button" className="pagination-button page-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.222 9.897q3.45-3.461 6.744-6.754a.65.65 0 0 0 0-.896c-.311-.346-.803-.316-1.027-.08Q9.525 5.59 5.796 9.322q-.296.243-.296.574t.296.592l7.483 7.306a.75.75 0 0 0 1.044-.029c.358-.359.22-.713.058-.881a3408 3408 0 0 1-7.16-6.988"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [{}];
