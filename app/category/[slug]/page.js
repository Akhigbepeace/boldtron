"use client";

import React, { use } from "react";
import Image from "next/image";
import {
  FaFilter,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import DealsSlider from "@/components/DealsSlider";
import ProductCard from "@/components/ProductCard";
import SearchCard from "@/components/SearchCard";

const CategoryPage = ({ params }) => {
  const { slug } = use(params);
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // Mock products
  const products = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: `cat-${slug}-${i}`,
      title: "MATIHO One-piece...",
      price: "3,000",
    }));

  const gridResults = Array(9)
    .fill(null)
    .map((_, i) => ({
      id: `grid-${slug}-${i}`,
      title: "Professional Hair Clippers Wireless Hair Trimmer Hi...",
      oldPrice: "10,000",
      newPrice: "3,000",
      rating: 4.2,
    }));

  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato">
      <div className="bg-dark-olive text-center py-intra text-[0.8rem] font-bold">
        Order with call: 0808 352 4016
      </div>

      <div className="w-full px-pad max-md:px-normal">
        {/* Category Hero Banner */}
        <div className="relative w-full h-[100px] md:h-[290px] my-5" data-aos="zoom-in">
          <Image
            src="/categories/banner/electronics.png"
            alt="announcement"
            fill
            className="w-full h-auto"
          />
        </div>

        {/* New Arrivals Section */}
        <div className="mb-margin overflow-hidden">
          <DealsSlider
            title="New Arrivals"
            subtitle="Straight from the container"
            icon={null}
            topBarClass="bg-dark-olive/50 text-white rounded-t-modular border-b border-white/10"
            titleClass="text-[1.2rem] font-bold"
            subtitleClass="text-[0.7rem] opacity-70"
            rightAction="See more"
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="min-w-[150px] bg-white rounded-modular p-normal"
              >
                <ProductCard {...p} id={p.id} />
              </div>
            ))}
          </DealsSlider>
        </div>

        {/* Filters and Search Results Grid */}
        <div className="flex gap-normal mb-normal px-intra">
          <button className="flex items-center gap-intra bg-dark-olive border border-white/10 px-4 py-2 rounded-modular hover:bg-white/10 transition-colors cursor-pointer text-[0.9rem] font-bold">
            <FaFilter size={14} className="text-primary" /> Filter
          </button>
          <button className="flex items-center gap-intra bg-dark-olive border border-white/10 px-4 py-2 rounded-modular hover:bg-white/10 transition-colors cursor-pointer text-[0.9rem] font-bold">
            Sort <FaChevronDown size={14} className="text-primary" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-pad mb-margin">
          {gridResults.map((item) => (
            <SearchCard key={item.id} {...item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-intra mb-margin">
          <button className="w-margin h-margin bg-primary rounded-full flex items-center justify-center text-very-dark-olive hover:scale-110 transition-transform cursor-pointer shadow-md">
            <FaChevronLeft size={12} />
          </button>
          <button className="w-margin h-margin border border-white/20 rounded-full flex items-center justify-center text-[1rem] bg-white text-very-dark-olive font-bold">
            1
          </button>
          <button className="w-margin h-margin border border-white/20 rounded-full flex items-center justify-center text-[1rem] hover:bg-white/10 transition-colors cursor-pointer font-bold">
            2
          </button>
          <button className="w-margin h-margin border border-white/20 rounded-full flex items-center justify-center text-[1rem] hover:bg-white/10 transition-colors cursor-pointer font-bold">
            3
          </button>
          <button className="w-margin h-margin bg-primary rounded-full flex items-center justify-center text-very-dark-olive hover:scale-110 transition-transform cursor-pointer shadow-md">
            <FaChevronRight size={12} />
          </button>
        </div>

        {/* Recently Viewed */}
        <div className="mt-margin pt-margin border-t border-white/10 overflow-hidden">
          <DealsSlider
            title="Viewed Recently"
            subtitle=""
            icon={null}
            topBarClass="bg-dark-olive/50 text-white rounded-t-modular border-b border-white/10"
            titleClass="text-[1.2rem] font-bold"
            rightAction="See more"
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="min-w-[150px] bg-white rounded-modular p-normal"
              >
                <ProductCard {...p} id={p.id} />
              </div>
            ))}
          </DealsSlider>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
