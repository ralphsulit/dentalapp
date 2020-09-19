import React from 'react';
import './Navigation.css'

const Navigation = () => {
  return(
    <nav className="container">
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <ul className="navbar">
        <li>
          <button className="link nav-btn">Home</button>
        </li>
        <li>
          <button className="link nav-btn">Home</button>
          <ul className="dropmenu">
            <li><button className="link nav-btn">drop</button></li>
            <li><button className="link nav-btn">drop</button></li>
          </ul>
        </li>
        <li>
          <button className="link nav-btn">Home</button>
        </li>
        <li>
          <button className="link nav-btn">Home</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;