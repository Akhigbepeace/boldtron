"use client";

import React, { useState } from "react";
import Button from "../../../components/Button";
import Gallery from "../../../components/Gallery";
import ReviewItem from "../../../components/ReviewItem";
import DealsSlider from "../../../components/DealsSlider";
import ProductCard from "../../../components/ProductCard";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import Link from "next/link";

export default function ProductDetails({ params }) {
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState("Black");

  const colors = ["Black", "Red", "Blue"];
  const images = [1, 2, 3, 4]; // Dummy gallery array

  const reviews = [
    {
      name: "Tiamiyu Muiz",
      rating: 4,
      status: "Works perfectly",
      text: "I use it to shave everything on my body so far. I love what am seeing. It works perfectly",
      date: "March 10, 2025",
    },
    {
      name: "Tiamiyu Muiz",
      rating: 5,
      status: "Works perfectly",
      text: "I use it to shave everything on my body so far. I love what am seeing. It works perfectly",
      date: "March 10, 2025",
    },
    {
      name: "Tiamiyu Muiz",
      rating: 4,
      status: "Works perfectly",
      text: "I use it to shave everything on my body so far. I love what am seeing. It works perfectly",
      date: "March 10, 2025",
    },
  ];

  const similarProducts = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: `similar-${i}`,
      title: "MATIHO One-piece...",
      price: "3,000",
      description: "MATIHO One-piece...",
    }));

  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato pb-margin">
      {/* Top Breadcrumb/Call Banner */}
      <div className="bg-dark-olive text-center py-intra text-[0.85rem] font-bold mb-pad">
        Order with call: 0808 352 4016
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-pad max-md:px-normal">
        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row gap-pad mb-margin bg-very-dark-olive p-pad rounded-modular border border-dark-olive border-opacity-30">
          {/* Gallery Column */}
          <div className="flex-1 min-w-[300px]" data-aos="fade-right">
            <Gallery images={images} />
          </div>

          {/* Info Column */}
          <div className="flex-1 flex flex-col gap-pad" data-aos="fade-left">
            <div>
              <h1 className="text-[1.8rem] font-catamaran font-bold leading-tight mb-intra">
                Professional Hair Clippers Wireless Hair Trimmer High-end
                battery
              </h1>

              <div className="flex items-center gap-normal mb-intra">
                <div className="flex text-primary text-[0.9rem]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="text-custom-gray text-[0.8rem] border-l border-custom-gray pl-normal">
                  40 bought
                </span>
                <div className="flex gap-normal text-custom-gray ml-auto">
                  <button className="hover:text-primary transition-colors">
                    <FaHeart />
                  </button>
                  <button className="hover:text-primary transition-colors">
                    <FaShareAlt />
                  </button>
                </div>
              </div>

              {/* Variants */}
              <div className="flex gap-normal mb-normal">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setActiveColor(color)}
                    className={`px-normal py-1 rounded-full text-[0.75rem] border transition-all ${activeColor === color ? "bg-primary text-very-dark-olive border-primary" : "bg-transparent border-custom-gray text-custom-gray"}`}
                  >
                    {color}
                  </button>
                ))}
              </div>

              <div className="mb-pad">
                <span className="text-custom-gray line-through text-[1rem]">
                  &#8358; 10,000
                </span>
                <div className="flex items-center gap-normal mt-1">
                  <span className="bg-primary text-very-dark-olive text-[0.7rem] px-2 py-0.5 rounded font-bold">
                    -70%
                  </span>
                  <span className="text-[2.2rem] font-bold text-white leading-none">
                    &#8358; 3,000
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center gap-pad mb-pad">
                <div className="flex items-center bg-white/10 rounded-modular overflow-hidden border border-white/20">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 hover:bg-white/20 transition-colors"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="px-pad font-bold w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 hover:bg-white/20 transition-colors"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>

                <Link href="/cart">
                  <Button className="py-3 px-[40px] font-catamaran font-bold text-[1rem]">
                    Add to cart
                  </Button>
                </Link>
              </div>

              <p className="text-[0.8rem] italic">
                Delivery between 24 March - 30 March
              </p>
            </div>

            <div className="border-t border-white/10 pt-pad text-[0.85rem] text-white">
              <p className="mb-intra">
                <span className="font-bold">Category:</span>{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Electronics
                </span>
              </p>
              <h3 className="font-catamaran font-bold text-[1.1rem] mb-intra">
                About Product
              </h3>
              <p className="leading-relaxed mb-intra">
                Elevate your grooming standards with our Professional Wireless
                Hair Clipper. Designed for elite performance, it features a
                high-end lithium-ion battery delivering an industry-leading 300
                minutes of cordless runtime. The high-torque, whisper-quiet
                motor effortlessly powers through all hair types, while the
                self-sharpening titanium blades ensure a snag-free, skin-close
                finish every time.
              </p>
              <p className="leading-relaxed">
                The sleek, ergonomic metal housing provides a premium feel and
                maximum durability for heavy daily use. Stay informed with the
                integrated smart LED display, tracking battery life and
                maintenance alerts in real-time. Whether you are crafting a
                seamless fade or a crisp lineup, this trimmer offers the
                ultimate fusion of cordless freedom and professional-grade
                power.
              </p>
            </div>

            {/* Reviews Section */}
            <div
              className="mb-margin rounded-modular overflow-hidden border border-dark-olive border-opacity-30"
              data-aos="fade-up"
            >
              <div className="bg-dark-olive/50 px-pad py-intra text-[1.2rem] font-catamaran font-bold border-b border-dark-olive">
                Customer Reviews (73)
              </div>

              <div className="bg-white p-pad text-very-dark-olive">
                {/* Summary */}
                <div className="flex flex-col items-center mb-margin pb-margin border-b border-[#eee]">
                  <div className="flex text-primary text-[1.5rem] mb-intra">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <div className="text-[1.2rem] font-bold">
                    4.1/5{" "}
                    <span className="text-custom-gray font-normal text-[0.9rem]">
                      (214 ratings)
                    </span>
                  </div>
                </div>

                {/* List */}
                <div className="flex flex-col">
                  {reviews.map((rev, i) => (
                    <ReviewItem key={i} {...rev} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-intra mt-margin">
                  <button className="w-margin h-margin bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <FaChevronLeft size={10} />
                  </button>
                  <span className="w-margin h-margin border border-[#eee] rounded-full flex items-center justify-center text-[0.8rem] bg-gray-50 font-bold">
                    1
                  </span>
                  <span className="w-margin h-margin border border-[#eee] rounded-full flex items-center justify-center text-[0.8rem] cursor-pointer hover:bg-gray-50">
                    2
                  </span>
                  <span className="w-margin h-margin border border-[#eee] rounded-full flex items-center justify-center text-[0.8rem] cursor-pointer hover:bg-gray-50">
                    3
                  </span>
                  <button className="w-margin h-margin bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <FaChevronRight size={10} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Sliders */}
        <DealsSlider
          title="Similar Products"
          subtitle=""
          icon={null}
          topBarClass="bg-dark-olive/30 text-white"
          titleClass="text-[1.2rem]"
          subtitleClass=""
          rightAction={null}
        >
          {similarProducts.map((p, i) => (
            <div key={i} className="min-w-[150px]">
              <ProductCard {...p} id={p.id} />
            </div>
          ))}
        </DealsSlider>

        <DealsSlider
          title="Viewed Recently"
          subtitle=""
          icon={null}
          topBarClass="bg-dark-olive/30 text-white"
          titleClass="text-[1.2rem]"
          subtitleClass=""
          rightAction="See more"
        >
          {similarProducts.map((p, i) => (
            <div key={i} className="min-w-[150px]">
              <ProductCard {...p} id={p.id} />
            </div>
          ))}
        </DealsSlider>
      </div>
    </div>
  );
}
