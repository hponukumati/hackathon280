// App.js
import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-area">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
