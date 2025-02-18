import React from 'react';
import { Binary, ArrowRight, Copy, CheckCircle2 } from 'lucide-react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { convertToDNA } from '../utils/dnaConverter';

interface BinaryToDNAProps {
  binaryInput: string;
  onBinaryInputChange: (value: string) => void;
}

export function BinaryToDNA({ binaryInput, onBinaryInputChange }: BinaryToDNAProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  const dnaSequence = convertToDNA(binaryInput);

  return (
    <div className="max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
        <Binary className="w-8 h-8" />
        Binary to DNA Converter
      </h2>
      
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { binary: '00', dna: 'A', color: 'bg-indigo-900/40' },
          { binary: '01', dna: 'T', color: 'bg-indigo-900/40' },
          { binary: '10', dna: 'C', color: 'bg-indigo-900/40' },
          { binary: '11', dna: 'G', color: 'bg-indigo-900/40' },
        ].map(({ binary, dna, color }) => (
          <div key={binary} className={`${color} p-4 rounded-lg text-center backdrop-blur-sm border border-indigo-500/20`}>
            <div className="text-sm font-mono text-indigo-400">{binary}</div>
            <div className="text-2xl font-bold text-white">{dna}</div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900/30 rounded-lg backdrop-blur-sm border border-indigo-500/20 p-6 mb-8">
        <label className="block text-sm font-medium text-indigo-400 mb-2">
          Enter Binary Sequence:
        </label>
        <input
          type="text"
          value={binaryInput}
          onChange={(e) => onBinaryInputChange(e.target.value)}
          placeholder="Enter binary (e.g., 00011011)"
          className="w-full p-3 bg-indigo-900/40 border border-indigo-500/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-white placeholder-indigo-300/40"
        />
      </div>

      <div className="flex justify-center mb-8">
        <ArrowRight className="w-8 h-8 text-indigo-400" />
      </div>

      <div className="bg-indigo-900/30 rounded-lg backdrop-blur-sm border border-indigo-500/20 p-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-indigo-400">
            DNA Sequence:
          </label>
          <button
            onClick={() => copyToClipboard(dnaSequence)}
            className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition"
          >
            {copied ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="p-3 bg-indigo-900/40 rounded-lg font-mono text-lg border border-indigo-500/20">
          {dnaSequence || 'DNA sequence will appear here'}
        </div>
      </div>
    </div>
  );
}