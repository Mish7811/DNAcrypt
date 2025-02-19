import React from 'react';

interface DnaStorageSizeProps {
  dnaSequence: string;
}

export function DnaStorageSize({ dnaSequence }: DnaStorageSizeProps) {
  const calculateDnaMass = (sequence: string): number => {
    const avgNucleotideWeight = 330; // Dalton (Da)
    const avogadroNumber = 6.022e23; // molecules per mole

    // Number of nucleotides in the DNA sequence
    const numNucleotides = sequence.length;

    // Estimated mass in grams
    return (numNucleotides * avgNucleotideWeight) / avogadroNumber;
  };

  const dnaMass = calculateDnaMass(dnaSequence);

  return (
    <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/20 text-center">
      <h3 className="text-lg font-semibold text-indigo-400">Estimated DNA Storage Size</h3>
      <p className="text-indigo-300">
        Approx. <span className="font-bold">{dnaMass.toExponential(5)}</span> grams of DNA required
      </p>
    </div>
  );
}
