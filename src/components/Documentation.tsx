import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Documentation() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 text-gray-300">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">DNAcrypt Documentation</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">Overview</h2>
        <p>
          DNAcrypt is a tool that converts binary data into DNA sequences using the mapping:
          <code className="bg-gray-800 px-2 py-1 rounded-md ml-2">00 → A, 01 → T, 10 → C, 11 → G</code>.
          It also supports text-to-DNA encoding by first converting text into binary.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">Features</h2>
        <ul className="list-disc pl-6">
          <li>Binary to DNA conversion</li>
          <li>Text to DNA conversion</li>
          <li>Copy to clipboard functionality</li>
          <li>Minimalistic and intuitive UI</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">How It Works</h2>
        <p>
          Enter binary or text input, and DNAcrypt will generate the corresponding DNA sequence.
          The app also provides easy-to-use copy functionality for quick access to results.
        </p>
      </section>
      <section><p>---</p></section>
      <button 
        onClick={() => navigate('/')} 
        className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-6 py-3 rounded-lg transition"
      >
        Back to Home
      </button>
    </div>
  );
}
