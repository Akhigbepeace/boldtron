"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "sunday@example.com", // Mocked read-only
    state: "",
    city: "",
    address: "",
    note: "",
  });

  const cartSummary = [
    { name: "Vilcan aloe vera moisturiser", qty: 1, cost: 1260 },
    { name: "Vilcan aloe vera moisturiser", qty: 1, cost: 1260 },
    { name: "Vilcan aloe vera moisturiser", qty: 1, cost: 1260 },
  ];

  const subtotal = cartSummary.reduce((acc, item) => acc + item.cost, 0);
  const deliveryFee = 1260;
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato py-margin">
      <div className="w-full max-w-[1200px] mx-auto px-pad max-md:px-normal">
        {/* Header */}
        <div className="flex items-center gap-normal mb-margin">
          <Link
            href="/cart"
            className="w-margin h-margin flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
          >
            <FaArrowLeft size={18} />
          </Link>
          <h1 className="text-[1.3rem] font-catamaran font-bold">
            Checkout Order
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-margin items-start">
          {/* Main Form area */}
          <div className="flex-2 flex flex-col gap-margin w-full">
            {/* Contact Details Card */}
            <div className="bg-white rounded-modular p-pad text-very-dark-olive shadow-sm">
              <h2 className="text-[1.1rem] font-bold mb-pad font-catamaran">
                Contact details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-pad">
                <div className="flex flex-col gap-1">
                  <label className="text-[0.8rem] font-bold">Your Name</label>
                  <input
                    type="text"
                    className="w-full border border-custom-gray/30 rounded-modular p-2 outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[0.8rem] font-bold">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-custom-gray/30 rounded-modular p-2 outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1 md:col-span-1">
                  <label className="text-[0.8rem] font-bold">
                    Email (can't be changed)
                  </label>
                  <input
                    type="email"
                    disabled
                    value={formData.email}
                    className="w-full border border-custom-gray/30 rounded-modular p-2 bg-gray-50 text-custom-gray cursor-not-allowed"
                  />
                </div>
              </div>
              <p className="text-[0.7rem] text-red-500 italic mt-margin">
                Please provide correct info, to enable us reach you for your
                delivery
              </p>
            </div>

            {/* Delivery Details Card */}
            <div className="bg-white rounded-modular p-pad text-very-dark-olive shadow-sm">
              <h2 className="text-[1.1rem] font-bold mb-pad font-catamaran">
                Delivery details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-pad mb-pad">
                <div className="flex flex-col gap-1">
                  <label className="text-[0.8rem] font-bold">State</label>
                  <select className="w-full border border-custom-gray/30 rounded-modular p-2 outline-none focus:border-primary transition-colors bg-white">
                    <option value="">Select State</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[0.8rem] font-bold">City</label>
                  <select className="w-full border border-custom-gray/30 rounded-modular p-2 outline-none focus:border-primary transition-colors bg-white">
                    <option value="">Select City</option>
                    <option value="Surulere">Surulere</option>
                    <option value="Ikeja">Ikeja</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-pad">
                <div className="flex flex-col gap-1">
                  <label className="text-[0.8rem] font-bold">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="w-full border border-custom-gray/30 rounded-modular p-2 outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[0.8rem] font-bold">Order Note</label>
                  <textarea
                    rows="3"
                    className="w-full border border-custom-gray/30 rounded-modular p-2 outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="flex-1 w-full flex flex-col gap-normal">
            {/* Order Summary Card */}
            <div className="bg-white rounded-modular overflow-hidden shadow-sm text-very-dark-olive">
              <div className="p-pad bg-gray-50 border-b border-[#eee]">
                <h2 className="text-[1rem] font-bold font-catamaran">
                  Your order summary
                </h2>
              </div>

              <table className="w-full text-left text-[0.85rem]">
                <thead className="bg-[#f2f2f2] border-b border-[#eee]">
                  <tr>
                    <th className="px-pad py-2 font-bold text-custom-gray">
                      Products
                    </th>
                    <th className="px-pad py-2 font-bold text-custom-gray text-right">
                      Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee]">
                  {cartSummary.map((item, i) => (
                    <tr key={i}>
                      <td className="px-pad py-3">
                        <span className="font-bold">{item.name}</span>
                        <span className="ml-intra font-bold text-custom-gray">
                          X {item.qty}
                        </span>
                      </td>
                      <td className="px-pad py-3 font-bold text-right text-[1rem]">
                        N{item.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-[#f2f2f2]/50 font-bold">
                  <tr>
                    <td className="px-pad py-2 text-custom-gray">
                      Cart Subtotal
                    </td>
                    <td className="px-pad py-2 text-right">N{subtotal}</td>
                  </tr>
                  <tr>
                    <td className="px-pad py-2 text-custom-gray">
                      Delivery fee**
                    </td>
                    <td className="px-pad py-2 text-right">N{deliveryFee}</td>
                  </tr>
                  <tr className="text-[1.2rem] bg-gray-200">
                    <td className="px-pad py-pad">TOTAL</td>
                    <td className="px-pad py-pad text-right">N{total}</td>
                  </tr>
                </tfoot>
              </table>

              <div className="p-pad flex flex-col gap-intra">
                <p className="text-[0.75rem] leading-tight">
                  To be delivered to{" "}
                  <span className="font-bold underline">
                    4 Browny cole street, Surulere, Lagos
                  </span>{" "}
                  between 24 March - 30 March
                </p>
                <button className="text-[0.7rem] text-right font-bold text-blue-500 hover:underline">
                  change address
                </button>
                <p className="text-[0.65rem] text-center text-red-500 italic mt-intra leading-tight">
                  ** The delivery fee is determined by the address provided in
                  the{" "}
                  <span className="underline font-bold">Delivery details</span>{" "}
                  section above
                </p>
              </div>
            </div>

            <Link href="/order-success">
              <button className="w-full bg-primary py-3 cursor-pointer rounded-modular font-catamaran font-bold text-base text-very-dark-olive transition-all shadow-md active:scale-95">
                Proceed to Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
