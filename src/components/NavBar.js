/**
 * Navigation links 
 * TEMP - Hardcoded for now
 */
import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h3 className='nav-title'><a href="">YourUni</a></h3>
      <ul className="nav-links">
        <li><a href="" className='nav-active'>Product</a></li>
        <li><a href="">Download</a></li>
        <li><a href="">Pricing</a></li>
      </ul>
    </nav>

  );
}

export default NavBar;