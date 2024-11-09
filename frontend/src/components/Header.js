// src/components/Header.js
import React from 'react';
//import logo from '../assets/logo1.png';

const Header = () => {
  return (
    <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{ backgroundColor: 'grey' }}>
      {/* <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        <img src={logo} alt="Logo" style={{ maxWidth: '50px', maxHeight: '50px' }} />
      </a> */}
      <div className="navbar-brand col-md-3 col-lg-2 me-auto px-3 text-center">
        <h4 className="mb-0">Macroeconomic Researcher Dashboard</h4>
      </div>
      <div className="nav-item dropdown ms-auto">
        <select className="form-select" aria-label="Country select">
          <option value="1" selected>USA</option>
          <option value="2">India</option>
          <option value="3">China</option>
          <option value="4">Ecuador</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
