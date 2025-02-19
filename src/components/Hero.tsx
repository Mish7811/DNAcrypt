import React from 'react';
import { Binary, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onTryConverter: () => void;
}

export function Hero({ onTryConverter }: HeroProps) {
  return (
    <div className="grid grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6">
          Secure Binary with
          <br />
          <span className="text-purple-400">DNA Encoding</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Transform your binary data into DNA sequences using our advanced encoding system.
          Secure, efficient, and biologically inspired.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={onTryConverter}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition flex items-center gap-2"
          >
            <Binary className="w-5 h-5" />
            Try Converter
          </button>
          <Link to="/documentation" className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-6 py-3 rounded-lg transition">
              Learn More
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="relative">
          <Shield className="w-64 h-64 mx-auto text-purple-400 opacity-80" />
        </div>
      </div>
    </div>
  );
}