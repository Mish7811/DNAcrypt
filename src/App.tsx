import React, { useState, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { BinaryToDNA } from './components/BinaryToDNA';
import { TextToDNA } from './components/TextToDNA';
import { StorageDensity } from './components/StorageDensity';

function App() {
  const [binaryInput, setBinaryInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const converterRef = useRef<HTMLDivElement>(null);

  const scrollToConverter = () => {
    converterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1a1625] text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <Hero onTryConverter={scrollToConverter} />
        <Stats />

        <div ref={converterRef} className="mt-24 space-y-16">
          <div className="bg-indigo-900/20 rounded-2xl p-8 backdrop-blur-sm border border-indigo-500/20">
            <BinaryToDNA 
              binaryInput={binaryInput}
              onBinaryInputChange={setBinaryInput}
            />
            <TextToDNA 
              textInput={textInput}
              onTextInputChange={setTextInput}
            />
          </div>

          <StorageDensity />
        </div>
      </div>
    </div>
  );
}

export default App;