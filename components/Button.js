"use client";

import React from 'react';

export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const baseClasses = "font-catamaran p-normal px-6 rounded-modular inline-flex items-center justify-center gap-intra uppercase text-[0.9rem] font-bold transition-all duration-200 ease-in-out cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-very-dark-olive hover:bg-dark-olive hover:text-primary",
    secondary: "bg-white text-dark-olive border border-dark-olive hover:bg-light-yellow",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
