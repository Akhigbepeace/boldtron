import Image from "next/image";
import React from "react";

export default function HeadphoneFeature() {
  return (
    <section
      className="flex bg-very-dark-olive overflow-hidden h-[300px] max-md:h-auto max-md:flex-col mb-margin"
      data-aos="fade-up"
    >
      <div className="relative w-full h-full">
        <Image src="/headset.png" alt="headset" fill sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      <div className="p-pad flex flex-col justify-center text-custom-gray text-base">
        <h3 className="font-bold mb-intra text-white">
          Wireless vs. Wired: Which Headphones Should You Buy in 2026?
        </h3>

        <p className="mb-intra leading-relaxed">
          The audio world has shifted drastically over the last few years. While
          Bluetooth technology has matured significantly, offering near-lossless
          sound quality, there is still a massive cult following for wired gear.
          Whether you are an audiophile, a daily commuter, or a hardcore gamer,
          the choice between wireless and wired is more complex than ever.{" "}
          <br /> If you are constantly on the move, wireless earbuds or
          headphones are unmatched. The freedom from cables allows for seamless
          transition from the gym to the office. Wired headphones still offer
          superior sound reproduction, particularly for high-resolution audio.
          There is no battery to charge, and you don’t have to worry about
          connectivity issues in crowded spaces.
        </p>
      </div>
    </section>
  );
}
