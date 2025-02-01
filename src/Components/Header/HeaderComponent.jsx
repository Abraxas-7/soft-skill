import React, { useState, useEffect } from "react";
import styles from "./HeaderComponent.module.css";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const images = [
    "https://www.lagunatravel.it/wp-content/uploads/2024/04/slide-05-partenone-laguna-travel-agency.jpg",
    "https://www.lagunatravel.it/wp-content/uploads/2024/03/slide-02-cappadocia-laguna-travel-agency.jpg",
    "https://www.lagunatravel.it/wp-content/uploads/2024/04/slide-09-amsterdam-laguna-travel-agency.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.jumbotron}>
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

        <img
          src={images[currentImageIndex]}
          alt="Jumbotron"
          className={styles.image}
        />
      </header>
    </div>
  );
}

export default HeaderComponent;
