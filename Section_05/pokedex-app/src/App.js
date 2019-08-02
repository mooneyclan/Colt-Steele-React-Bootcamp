import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Pokedex } from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div>
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
