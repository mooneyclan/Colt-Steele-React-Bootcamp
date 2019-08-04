import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NumberGame } from './components/NumberGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NumberGame />
      </header>
    </div>
  );
}

export default App;
