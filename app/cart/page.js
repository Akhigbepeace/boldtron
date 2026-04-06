"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import DealsSlider from "@/components/DealsSlider";
import ProductCard from "@/components/ProductCard";

const defaultItems = [
  {
    id: "cp-1",
    title: "Professional Hair Clippers Wireless Hair Trimmer High-end battery",
    oldPrice: "10,000",
    newPrice: "12,333", // Modified price to match subtotal logic
    color: "Black",
    quantity: 1,
  },
  {
    id: "cp-2",
    title: "Professional Hair Clippers Wireless Hair Trimmer High-end battery",
    oldPrice: "10,000",
    newPrice: "12,333",
    color: "Black",
    quantity: 1,
  },
  {
    id: "cp-3",
    title: "Professional Hair Clippers Wireless Hair Trimmer High-end battery",
    oldPrice: "10,000",
    newPrice: "12,333",
    color: "Black",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(defaultItems);

  // Handle quantity updates
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  // Handle item removal
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.newPrice.replace(/,/g, ""));
      return acc + price * item.quantity;
    }, 0);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const mockRelatedProducts = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: `rp-${i}`,
      title: "MATIHO One-piece...",
      price: "₦ 3,000",
    }));

  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato">
      <div className="w-full max-w-[1200px] mx-auto px-pad max-md:px-normal py-margin">
        <h1 className="text-[1.5rem] font-catamaran font-bold mb-normal">
          Your Cart ({totalItems})
        </h1>

        <div className="flex flex-col lg:flex-row gap-margin items-start">
          {/* Cart Items List */}
          <div className="flex-1 w-full">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))
            ) : (
              <div className="bg-white/5 rounded-modular p-margin text-center">
                <p className="text-custom-gray mb-normal text-[1.1rem]">
                  Your cart is empty
                </p>
                <Link
                  href="/"
                  className="bg-primary text-very-dark-olive px-6 py-3 rounded-modular font-bold hover:scale-105 transition-transform inline-block"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Summary Sidebar */}
          <div className="w-full lg:w-[350px] bg-white rounded-modular p-pad text-very-dark-olive shadow-lg sticky top-pad">
            <div className="flex items-center gap-3 mb-pad">
              <span className="text-sm inline-block text-custom-gray">
                Your cart Subtotal ({totalItems} items):
              </span>
              <div className="text-base font-bold">
                &#8358;{subtotal.toLocaleString()}
              </div>
            </div>

            <Link href="/checkout">
              <button className="w-full bg-primary py-3 cursor-pointer rounded-modular font-catamaran font-bold text-base hover:bg-dark-olive hover:text-primary transition-all shadow-md active:scale-95">
                Checkout (&#8358;{subtotal.toLocaleString()})
              </button>
            </Link>
          </div>
        </div>

        {/* Wishlist Slider */}
        <div className="mt-margin pt-margin border-t border-white/10">
          <DealsSlider
            title="Wishlist"
            subtitle=""
            icon={null}
            topBarClass="bg-dark-olive/50 text-white rounded-t-modular"
            titleClass="text-[1.2rem] font-bold"
            subtitleClass=""
            rightAction={null}
          >
            {mockRelatedProducts.map((p) => (
              <div
                key={p.id}
                className="min-w-[150px] bg-white rounded-modular p-normal"
              >
                <ProductCard {...p} id={p.id} />
              </div>
            ))}
          </DealsSlider>
        </div>

        {/* Viewed Recently Slider */}
        <div className="mt-normal">
          <DealsSlider
            title="Viewed Recently"
            subtitle=""
            icon={null}
            topBarClass="bg-dark-olive/50 text-white rounded-t-modular"
            titleClass="text-[1.2rem] font-bold"
            subtitleClass=""
            rightAction="See more"
          >
            {mockRelatedProducts.map((p) => (
              <div
                key={p.id}
                className="min-w-[150px] bg-white rounded-modular p-normal"
              >
                <ProductCard {...p} id={p.id} />
              </div>
            ))}
          </DealsSlider>
        </div>
      </div>
    </div>
  );
};

export default Cart;
