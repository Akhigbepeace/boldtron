import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard(props) {
  const { id, title, price, image } = props;

  return (
    <div className="overflow-hidden flex flex-col bg-white h-full">
      <Link
        href={`/product/${id || "1"}`}
        className="cursor-pointer flex flex-col flex-1"
      >
        <Image
          src="/clipper.png"
          alt={title || "product"}
          width={150}
          height={150}
        />

        <h3 className="text-very-dark-olive text-base font-light">{title}</h3>
      </Link>

      <div className="flex gap-5 items-center">
        <p className="text-custom-gray text-sm font-normal">
          <s> ₦ 10,000</s>
        </p>

        <p className="text-very-dark-olive font-bold text-sm">{price}</p>
      </div>
    </div>
  );
}
