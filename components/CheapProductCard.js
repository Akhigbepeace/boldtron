import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CheapProductCard(props) {
  const { id, title, oldPrice, newPrice } = props;

  return (
    <div className="block group hover:scale-105 transition-transform duration-300 hover:backdrop-brightness-100 hover:shadow-2xl">
      <div className="text-white p-normal flex gap-normal items-center h-full transition-shadow duration-300">
        {/* Left side: Image layout */}
        <Image src="/clipper-2.png" alt={title} width={150} height={150} />

        {/* Right side: Prices and Add to Cart */}
        <div className="flex-1 flex flex-col justify-center gap-intra">
          <Link
            href={`/product/${id || "1"}`}
            className="hover:opacity-80 transition-opacity"
          >
            <h3 className="text-base font-light">{title}</h3>
          </Link>

          <div className="space-x-5">
            <span className="line-through text-xs font-light opacity-50 font-lato">
              &#8358; {oldPrice}
            </span>
            <span className="text-base font-bold">&#8358; {newPrice}</span>
          </div>

          <button className="bg-primary hover:bg-primary/80 cursor-pointer text-dark-olive transition-colors py-[6px] px-normal rounded-modular font-catamaran font-bold text-[0.85rem] w-fit shadow-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
