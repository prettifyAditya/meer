"use client";
import { setIsHeaderBlue } from "@/store/slice/uiSlice";
import "@/uploads/styles/component/component.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ThankYou = ({ heading, description }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsHeaderBlue(true));
  }, []);

  return (
    <section className="otherBanner">
      <div className="container">
        <h2>{heading || "Thank You"}</h2>
        <p>
          {description ||
            "Your contribution has been successfully processed and we are grateful for your support."}
        </p>
        <a href="/" className="btn btn-primary">
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default ThankYou;
