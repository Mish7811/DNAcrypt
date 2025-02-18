import React from 'react';
import { Dna } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="border-b border-purple-900/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dna className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-semibold">DNAcrypt</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">About</a>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}