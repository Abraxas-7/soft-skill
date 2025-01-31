import React, { useState } from "react";
import styles from "./HeaderComponent.module.css";

function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
