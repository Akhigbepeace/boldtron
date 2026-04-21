import React from "react";
import Image from "next/image";
import { FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { id, title, oldPrice, newPrice, color, quantity } = item;

  return (
    <div className="bg-white rounded-modular p-pad flex gap-normal items-center mb-normal group shadow-sm border border-transparent hover:border-primary/20 transition-all">
      {/* Product Image */}
      <div className="w-[100px] h-[100px] relative bg-bg-input rounded-modular overflow-hidden shrink-0">
        <Image src={item.image || "/clipper-2.png"} alt={title} fill className="object-contain" />
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col gap-intra">
        <div className="flex justify-between items-start">
          <h3 className="text-very-dark-olive text-[0.9rem] font-bold leading-tight max-w-[80%]">
            {title}
          </h3>
          <button 
            onClick={() => onRemove(id, color)}
            className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors cursor-pointer"
          >
            <FaTrash size={16} />
          </button>
        </div>

        <div className="flex items-center gap-normal text-[0.8rem]">
          <span className="text-custom-gray line-through">&#8358; {oldPrice}</span>
          <span className="text-very-dark-olive font-bold">&#8358; {newPrice}</span>
          <span className="text-green-600 font-bold ml-intra">Available</span>
        </div>

        <div className="text-[0.8rem] text-very-dark-olive mb-intra">
          <span className="font-bold">Color:</span> {color}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-intra mt-auto">
          <button 
            onClick={() => onUpdateQuantity(id, color, Math.max(1, quantity - 1))}
            className="w-8 h-8 bg-primary rounded-modular flex items-center justify-center text-very-dark-olive hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          >
            <FaChevronLeft size={10} />
          </button>
          
          <div className="w-12 h-8 bg-bg-input rounded-modular flex items-center justify-center text-[0.9rem] font-bold text-very-dark-olive">
            {quantity}
          </div>

          <button 
            onClick={() => onUpdateQuantity(id, color, quantity + 1)}
            className="w-8 h-8 bg-primary rounded-modular flex items-center justify-center text-very-dark-olive hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          >
            <FaChevronRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
