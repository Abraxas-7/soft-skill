import React, { useState } from "react";
import styles from "./HeaderComponent.module.css";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${styles.header} ${styles.FontHeaderFooter}`}>
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink to="/about" className={styles.myLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className={styles.myLink}>
            Contact
          </NavLink>
        </li>
      </ul>
      <label htmlFor="menu-btn" className={styles.menuIcon}>
        <span className={styles.navicon}></span>
      </label>
      <a href="/" className={styles.logo}>
        Logo
      </a>
      <input
        type="checkbox"
        id="menu-btn"
        className={styles.menuBtn}
        checked={menuOpen}
        onChange={toggleMenu}
      />
    </header>
  );
}

export default HeaderComponent;
