import React from 'react';

const stats = [
  { value: '1M+', label: 'Sequences Encoded' },
  { value: '99.9%', label: 'Accuracy Rate' },
  { value: '200+', label: 'Daily Users' },
  { value: '50K+', label: 'Conversions' },
];

export function Stats() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="bg-purple-900/20 rounded-xl p-6 text-center backdrop-blur-sm">
          <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
          <div className="text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}