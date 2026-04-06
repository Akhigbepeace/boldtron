"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  FaPlug,
  FaFireAlt,
  FaMobileAlt,
  FaLaptop,
  FaTshirt,
  FaCarSide,
  FaRunning,
} from "react-icons/fa";
import { MdChair } from "react-icons/md";

export default function CategoriesRow() {
  const categories = [
    {
      name: "Electronics",
      image: "/categories/electronics.png",
    },
    {
      name: "Cooking Appliance",
      image: "/categories/cooking-appliance.png",
    },
    {
      name: "Phones",
      image: "/categories/phones.png",
    },
    {
      name: "Computers",
      image: "/categories/computer.png",
    },
    {
      name: "Fashion",
      image: "/categories/computer.png",
    },
    {
      name: "Automobile",
      image: "/categories/computer.png",
    },
    {
      name: "Office Products",
      image: "/categories/computer.png",
    },
    {
      name: "Sport Accessories",
      image: "/categories/computer.png",
    },
    {
      name: "Power Generation",
      image: "/categories/computer.png",
    },
  ];

  const sliderRef = useRef(null);

  return (
    <section
      data-aos="fade-up"
      ref={sliderRef}
      className="mb-margin flex items-stretch overflow-x-auto p-pad gap-normal hide-scrollbar"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex justify-center gap-pad">
        {categories.map((cat, i) => (
          <Link
            href={`/category/${cat.name.toLowerCase()}`}
            key={i}
            className="flex flex-col items-center gap-intra cursor-pointer group w-[80px]"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={60}
              height={60}
              className="rounded-modular"
            />
            {/* <div className="w-[60px] h-[60px] bg-white rounded-modular flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              {cat.icon}
            </div> */}

            <span className="text-[0.7rem] text-center font-bold">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
