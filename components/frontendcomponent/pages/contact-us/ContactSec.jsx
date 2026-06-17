"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import Textarea from "../../atoms/Textarea";
import Button from "../../atoms/Button";

export default function ContactSec() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="contact_sec sec-pad-all">
      <div className="container">
        <div className="main_wrapper flex">
          <div className="colA">
            <Image
              className="logo"
              src="/image/logo-dark.svg"
              width="150"
              height="42"
              alt="Meer Logo"
            ></Image>
            <p>
              Get in touch with us for inquiries, partnerships, or support—we’re
              always ready to help and collaborate.
            </p>
            <ul>
              <li>
                <div className="icon">
                  <Image
                    src="/icon/mail.svg"
                    width={40}
                    height={40}
                    alt="Mail Icon"
                  ></Image>
                </div>
                <div className="details">
                  <h6>General</h6>
                  <Link href="mailto:info@meer.org">info@meer.org</Link>
                </div>
              </li>
              <li>
                <div className="icon">
                  <Image
                    src="/icon/mail.svg"
                    width={40}
                    height={40}
                    alt="Mail Icon"
                  ></Image>
                </div>
                <div className="details">
                  <h6>Media Inquiries</h6>
                  <Link href="mailto:press@meer.org">press@meer.org</Link>
                </div>
              </li>
            </ul>
            <ul className="social_icons">
              <li>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="currentColor"
                      d="M240 363.3V576h116V363.3h86.5l18-97.8H356v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4v42.1h-66v97.8z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="colB">
            <div className="heading">
              <h2>Let’s Build a Cooler Future Together</h2>
            </div>
            <div className="form">
              <div className="form-grid">
                <Input
                  label="Name *"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email *"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Phone *"
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Select
                  label="Country *"
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  options={[
                    { value: "Option 1", label: "Option 1" },
                    { value: "Option 2", label: "Option 2" },
                    { value: "Option 3", label: "Option 3" },
                  ]}
                  required
                />
                <Textarea
                  classname="full"
                  label="Message *"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div className="submit-grp full text-left">
                  <Button onClick={handleSubmit}>Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
