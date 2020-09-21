import React from 'react';
import './Navigation.css'

const Navigation = () => {
  return(
    <nav className="container">
      <div className="logo pointer">
        <h4>Logo</h4>
      </div>
      <ul className="navbar">
        <li>
          <button className="link nav-btn pointer">Home</button>
        </li>
        <li className="dropmenu">
          <button className="link nav-btn pointer">Home</button>
          <div className="dropdown-content">
            <ul>
              <li><button className="link nav-btn">drop</button></li>
              <li><button className="link nav-btn">drop</button></li>
              <li><button className="link nav-btn">drop</button></li>
              <li><button className="link nav-btn">drop</button></li>  
            </ul>
          </div>
        </li>
        <li>
          <button className="link nav-btn pointer">Home</button>
        </li>
        <li>
          <button className="link nav-btn pointer">Home</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;