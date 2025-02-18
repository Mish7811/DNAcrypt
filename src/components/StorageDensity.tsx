import React from 'react';
import { Scale, Type, Database } from 'lucide-react';

export function StorageDensity() {
  return (
    <div className="max-w-4xl mx-auto bg-cyan-900/20 rounded-2xl backdrop-blur-sm border border-cyan-500/20 p-12">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
        <Scale className="w-10 h-10" />
        Incredible Storage Density
      </h2>
      
      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="bg-cyan-500/20 p-4 rounded-xl">
            <Type className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Text Example</h3>
            <p className="text-gray-300 text-lg">
              The phrase "Hello, I am Mishal." weighs only 3.83 × 10<sup>-23</sup> kg when stored in DNA!
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="bg-cyan-500/20 p-4 rounded-xl">
            <Database className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Massive Storage, Tiny Space</h3>
            <p className="text-gray-300 text-lg">
              A gigabyte of data stored in DNA would weigh just a few picograms - that's trillions of times lighter than traditional storage!
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-cyan-500/10 rounded-xl">
          <p className="text-lg text-cyan-300 italic">
            DNA storage is revolutionizing data preservation, offering unprecedented storage density that could fit all of humanity's data in a space the size of a few sugar cubes.
          </p>
        </div>
      </div>
    </div>
  );
}