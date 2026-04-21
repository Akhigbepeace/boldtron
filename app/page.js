"use client";
import React, { useState, useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import CheapProductCard from "../components/CheapProductCard";
import DealsSlider from "../components/DealsSlider";
import CategoriesRow from "../components/CategoriesRow";
import HeadphoneFeature from "../components/HeadphoneFeature";
import { FaEgg, FaGift } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const horizontalProducts = products.slice(0, 12);
  const cheapProducts = products.filter(p => parseInt(p.newPrice) < 50000).slice(0, 6);

  if (loading) {
    return (
      <div className="bg-very-dark-olive min-h-screen text-white flex items-center justify-center font-lato text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato pb-margin">
      {/* Top Banner */}
      <div className="bg-dark-olive text-center py-intra text-[0.85rem] font-bold">
        Order with call: 0808 352 4016
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-pad max-md:px-normal">
        {/* Hero Section Carousel */}
        <HeroCarousel />

        {/* Categories Section */}
        <CategoriesRow />

        {/* Easter Deals Slider */}
        <DealsSlider
          title="Easter Deals"
          subtitle="00h : 20m : 32s"
          icon={<FaEgg className="text-white" size={24} />}
          topBarClass="bg-dark-olive text-white"
          titleClass="text-white"
          subtitleClass="text-primary"
          rightAction="See more"
        >
          {horizontalProducts.map((horizontalProduct, index) => (
            <div
              key={index}
              className="min-w-[150px] flex flex-col cursor-pointer group"
            >
              <ProductCard
                id={horizontalProduct.id}
                title={horizontalProduct.title}
                price={horizontalProduct.newPrice}
                description={horizontalProduct.title}
                image={horizontalProduct.image}
              />
            </div>
          ))}
        </DealsSlider>

        {/* CHEAP !! Section */}
        <section className="mb-margin" data-aos="fade-up">
          <div className="flex items-center gap-normal mb-pad">
            <FaGift className="text-white" size={30} />
            <div>
              <h3 className="font-catamaran text-xl font-bold leading-none text-white">
                CHEAP !!
              </h3>
              <span className="text-[0.8rem] text-primary">
                Less than &#8358;50,000
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-normal">
            {cheapProducts.map((p, i) => (
              <CheapProductCard
                key={i}
                id={p.id}
                title={p.title}
                oldPrice={p.oldPrice}
                newPrice={p.newPrice}
              />
            ))}
          </div>
        </section>

        {/* Trending Slider */}
        <DealsSlider
          title="Trending"
          subtitle="Lot of people love this"
          icon={<FaGift className="text-dark-olive" size={24} />}
          topBarClass="bg-white text-very-dark-olive"
          titleClass="text-dark-olive"
          subtitleClass="text-custom-gray"
          rightAction="See more"
        >
          {horizontalProducts.map((p, i) => (
            <div
              key={i}
              className="min-w-[150px] flex flex-col cursor-pointer group"
            >
              <ProductCard
                id={p.id}
                title={p.title}
                price={p.newPrice}
                description={p.title}
                image={p.image}
              />
            </div>
          ))}
        </DealsSlider>

        <div
          className="relative w-full h-[100px] lg:h-[230px] my-margin"
          data-aos="zoom-in"
        >
          <Image
            src="/announcement.png"
            alt="announcement"
            fill
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        {/* Feature Section */}
        <HeadphoneFeature />
      </div>
    </div>
  );
};

export default Home;
