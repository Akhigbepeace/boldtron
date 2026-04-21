import React from 'react';
import Link from 'next/link';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="bg-very-dark-olive min-h-screen text-white font-lato flex items-center justify-center p-normal">
      <div className="text-center flex flex-col items-center gap-intra max-w-md w-full bg-dark-olive/50 p-margin rounded-modular border border-white/10 backdrop-blur-md shadow-2xl">
        <FaExclamationTriangle className="text-primary text-6xl mb-4 animate-pulse" />
        <h1 className="text-6xl font-bold font-catamaran text-white mb-2">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-custom-gray">Page Not Found</h2>
        <p className="text-white/70 mb-margin text-center">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="flex items-center gap-intra bg-primary hover:bg-primary/80 text-very-dark-olive font-bold py-3 px-margin rounded-modular transition-colors shadow-lg"
        >
          <FaHome size={18} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
