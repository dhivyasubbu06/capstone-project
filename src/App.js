


import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {'123+456-789*0./'.split('').map((char) => (
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
