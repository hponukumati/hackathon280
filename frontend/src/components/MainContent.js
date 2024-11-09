// MainContent.js
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <h2>Ask a Question</h2>
      <input type="text" placeholder="Enter your query here" />
      <button>Submit</button>

      <div className="slider">
        <h3>1961 - 2020</h3>
        <input type="range" min="1961" max="2020" />
      </div>

      <div className="response">
        <h3>Response:</h3>
        <p>Your answer will appear here.</p>
      </div>
    </div>
  );
};

export default MainContent;
