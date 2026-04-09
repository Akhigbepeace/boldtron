"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTag, FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="border-b border-custom-gray py-normal px-pad">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-normal md:gap-0">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-intra cursor-pointer">
          <div className="w-margin h-margin bg-primary"></div>
          <span className="font-nova text-[1.2rem] tracking-[1px]">
            BOLDTRON
          </span>
        </Link>

        {/* Categories Link */}
        <div className="hidden md:flex items-center gap-intra cursor-pointer">
          <FaTag className="text-dark-olive" />
          <span className="font-bold text-very-dark-olive">Products</span>
          <MdKeyboardArrowDown size={20} />
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center w-full max-w-full md:max-w-[400px] my-0 md:mx-pad flex-1"
        >
          <div className="flex w-full bg-bg-input rounded-none overflow-hidden">
            <input
              type="text"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-none bg-transparent p-normal outline-none font-lato"
            />
            <button
              type="submit"
              className="bg-primary px-pad flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-dark-olive group"
            >
              <FaSearch
                size={18}
                className="text-very-dark-olive group-hover:text-primary transition-colors"
              />
            </button>
          </div>
        </form>

        {/* Right: User Menu and Cart */}
        <div className="flex items-center gap-normal">
          <Link
            href="/login"
            className="flex items-center gap-intra cursor-pointer"
          >
            <FaUserCircle size={22} className="text-dark-olive" />
            <span className="font-bold text-very-dark-olive">
              Hello, Sunday !
            </span>
            <MdKeyboardArrowDown size={20} />
          </Link>
          <Link
            href="/cart"
            className="pl-normal cursor-pointer text-dark-olive hover:text-very-dark-olive transition-colors"
          >
            <FaShoppingCart size={24} />
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex md:hidden items-center w-full max-w-full md:max-w-[400px] my-normal md:my-0 flex-1 flex w-full bg-bg-input rounded-none overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border-none bg-transparent outline-none font-lato pl-normal"
        />
        <button
          type="submit"
          className="bg-primary px-pad flex items-center justify-center cursor-pointer p-normal transition-colors duration-200 hover:bg-dark-olive group"
        >
          <FaSearch
            size={18}
            className="text-very-dark-olive group-hover:text-primary transition-colors"
          />
        </button>
      </form>
    </nav>
  );
}
