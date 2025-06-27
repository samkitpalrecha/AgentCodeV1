// Toolbar.jsx
import React from 'react';

export default function Toolbar({ onRun }) {
  return (
    <div className="toolbar">
      <button onClick={onRun}>Run ▶️</button>
      <button disabled>Debug 🐞</button>
      <button disabled>Test ✅</button>
      <button disabled>Explain 💡</button>
    </div>
  );
}