import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-[40px] pb-pad font-lato">
      <div className="w-full max-w-[1200px] mx-auto px-pad max-md:px-normal">
        <div className="flex justify-between gap-margin mb-margin">
          <div className="flex items-center gap-intra mb-pad">
            <div className="w-margin h-margin bg-primary"></div>
            <span className="font-nova text-[1.2rem] tracking-[1px]">
              BOLDTRON
            </span>
          </div>

          <div className="flex justify-end gap-normal mb-pad">
            <div className="bg-[#25D366] p-[8px] rounded-[4px] cursor-pointer hover:opacity-80 transition-opacity">
              <FaWhatsapp color="white" size={20} />
            </div>
            <div className="bg-[#1877F2] p-[8px] rounded-[4px] cursor-pointer hover:opacity-80 transition-opacity">
              <FaFacebookF color="white" size={20} />
            </div>
            <div className="bg-linear-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[8px] rounded-[4px] cursor-pointer hover:opacity-80 transition-opacity">
              <FaInstagram color="white" size={20} />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col lg:flex-row justify-between gap-margin mb-margin">
          <div className="flex flex-col gap-normal text-[#ccc] text-[0.9rem]">
            <div className="flex items-center gap-normal">
              <FaPhoneAlt className="text-primary" />
              <span>+234 906 525 4521</span>
            </div>
            <div className="flex items-center gap-normal">
              <FaEnvelope className="text-primary" />
              <span>sales@boldtrontechnologieslimited.com</span>
            </div>
            <div className="flex items-center gap-normal">
              <FaMapMarkerAlt className="text-primary" />
              <span>141 Agege moto way, Mushin Idi-oro, Lagos</span>
            </div>
          </div>

          <div className="text-white max-w-[600px]">
            <h4 className="font-catamaran mb-normal">
              Boldtron Technologies Limited
            </h4>
            <p className="text-xs leading-[1.6]">
              A long description of the company will be here. A long description
              of the company will be here. A long description of the company
              will be here. A long description of the company will be here.
              <br />A long description of the company will be here. A long
              description of the company will be here. A long description of the
              company will be here. A long description of the company will be
              here.
            </p>
          </div>
        </div>

        <div className="border-t border-[#333] pt-pad flex flex-col items-center gap-pad text-[0.85rem] text-[#ccc]">
          <div className="flex gap-normal">
            <Link
              href="#"
              className="cursor-pointer hover:text-white transition-colors"
            >
              Terms and Conditions
            </Link>
            <span>|</span>
            <Link
              href="#"
              className="cursor-pointer hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="#"
              className="cursor-pointer hover:text-white transition-colors"
            >
              Return Policy
            </Link>
          </div>

          <Image
            src="/payment-channels.png"
            alt="payment"
            width={210}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />

          <div>&copy; 2026. Boldtron Technologies Limited</div>
        </div>
      </div>
    </footer>
  );
}
