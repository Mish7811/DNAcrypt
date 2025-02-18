import React from 'react';
import { Dna } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  onTryTextConverter: () => void;
}

export function Navigation({ onTryTextConverter }: NavigationProps) {
  return (
    <nav className="border-b border-purple-900/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dna className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-semibold">DNAcrypt</span>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/documentation" className="text-gray-400 hover:text-purple-400 transition">
              Documentation
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-purple-400 transition">
              About
            </Link>
            <button 
            onClick={onTryTextConverter}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
