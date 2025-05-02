import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '+'
  ];

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {buttons.map((char) => (
            <button key={char} onClick={() => handleClick(char)}>{char}</button>
          ))}
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
