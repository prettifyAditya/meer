"use client";
import "@/uploads/styles/footer/footer.css";
import Input from "../atoms/Input";
import { useState } from "react";
import Button from "../atoms/Button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const allLinks = {
    menu: [
      { title: "Our Work", href: "/our-work" },
      { title: "Research", href: "/research" },
      { title: "News & Events", href: "/news" },
      { title: "Resources", href: "/resources" },
      { title: "Contact Us", href: "/contact" },
    ],

    quickLinks: [
      { title: "About MEER", href: "/about" },
      { title: "Management Team", href: "/team" },
      { title: "Careers", href: "/career" },
      { title: "FAQ's", href: "/faq" },
      { title: "Privacy Policy", href: "/privacy" },
    ],

    contact: [
      { title: "info@meer.org", href: "mailto:info@meer.org" },
      { title: "press@meer.org", href: "mailto:press@meer.org" },
    ],

    social: [
      {
        icon: "/icon/facebook.svg",
        alt: "Facebook",
        href: "#",
      },
      {
        icon: "/icon/instagram.svg",
        alt: "Instagram",
        href: "#",
      },
      {
        icon: "/icon/twitter.svg",
        alt: "Twitter",
        href: "#",
      },
      {
        icon: "/icon/linkedin.svg",
        alt: "LinkedIn",
        href: "#",
      },
      {
        icon: "/icon/youtube.svg",
        alt: "YouTube",
        href: "#",
      },
      {
        icon: "/icon/email.svg",
        alt: "Email",
        href: "mailto:info@meer.org",
      },
    ],
  };

  return (
    <footer>
      <div className="upper">
        <div className="container">
          <div className="flex">
            <h5>Stay Connected to the Change</h5>
            <form className="form">
              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Button variant="btn-primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="container">
          <div className="logo">
            <Image src="/image/logo.svg" width={100} height={40} alt="Meer" />
          </div>
          <ul className="menu">
            <li>
              <Link href="/our-work">Our Work</Link>
            </li>
            <ul className="menu">
              {allLinks.menu.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </ul>
          <ul className="links">
            <p>Quick Links</p>

            {allLinks.quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="links">
            <p>Contact Us</p>

            {allLinks.contact.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="social_media">
            <ul>
              {allLinks.social.map((social, index) => (
                <li key={index}>
                  <Link href={social.href}>
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="btn-primary">Donate</Button>
          </div>
        </div>
      </div>
      <div className="madeBy">
        <p>©  MEER.org. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
