import HeroSection from "../../molecules/HeroSection";
import "@/uploads/styles/contact/contact.css";
import ContactSec from "./ContactSec";

export default function ContactUsPage() {
  return (
    <main>
      <HeroSection
        classname="contact_hero"
        mediaSrc="/video/contact-banner.mp4"
        posterSrc="/video/contact-poster.png"
        tagline="Contact Us"
        heading="Take the First Step Toward Impact"
      />
      <ContactSec />
    </main>
  );
}
