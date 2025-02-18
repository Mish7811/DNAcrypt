import React from 'react';
import { useHistory } from '../hooks/useHistory';

export function History() {
  const { history, clearHistory } = useHistory();

  return (
    <div className="max-w-3xl mx-auto my-16 p-6 bg-indigo-900/20 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-400 mb-4">Conversion History</h2>

      {history.length === 0 ? (
        <p className="text-gray-400">No history available.</p>
      ) : (
        <ul className="space-y-3">
          {history.map((item, index) => (
            <li key={index} className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-500/20">
              <div className="text-sm text-gray-400">Input: {item.input}</div>
              <div className="text-white font-mono">Output: {item.output}</div>
            </li>
          ))}
        </ul>
      )}

      {history.length > 0 && (
        <button onClick={clearHistory} className="mt-4 px-4 py-2 bg-red-600 rounded-lg">
          Clear History
        </button>
      )}
    </div>
  );
}
