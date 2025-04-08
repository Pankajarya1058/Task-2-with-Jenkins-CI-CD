import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Pankaj');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name}!</h1>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </header>
    </div>
  );
}

export default App;
