"use client";

import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import {
  FaFilter,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import DealsSlider from "@/components/DealsSlider";
import ProductCard from "@/components/ProductCard";
import SearchCard from "@/components/SearchCard";

const heroSectionData = {
  phones: "/categories/phones.png",
  electronics: "/categories/electronics.png",
  "cooking-appliance": "/categories/cooking-appliance.png",
  computer: "/categories/computer.png",
  fashion: "/categories/computer.png",
  automobile: "/categories/computer.png",
  "office-products": "/categories/computer.png",
  "sport-accessories": "/categories/computer.png",
  "power-generation": "/categories/computer.png",
};

const CategoryPage = ({ params }) => {
  const { slug } = use(params);

  const normalizedSlug = decodeURIComponent(slug)
    .toLowerCase()
    .replace(/\s+/g, "-");

  const image = heroSectionData[normalizedSlug];

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  // Filter / sort state
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
  const [activeRating, setActiveRating] = useState(0);

  // Fetch category + products from json-server
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch category info by slug
        const catRes = await fetch(
          `http://localhost:3001/categories?slug=${slug}`,
        );
        const catData = await catRes.json();

        if (catData.length > 0) {
          const currentCat = catData[0];
          setCategory(currentCat);

          // Build products query
          let query = `?categoryId=${currentCat.id}`;
          if (sortBy === "price-low") query += "&_sort=newPrice&_order=asc";
          if (sortBy === "price-high") query += "&_sort=newPrice&_order=desc";
          if (sortBy === "newest") query += "&_sort=dateAdded&_order=desc";

          const prodRes = await fetch(`http://localhost:3001/products${query}`);
          let prodData = await prodRes.json();

          // Client-side range / rating filtering
          prodData = prodData.filter(
            (p) =>
              parseInt(p.newPrice) >= priceRange.min &&
              parseInt(p.newPrice) <= priceRange.max &&
              (activeRating === 0 || p.rating >= activeRating),
          );

          setProducts(prodData);
        }
      } catch (error) {
        console.error("Failed to fetch category data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, sortBy, priceRange, activeRating]);

  if (loading && !category) {
    return (
      <div className="bg-very-dark-olive min-h-screen text-white flex items-center justify-center font-lato text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato">
      <div className="bg-dark-olive text-center py-intra text-[0.8rem] font-bold">
        Order with call: 0808 352 4016
      </div>

      <div className="w-full px-pad max-md:px-normal">
        {/* ── Hero Section ───────────────────────── */}
        <div
          className="bg-linear-to-r from-pink-700/30 to-purple-700/30 backdrop-blur-xl relative w-full h-[80px] md:h-[290px] mt-20 my-5 flex items-center justify-between pr-20"
          data-aos="zoom-in"
        >
          {/* Overlay with dynamic category name */}
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg capitalize ml-10">
            {decodeURIComponent(slug)}
          </h1>

          <Image
            src={image}
            alt={normalizedSlug}
            width={350}
            height={350}
            // className="w-full h-auto object-cover"
          />
        </div>

        {/* ── New Arrivals / Popular in Category ───────────────────────── */}
        {products.length !== 0 && (
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
                  <ProductCard
                    {...p}
                    id={p.id}
                    price={p.newPrice ? `₦ ${p.newPrice}` : p.price}
                  />
                </div>
              ))}
            </DealsSlider>
          </div>
        )}

        {/* ── Filter & Sort bar ─────────────────────────────────────────── */}
        <div className="flex gap-normal mb-normal px-intra relative">
          {/* Filter button + dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowFilter(!showFilter);
                setShowSort(false);
              }}
              className="flex items-center gap-intra bg-dark-olive border border-white/10 px-4 py-2 rounded-modular hover:bg-white/10 transition-colors cursor-pointer text-[0.9rem] font-bold"
            >
              <FaFilter size={14} className="text-primary" /> Filter
            </button>

            {showFilter && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-olive border border-white/10 rounded-modular shadow-2xl z-50 p-4">
                <h4 className="font-bold mb-3 border-b border-white/10 pb-2">
                  Filter By
                </h4>

                {/* Price Range */}
                <div className="mb-4">
                  <p className="text-xs text-custom-gray mb-2">Price Range</p>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full bg-very-dark-olive border border-white/10 p-1 text-xs rounded"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          min: parseInt(e.target.value) || 0,
                        })
                      }
                    />
                    <span className="text-white/50">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full bg-very-dark-olive border border-white/10 p-1 text-xs rounded"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          max: parseInt(e.target.value) || 2000000,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <p className="text-xs text-custom-gray mb-2">
                    Minimum Rating
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() =>
                          setActiveRating(star === activeRating ? 0 : star)
                        }
                        className={`transition-colors ${
                          activeRating >= star
                            ? "text-primary"
                            : "text-white/20"
                        }`}
                      >
                        <FaStar size={16} />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setPriceRange({ min: 0, max: 2000000 });
                    setActiveRating(0);
                  }}
                  className="w-full mt-4 text-[0.7rem] text-primary hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Sort button + dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowSort(!showSort);
                setShowFilter(false);
              }}
              className="flex items-center gap-intra bg-dark-olive border border-white/10 px-4 py-2 rounded-modular hover:bg-white/10 transition-colors cursor-pointer text-[0.9rem] font-bold"
            >
              Sort <FaChevronDown size={14} className="text-primary" />
            </button>

            {showSort && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-dark-olive border border-white/10 rounded-modular shadow-2xl z-50 overflow-hidden">
                {[
                  { label: "Default", val: "default" },
                  { label: "Price: Low to High", val: "price-low" },
                  { label: "Price: High to Low", val: "price-high" },
                  { label: "Newest First", val: "newest" },
                ].map((option) => (
                  <button
                    key={option.val}
                    onClick={() => {
                      setSortBy(option.val);
                      setShowSort(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-white/5 transition-colors ${
                      sortBy === option.val
                        ? "text-primary font-bold"
                        : "text-white/70"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Products Grid ─────────────────────────────────────────────── */}
        {products.length === 0 && !loading ? (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-modular">
            <p className="text-custom-gray">
              No products found for this category or filters.
            </p>
            <button
              onClick={() => {
                setPriceRange({ min: 0, max: 2000000 });
                setActiveRating(0);
              }}
              className="text-primary mt-2 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-pad mb-margin">
            {products.map((item) => (
              <SearchCard key={item.id} {...item} />
            ))}
          </div>
        )}

        {/* ── Pagination ────────────────────────────────────────────────── */}
        {products.length > 20 && (
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
        )}

        {/* ── Recently Viewed ───────────────────────────────────────────── */}
        {recentlyViewedProducts && (
          <div className="mt-margin pt-margin border-t border-white/10 overflow-hidden">
            <DealsSlider
              title="Viewed Recently"
              subtitle=""
              icon={null}
              topBarClass="bg-dark-olive/50 text-white rounded-t-modular border-b border-white/10"
              titleClass="text-[1.2rem] font-bold"
              rightAction="See more"
            >
              {products.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="min-w-[150px] bg-white rounded-modular p-normal"
                >
                  <ProductCard
                    {...p}
                    id={p.id}
                    price={p.newPrice ? `₦ ${p.newPrice}` : p.price}
                  />
                </div>
              ))}
            </DealsSlider>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
