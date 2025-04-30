import React from "react";
import { Link } from 'react-router-dom';
import './css/navvar.css';  

const Navvar = () => {
  return (
    <>
      <header className="navbar-header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                src="https://img.freepik.com/premium-vector/ninja-logo-template-flat-style_23-2148999873.jpg?w=360"
                alt="Logo"
                className="logo-img"
              />
            </Link>
          </div>
          <nav>
            <ul>
              <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/student" style={{ color: 'inherit', textDecoration: 'none' }}>Course</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Career</Link></li>
            </ul>
          </nav>
          <Link to="/bookFreeclass">
          <div className="button-container">
            <button className="navbar-button">Book your seat now</button>
          </div>

          </Link>
        </div>
      </header>
    </>
  );
};

export default Navvar;
































































































































