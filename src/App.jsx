// App.jsx
import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import Toolbar from './components/Toolbar';
import OutputPane from './components/OutputPane';
import { runPython } from './utils/pyodideRunner';

export default function App() {
  const [code, setCode] = useState('# Write Python here');
  const [output, setOutput] = useState('');

  const handleRun = async () => {
    setOutput('Running…');
    try {
      const result = await runPython(code);
      setOutput(result);
    } catch (err) {
      setOutput(err.toString());
    }
  };

  return (
    <div
      className="app-container"
      style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'Segoe UI, Roboto, monospace'
      }}
    >
      
      {/* Left side: Toolbar + Editor */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Toolbar onRun={handleRun} />
        <div style={{ flex: 1, backgroundColor: '#f8f8f8', padding: '1rem' }}>
          <CodeEditor code={code} onChange={setCode} />
        </div>
      </div>

      {/* Right side: Output pane */}
      <div
      style={{
        width: '40%',
        minWidth: '300px',
        borderLeft: '1px solid #ccc',
        backgroundColor: '#1e1e1e',
        color: '#0f0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
    <h3 style={{ margin: '1rem', color: '#fff' }}>Output</h3>
    <div
      style={{
        padding: '1rem',
        flex: 1,
        overflowY: 'auto',
        backgroundColor: '#000',
        fontFamily: 'monospace',
        fontSize: '0.95rem',
        borderTop: '1px solid #444'
      }}
    >
      <OutputPane output={output} />
    </div>
  </div>
    </div>
  );
}