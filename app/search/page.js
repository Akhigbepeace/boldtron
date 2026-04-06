"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaFilter, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SearchCard from "@/components/SearchCard";
import DealsSlider from "@/components/DealsSlider";
import ProductCard from "@/components/ProductCard";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Mock results data
  const results = Array(9).fill(null).map((_, i) => ({
    id: `search-${i}`,
    title: "Professional Hair Clippers Wireless Hair Trimmer Hi...",
    oldPrice: "10,000",
    newPrice: "3,000",
    rating: 4.2
  }));

  const mockViewedRecently = Array(8).fill(null).map((_, i) => ({
    id: `viewed-${i}`,
    title: "MATIHO One-piece...",
    price: "3,000",
  }));

  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato">
      {/* Top Banner */}
      <div className="bg-dark-olive text-center py-intra text-[0.8rem] font-bold">
        Order with call: 0808 352 4016
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-pad max-md:px-normal py-margin">
        {/* Controls Bar */}
        <div className="flex gap-normal mb-margin px-intra">
          <button className="flex items-center gap-intra bg-dark-olive/50 border border-white/10 px-4 py-2 rounded-modular hover:bg-white/10 transition-colors cursor-pointer text-[0.9rem] font-bold">
            <FaFilter size={14} className="text-primary" /> Filter
          </button>
          <button className="flex items-center gap-intra bg-dark-olive/50 border border-white/10 px-4 py-2 rounded-modular hover:bg-white/10 transition-colors cursor-pointer text-[0.9rem] font-bold">
            Sort <FaChevronDown size={14} className="text-primary" />
          </button>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-pad mb-margin">
          {results.map((item) => (
            <SearchCard key={item.id} {...item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-intra mb-margin">
          <button className="w-margin h-margin bg-primary rounded-full flex items-center justify-center text-very-dark-olive hover:scale-110 transition-transform cursor-pointer">
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
          <button className="w-margin h-margin bg-primary rounded-full flex items-center justify-center text-very-dark-olive hover:scale-110 transition-transform cursor-pointer">
            <FaChevronRight size={12} />
          </button>
        </div>

        {/* Viewed Recently slider */}
        <div className="mt-margin pt-margin border-t border-white/10">
          <DealsSlider
            title="Viewed Recently"
            subtitle=""
            icon={null}
            topBarClass="bg-dark-olive/50 text-white rounded-t-modular"
            titleClass="text-[1.2rem] font-bold"
            rightAction="See more"
          >
            {mockViewedRecently.map((p) => (
              <div key={p.id} className="min-w-[150px] bg-white rounded-modular p-normal">
                <ProductCard {...p} id={p.id} />
              </div>
            ))}
          </DealsSlider>
        </div>
      </div>
    </div>
  );
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="bg-very-dark-olive min-h-screen">Loading results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
