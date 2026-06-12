import React from "react";

const SlideBtn = ({ className }) => {
  return (
    <button
      className={`${className.includes("prev") ? "swiper-prev" : "swiper-next"} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
        ></path>
      </svg>
    </button>
  );
};

export default SlideBtn;
