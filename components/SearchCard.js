import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const SearchCard = ({ id, title, oldPrice, newPrice, rating }) => {
  // Helper to render stars
  const renderStars = (num) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(num)) {
        stars.push(<FaStar key={i} className="text-primary" />);
      } else if (i === Math.ceil(num) && num % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-primary" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-primary" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex bg-very-dark-olive border border-white/5 rounded-modular overflow-hidden hover:border-primary/30 transition-all group h-[160px]">
      {/* Left: Image */}
      <Link href={`/product/${id || "1"}`} className="w-[140px] shrink-0 bg-white flex items-center justify-center p-intra">
        <div className="relative w-full h-full">
            <Image src="/clipper-2.png" alt={title} fill className="object-contain group-hover:scale-110 transition-transform" />
        </div>
      </Link>

      {/* Right: Info */}
      <div className="flex-1 p-normal flex flex-col justify-between">
        <div>
          <Link href={`/product/${id || "1"}`}>
            <h3 className="text-white text-[0.85rem] font-bold leading-tight mb-1 hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>
          
          <div className="flex items-center gap-intra text-[0.75rem]">
            <span className="text-custom-gray line-through">&#8358; {oldPrice}</span>
            <span className="text-primary font-bold">&#8358; {newPrice}</span>
          </div>

          <div className="flex items-center gap-0.5 mt-1">
            {renderStars(rating || 4)}
          </div>
        </div>

        <button className="bg-primary text-very-dark-olive text-[0.75rem] font-bold py-1.5 px-pad rounded-modular w-fit hover:bg-white transition-colors active:scale-95 cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
