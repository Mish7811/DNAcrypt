import React from 'react';
import { Type, ArrowDown, Copy, CheckCircle2 } from 'lucide-react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { textToBinary, convertToDNA } from '../utils/dnaConverter';
import { DnaStorageSize } from './DnaStorageSize';

interface TextToDNAProps {
  textInput: string;
  onTextInputChange: (value: string) => void;
}

export function TextToDNA({ textInput, onTextInputChange }: TextToDNAProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  const textBinary = textToBinary(textInput);
  const textDNA = convertToDNA(textBinary);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
        <Type className="w-8 h-8" />
        Text to DNA Converter
      </h2>

      <div className="bg-indigo-900/30 rounded-lg backdrop-blur-sm border border-indigo-500/20 p-6 mb-8">
        <label className="block text-sm font-medium text-indigo-400 mb-2">
          Enter Text:
        </label>
        <input
          type="text"
          value={textInput}
          onChange={(e) => onTextInputChange(e.target.value)}
          placeholder="Enter text to convert (e.g., Hello)"
          className="w-full p-3 bg-indigo-900/40 border border-indigo-500/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-white placeholder-indigo-300/40"
        />
      </div>

      <div className="bg-indigo-900/30 rounded-lg backdrop-blur-sm border border-indigo-500/20 p-6 mb-8">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-indigo-400">
            Binary Sequence:
          </label>
        </div>
        <div className="p-3 bg-indigo-900/40 rounded-lg font-mono text-sm border border-indigo-500/20 break-all">
          {textBinary || 'Binary sequence will appear here'}
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <ArrowDown className="w-8 h-8 text-[#0080ff]" />
      </div>

      <div className="bg-indigo-900/30 rounded-lg backdrop-blur-sm border border-indigo-500/20 p-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-indigo-400">
            DNA Sequence:
          </label>
          <button
            onClick={() => copyToClipboard(textDNA)}
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
        <div className="p-3 mt-5 mb-3 bg-indigo-900/40 rounded-lg font-mono text-lg border border-indigo-500/20 break-all">
          {textDNA || 'DNA sequence will appear here'}
        </div>
        <DnaStorageSize dnaSequence={textDNA} />
      </div>
    </div>
  );
}