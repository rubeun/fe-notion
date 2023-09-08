/**
 * Navigation links 
 * TEMP - Hardcoded for now
 */
import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h3 className={styles.navTitle}><a href="/">YourUni</a></h3>
      <ul className={styles.navLinks}>
        <li><a href="/" className={styles.navActive}>Product</a></li>
        <li><a href="/">Download</a></li>
        <li><a href="/">Pricing</a></li>
      </ul>
    </nav>

  );
}

export default NavBar;