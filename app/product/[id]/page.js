"use client";

import React, { useState, useEffect, use } from "react";
import Button from "../../../components/Button";
import Gallery from "../../../components/Gallery";
import ReviewItem from "../../../components/ReviewItem";
import DealsSlider from "../../../components/DealsSlider";
import ProductCard from "../../../components/ProductCard";
import { useCart } from "../../../components/CartProvider";
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
  const { id } = use(params);

  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState("");
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products/${id}`);
        const data = await res.json();
        setProduct(data);

        if (data.colors && data.colors.length > 0) {
          setActiveColor(data.colors[0]);
        }

        // Fetch Similar Products
        const similarRes = await fetch(
          `http://localhost:3001/products?categoryId=${data.categoryId}`,
        );
        const similarData = await similarRes.json();
        setSimilarProducts(similarData.filter((p) => p.id !== id).slice(0, 8));

        // Handle Recently Viewed
        let viewed = JSON.parse(
          localStorage.getItem("boldtron_recently_viewed") || "[]",
        );
        // Remove if exists to push to top
        viewed = viewed.filter((p) => p.id !== data.id);
        viewed.unshift(data);
        // Keep only last 10
        if (viewed.length > 10) viewed = viewed.slice(0, 10);

        localStorage.setItem(
          "boldtron_recently_viewed",
          JSON.stringify(viewed),
        );

        // Exclude current product from recently viewed display
        setRecentlyViewed(viewed.filter((p) => p.id !== data.id));
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-very-dark-olive min-h-screen text-white flex items-center justify-center font-lato text-2xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-very-dark-olive min-h-screen text-white flex items-center justify-center font-lato text-2xl">
        Product Not Found
      </div>
    );
  }

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
            <Gallery images={product.images || [product.image]} />
          </div>

          {/* Info Column */}
          <div className="flex-1 flex flex-col gap-pad" data-aos="fade-left">
            <div>
              <h1 className="text-[1.8rem] font-catamaran font-bold leading-tight mb-intra">
                {product.title}
              </h1>

              <div className="flex items-center gap-normal mb-intra">
                <div className="flex text-primary text-[0.9rem]">
                  {[...Array(Math.floor(product.rating || 5))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {product.rating % 1 !== 0 && <FaStarHalfAlt />}
                </div>
                <span className="text-custom-gray text-[0.8rem] border-l border-custom-gray pl-normal">
                  {product.boughtCount || 0} bought
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
              {product.colors && product.colors.length > 0 && (
                <div className="flex gap-normal mb-normal">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setActiveColor(color)}
                      className={`px-normal py-1 rounded-full text-[0.75rem] border transition-all ${activeColor === color ? "bg-primary text-very-dark-olive border-primary" : "bg-transparent border-custom-gray text-custom-gray"}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              )}

              <div className="mb-pad">
                <span className="text-custom-gray line-through text-[1rem]">
                  &#8358; {product.oldPrice?.toLocaleString()}
                </span>
                <div className="flex items-center gap-normal mt-1">
                  <span className="bg-primary text-very-dark-olive text-[0.7rem] px-2 py-0.5 rounded font-bold">
                    -
                    {Math.round(
                      ((product.oldPrice - product.newPrice) /
                        product.oldPrice) *
                        100,
                    )}
                    %
                  </span>
                  <span className="text-[2.2rem] font-bold text-white leading-none">
                    &#8358; {product.newPrice?.toLocaleString()}
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

                <div
                  onClick={() => {
                    addToCart(product, quantity, activeColor);
                    alert("Added to cart!");
                  }}
                >
                  <Button className="py-3 px-[40px] font-catamaran font-bold text-[1rem]">
                    Add to cart
                  </Button>
                </div>
              </div>

              <p className="text-[0.8rem] italic">
                Delivery between 24 March - 30 March
              </p>
            </div>

            <div className="border-t border-white/10 pt-pad text-[0.85rem] text-white">
              <h3 className="font-catamaran font-bold text-[1.1rem] mb-intra">
                About Product
              </h3>
              <p className="leading-relaxed mb-intra whitespace-pre-wrap">
                {product.description}
              </p>
            </div>

            {/* Reviews Section */}
            <div
              className="mb-margin rounded-modular overflow-hidden border border-dark-olive border-opacity-30"
              data-aos="fade-up"
            >
              <div className="bg-dark-olive/50 px-pad py-intra text-[1.2rem] font-catamaran font-bold border-b border-dark-olive">
                Customer Reviews ({product.reviews?.length || 0})
              </div>

              <div className="bg-white p-pad text-very-dark-olive">
                {/* Summary */}
                <div className="flex flex-col items-center mb-margin pb-margin border-b border-[#eee]">
                  <div className="flex text-primary text-[1.5rem] mb-intra">
                    {[...Array(Math.floor(product.rating || 5))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {product.rating % 1 !== 0 && <FaStarHalfAlt />}
                  </div>
                  <div className="text-[1.2rem] font-bold">
                    {product.rating}/5{" "}
                    <span className="text-custom-gray font-normal text-[0.9rem]">
                      ({product.reviews?.length || 0} ratings)
                    </span>
                  </div>
                </div>

                {/* List */}
                <div className="flex flex-col">
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((rev, i) => (
                      <ReviewItem key={i} {...rev} />
                    ))
                  ) : (
                    <p className="text-center text-custom-gray py-4">
                      No reviews yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Sliders */}
        {similarProducts.length > 0 && (
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
        )}

        {recentlyViewed.length > 0 && (
          <DealsSlider
            title="Viewed Recently"
            subtitle=""
            icon={null}
            topBarClass="bg-dark-olive/30 text-white"
            titleClass="text-[1.2rem]"
            subtitleClass=""
            rightAction={recentlyViewed.length > 4 ? "See more" : null}
          >
            {recentlyViewed.map((p, i) => (
              <div key={i} className="min-w-[150px]">
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
        )}
      </div>
    </div>
  );
}
