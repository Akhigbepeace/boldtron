"use client";

import React from "react";
import { FaCheckCircle, FaGift } from "react-icons/fa";
import CheapProductCard from "@/components/CheapProductCard";
import DealsSlider from "@/components/DealsSlider";
import ProductCard from "@/components/ProductCard";

const OrderSuccess = () => {
  const cheapProducts = [
    {
      id: "cp-s1",
      title: "Professional Hair Clippers Wireless Hair Trimmer Hi...",
      oldPrice: "10,000",
      newPrice: "3,000",
    },
    {
      id: "cp-s2",
      title: "Professional Hair Clippers Wireless Hair Trimmer Hi...",
      oldPrice: "10,000",
      newPrice: "3,000",
    },
  ];

  const mockProducts = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: `ms-${i}`,
      title: "MATIHO One-piece...",
      price: "3,000",
    }));

  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato py-margin">
      <div className="w-full max-w-[1200px] mx-auto px-pad max-md:px-normal">
        {/* Hero Section & Cheap Sidebar Area */}
        <div className="flex flex-col lg:flex-row gap-margin items-start mb-margin">
          {/* Main Success Message */}
          <div className="flex-1 flex flex-col items-center justify-center bg-transparent py-[50px] w-full">
            <FaCheckCircle className="text-green-500 mb-normal" size={100} />
            <h1 className="text-[2rem] font-catamaran font-bold mb-intra">
              Order Confirmed
            </h1>
            <p className="text-[1rem] opacity-80 mb-normal">
              Order ID: 1234-456-7890
            </p>
            <button className="bg-primary py-3 px-20 cursor-pointer rounded-modular font-catamaran font-bold text-base text-very-dark-olive transition-all shadow-md active:scale-95 w-fit">
              Track Order
            </button>
          </div>

          {/* Cheap Sidebar */}
          <div className="w-full lg:w-[350px] flex flex-col gap-pad">
            <div className="flex items-center gap-intra">
              <FaGift className="text-white" size={30} />
              <div>
                <h3 className="font-catamaran text-xl font-bold leading-none text-white">
                  CHEAP !!!
                </h3>
                <p className="text-[0.7rem] text-primary">Less than ₦ 50,000</p>
              </div>
            </div>
            <div className="flex flex-col gap-normal">
              {cheapProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white/5 rounded-modular border border-white/10 overflow-hidden"
                >
                  <CheapProductCard {...p} id={p.id} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Products Slider */}
        <div className="mb-margin overflow-hidden">
          <DealsSlider
            title="Trending Products"
            subtitle=""
            icon={null}
            topBarClass="bg-dark-olive/50 text-white rounded-t-modular"
            titleClass="text-[1.2rem] font-bold"
            subtitleClass=""
            rightAction={null}
          >
            {mockProducts.map((p) => (
              <div
                key={p.id}
                className="min-w-[150px] bg-white rounded-modular p-normal"
              >
                <ProductCard {...p} id={p.id} />
              </div>
            ))}
          </DealsSlider>
        </div>

        {/* Viewed Recently Slider */}
        <div className="overflow-hidden">
          <DealsSlider
            title="Viewed Recently"
            subtitle=""
            icon={null}
            topBarClass="bg-dark-olive/50 text-white rounded-t-modular"
            titleClass="text-[1.2rem] font-bold"
            subtitleClass=""
            rightAction="See more"
          >
            {mockProducts.map((p) => (
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

export default OrderSuccess;
