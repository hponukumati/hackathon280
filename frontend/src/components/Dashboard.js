// src/components/Dashboard.js
import React, { useState } from 'react';

const Dashboard = () => {
  const [startYear, setStartYear] = useState(1961);
  const [endYear, setEndYear] = useState(2020);

  const handleYearChange = (event) => {
    const { id, value } = event.target;
    if (id === 'slider-1') {
      setStartYear(value);
    } else {
      setEndYear(value);
    }
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="wrapper">
        <div className="values">
          <span id="range1">{startYear}</span>
          <span> &dash; </span>
          <span id="range2">{endYear}</span>
        </div>
        <input type="range" id="slider-1" min="1961" max="2020" value={startYear} onChange={handleYearChange} />
        <input type="range" id="slider-2" min="1961" max="2020" value={endYear} onChange={handleYearChange} />
      </div>
      <div id="draggable_playground">
        <p>Drag and drop to check graphs</p>
      </div>
    </main>
  );
};

export default Dashboard;
