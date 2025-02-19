import React from 'react';
import { Type, ArrowLeft, Copy, CheckCircle2 } from 'lucide-react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { dnaToBinary, binaryToText } from '../utils/dnaConverter';

interface DNAtoTextProps {
  dnaInput: string;
  onDnaInputChange: (value: string) => void;
}

export function DNAtoText({ dnaInput, onDnaInputChange }: DNAtoTextProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  const binaryText = dnaToBinary(dnaInput);
  const decryptedText = binaryToText(binaryText);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
        <Type className="w-8 h-8" />
        DNA to Text Decryptor
      </h2>

      <div className="bg-indigo-900/30 rounded-lg backdrop-blur-sm border border-indigo-500/20 p-6 mb-8">
        <label className="block text-sm font-medium text-indigo-400 mb-2">
          Enter DNA Sequence:
        </label>
        <input
          type="text"
          value={dnaInput}
          onChange={(e) => onDnaInputChange(e.target.value)}
          placeholder="Enter DNA sequence (e.g., ATCG)"
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
          {binaryText || 'Binary sequence will appear here'}
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <ArrowLeft className="w-8 h-8 text-indigo-400" />
      </div>

      <div className="bg-indigo-900/30 rounded-lg backdrop-blur-sm border border-indigo-500/20 p-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-indigo-400">
            Decrypted Text:
          </label>
          <button
            onClick={() => copyToClipboard(decryptedText)}
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
        <div className="p-3 bg-indigo-900/40 rounded-lg font-mono text-lg border border-indigo-500/20 break-all">
          {decryptedText || 'Decrypted text will appear here'}
        </div>
      </div>
    </div>
  );
}
