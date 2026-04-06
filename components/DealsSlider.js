"use client";

import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function DealsSlider(props) {
  const {
    title,
    subtitle,
    icon,
    rightAction,
    children,
    topBarClass,
    titleClass,
    subtitleClass,
  } = props;

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      // Assuming each item is roughly 150px wide + somewhat gap
      sliderRef.current.scrollBy({ left: -160, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 160, behavior: "smooth" });
    }
  };

  return (
    <section
      className="mb-margin rounded-modular overflow-hidden"
      data-aos="fade-up"
    >
      <div
        className={`px-pad py-intra flex justify-between items-center ${topBarClass}`}
      >
        <div className="flex items-center gap-3">
          {icon}

          <div>
            <h3
              className={`font-catamaran text-base font-bold leading-none ${titleClass}`}
            >
              {title}
            </h3>
            <span className={`text-sm ${subtitleClass}`}>{subtitle}</span>
          </div>
        </div>

        {rightAction && (
          <div className="flex items-center gap-intra text-sm border border-current px-3 py-1 rounded-full cursor-pointer hover:bg-black/10 transition-colors">
            {rightAction} <FaChevronRight size={10} />
          </div>
        )}
      </div>

      <div className="relative group bg-white">
        {/* Scroll Left Arrow */}
        <div
          onClick={scrollLeft}
          className="absolute left-intra top-1/2 -translate-y-1/2 w-margin h-margin bg-primary rounded-full flex items-center justify-center text-very-dark-olive cursor-pointer shadow-md z-10 hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 min-w-margin min-h-margin"
        >
          <FaChevronLeft size={12} />
        </div>

        {/* Scroll Container */}
        <div
          ref={sliderRef}
          className="flex items-stretch overflow-x-auto p-pad gap-normal hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {children}
        </div>

        {/* Scroll Right Arrow */}
        <div
          onClick={scrollRight}
          className="absolute right-pad top-1/2 -translate-y-1/2 w-margin h-margin bg-primary rounded-full flex items-center justify-center text-very-dark-olive cursor-pointer shadow-md z-10 hover:scale-110 transition-transform opacity-0 group-hover:opacity-100"
        >
          <FaChevronRight size={12} />
        </div>
      </div>
    </section>
  );
}
