import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { BinaryToDNA } from './components/BinaryToDNA';
import { TextToDNA } from './components/TextToDNA';
// import { DNAtoText } from './components/DNAToText';
import { StorageDensity } from './components/StorageDensity';
import { Documentation } from './components/Documentation';
import { DNADecrypter } from './components/DNADecrypter';

function App() {
  const [binaryInput, setBinaryInput] = useState('');
  const [textInput, setTextInput] = useState('');
  // const [dnaInput, setDnaInput] = useState('');

  const converterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const dnaRef = useRef<HTMLDivElement>(null);

  const scrollToConverter = () => {
    converterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTextConverter = () => {
    textRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#1a1625] text-white">
        <Navigation onTryTextConverter={scrollToTextConverter} />
        
        <div className="container mx-auto px-4 py-16">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero onTryConverter={scrollToConverter} />
                  <Stats />

                  <div ref={converterRef} className="mt-24 space-y-16">
                    <div className="bg-indigo-900/20 rounded-2xl p-8 backdrop-blur-sm border border-indigo-500/20">
                      <BinaryToDNA 
                        binaryInput={binaryInput}
                        onBinaryInputChange={setBinaryInput}
                      />
                      {/* <TextToDNA
                        textInput={textInput}
                        onTextInputChange={setTextInput}
                      /> */}
                      <div ref={textRef} className="bg-indigo-900/20 rounded-2xl p-8 backdrop-blur-sm border border-indigo-500/20">
                        <TextToDNA
                          textInput={textInput}
                          onTextInputChange={setTextInput}
                        />
                      </div>

                      <div ref={dnaRef} className="rounded-3xl p-3 backdrop-blur-sm border border-indigo-500/20">
                      </div>    

                      {/* <div ref={dnaRef} className="bg-indigo-900/20 rounded-2xl p-8 backdrop-blur-sm border border-indigo-500/20">
                        <DNAtoText
                          dnaInput={dnaInput}
                          onDnaInputChange={setDnaInput}
                        />
                      </div>     */}

                    </div>

                    {/* <History /> */}

                    <StorageDensity />
                  </div>
                </>
              } 
            />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/decrypter" element={<DNADecrypter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
