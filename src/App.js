import React from 'react';
import logo from './logo.svg';
import './App.css';
import ms from './packages/MicahSynth0.8.0.pkg.zip'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href={ms} download>Micah Synth Beta Download (Mac Only)</a>
      </header>
    </div>
  );
}

export default App;
