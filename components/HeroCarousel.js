"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function HeroCarousel() {
  const slides = [
    {
      title: "Amazing Juicy Box Deal",
      subtitle:
        "Get your MagSafe Compatible 4000 mAh Magnetic Power Bank and Many More !!!",
      desc: "We are currently selling power banks, solar chargers at a massive discount, check it out today to get discount of up to 60%",
      buttonLabel: "Check them out",
    },
    {
      title: "Unbeatable Tech Offers",
      subtitle: "Upgrade your Setup with Next-Gen Gadgets",
      desc: "Find massive selections of smartwatches, headphones, and gaming accessories on sale right now. Don't miss out on these limited time bundles.",
      buttonLabel: "Shop Tech",
    },
    {
      title: "Premium Sound Deals",
      subtitle: "Immersive Audio Devices at Half Price",
      desc: "Get the best noise cancelling headphones and premium earbuds at jaw-dropping prices. High fidelity audio has never been this accessible.",
      buttonLabel: "Buy Audio",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <>
      <section className="mt-pad mb-normal flex gap-normal overflow-hidden h-[600px] md:h-[450px] max-md:flex-col relative">
        <div className="bg-white flex-1 rounded-modular flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden transition-all duration-500 ease-in-out">
          <div
            className="w-full md:max-w-1/2 z-10 px-pad md:px-10 py-margin md:py-0 outline-none backdrop-blur-sm rounded-lg"
            key={currentIndex}
            data-aos="fade-right"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-very-dark-olive font-nova leading-tight mb-normal">
              {slides[currentIndex].title}
            </h2>
            <p className="text-very-dark-olive font-bold text-[1rem] md:text-[1.1rem] mb-intra font-catamaran">
              {slides[currentIndex].subtitle}
            </p>
            <p className="text-very-dark-olive text-[0.8rem] md:text-[0.85rem] mb-pad">
              {slides[currentIndex].desc}
            </p>
            <Button className="w-fit">
              {slides[currentIndex].buttonLabel}
            </Button>
          </div>

          <div className="flex-1 flex justify-center items-center h-[250px] md:h-full relative w-full md:w-1/2">
            <Image
              src="/iphone.png"
              alt="iphone"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain md:object-cover"
            />
          </div>
        </div>

        {/* Next Slide Hint box */}
        <div
          onClick={nextSlide}
          className="w-[100px] cursor-pointer bg-[#EFEFEF] rounded-modular max-md:hidden opacity-50 hover:opacity-80 transition-opacity flex items-center justify-center"
        >
          <FaChevronRight size={24} className="text-dark-olive" />
        </div>
      </section>

      {/* Hero Indicators */}
      <div className="flex justify-center items-center gap-intra mb-margin">
        <div
          onClick={prevSlide}
          className="w-[24px] h-[24px] rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white/20"
        >
          <FaChevronLeft size={10} className="text-white" />
        </div>
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-normal h-normal rounded-full cursor-pointer transition-colors ${currentIndex === idx ? "bg-white" : "bg-dark-olive border border-white"}`}
          ></div>
        ))}
        <div
          onClick={nextSlide}
          className="w-[24px] h-[24px] rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white/20"
        >
          <FaChevronRight size={10} className="text-white" />
        </div>
      </div>
    </>
  );
}
