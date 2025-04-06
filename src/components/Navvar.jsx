import React from "react";
// import { Link } from 'react-router-dom';
import './css/navvar.css';  


const Navvar = () => {
  return (
    <>
      <header className="navbar-header">
        <div className="navbar">
          <div className="logo">
            <img
              src="https://img.freepik.com/premium-vector/ninja-logo-template-flat-style_23-2148999873.jpg?w=360"
              alt="Logo"
              className="logo-img"
            />
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Course</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="button-container">
            <button className="navbar-button">Book your seat now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navvar;
































































































































