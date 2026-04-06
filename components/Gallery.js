"use client";

import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-normal">
      <div className="bg-white rounded-modular p-pad border border-[#eee] flex items-center justify-center min-h-[400px] overflow-hidden shadow-sm">
        {/* Placeholder for the main image visual */}
        <Image
          src="/clipper-2.png"
          alt="product image"
          width={380}
          height={380}
        />
      </div>

      <div className="flex gap-normal overflow-x-auto pb-intra">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImage(img)}
            className={`w-[60px] h-[60px] rounded-modular border-2 cursor-pointer flex items-center justify-center bg-white shrink-0 shadow-sm transition-all ${activeImage === img ? "border-primary" : "border-transparent"}`}
          >
            <Image
              src="/clipper-2.png"
              alt="product image"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
