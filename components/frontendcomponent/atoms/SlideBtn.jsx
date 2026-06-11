import React from "react";

const SlideBtn = ({ className }) => {
  return (
    <button
      className={`${className.includes("prev") ? "swiper-prev" : "swiper-next"} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path fill="none" stroke="#004d99" d="M6 4.5L9.5 8L6 11.5" />
      </svg>
    </button>
  );
};

export default SlideBtn;
