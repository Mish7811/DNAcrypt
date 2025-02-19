import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dnaToBinary, binaryToText } from '../utils/dnaConverter';

export function DNADecrypter() {
  const navigate = useNavigate();
  const [dnaInput, setDnaInput] = useState('');
  const binaryText = dnaToBinary(dnaInput);
  const decryptedText = binaryToText(binaryText);

  return (
    <div className="container mx-auto px-4 py-8 text-gray-300">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">DNA Decrypter</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">Decrypt DNA to Text</h2>
        <p>Enter a DNA sequence to decode it back into readable text.</p>
      </section>

      <div className="mb-6">
        <label className="block text-sm font-medium text-purple-300 mb-2">
          Enter DNA Sequence:
        </label>
        <input
          type="text"
          value={dnaInput}
          onChange={(e) => setDnaInput(e.target.value)}
          placeholder="Enter DNA sequence (e.g., ATCG)"
          className="w-full p-3 bg-gray-800 border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-white placeholder-gray-400"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-purple-300">Binary Sequence:</h3>
        <div className="p-3 bg-gray-800 rounded-lg font-mono text-sm border border-purple-500 break-all">
          {binaryText || 'Binary sequence will appear here'}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-purple-300">Decrypted Text:</h3>
        <div className="p-3 bg-gray-800 rounded-lg font-mono text-lg border border-purple-500 break-all">
          {decryptedText || 'Decrypted text will appear here'}
        </div>
      </div>

      <button 
        onClick={() => navigate('/')} 
        className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition text-white"
      >
        Back to Home
      </button>
    </div>
  );
}
