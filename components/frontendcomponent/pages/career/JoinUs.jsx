"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import Select from "../../atoms/Select";
import FileInput from "../../atoms/FileInput";
import Button from "../../atoms/Button";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    designation: "",
    resume: null,
    message: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="join_us sec-pad-all">
      <div className="container">
        <div className="heading">
          <div className="icon">
            <Image
              src="/image/icon.svg"
              width={60}
              height={40}
              alt="Meer Icon"
            ></Image>
          </div>
          <h2>Interested in Joining Us?</h2>
        </div>
        <div className="form">
          <div className="form-grid">
            <Input
              label="First Name *"
              type="text"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <Input
              label="Last Name *"
              type="text"
              name="lastname"
              id="lastname"
              value={formData.lastname}
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
              label="Phone No. *"
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Select
              label="Apply for *"
              name="designation"
              id="designation"
              value={formData.designation}
              onChange={handleChange}
              options={[
                { value: "Option 1", label: "Option 1" },
                { value: "Option 2", label: "Option 2" },
                { value: "Option 3", label: "Option 3" },
              ]}
              required
            />
            <FileInput
              name="resume"
              id="resume"
              onChange={handleChange}
              error="Please upload your resume"
              required
            />
            <Textarea
              classname="full"
              label="Message "
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="submit-grp full">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
