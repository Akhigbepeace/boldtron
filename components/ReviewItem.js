import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function ReviewItem({ name, rating, status, text, date }) {
  return (
    <div className="py-pad border-b border-[#eee] last:border-0">
      <div className="flex justify-between items-start mb-intra">
        <div>
          <h4 className="font-bold text-very-dark-olive text-[0.95rem]">{name}</h4>
          <div className="flex text-primary text-[0.7rem] my-1">
            {[...Array(5)].map((_, i) => (
              i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
            ))}
          </div>
          <span className="text-green-600 font-bold text-[0.85rem]">{status}</span>
        </div>
        <span className="text-custom-gray text-[0.7rem]">{date}</span>
      </div>
      <p className="text-custom-gray text-[0.9rem] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
