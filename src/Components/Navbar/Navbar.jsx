import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import NavbarButton from "../NavbarButton/NavbarButton";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <div className={styles['logo-container']}>
        <button className={styles['logo-button']} onClick={handleLogoClick}>
          <img className={styles['logo']} src={require("../../Images/WAI-logo.png")} alt="WAI Logo" />
        </button>
        <div className={styles['logo-text-container']}>
          <p>Western</p>
          <p>Autonomous Racing</p>
        </div>
      </div>
      <div className={`${styles['nav-container']} ${isMenuOpen && styles['menu-open']}`}>
        <nav>
          <NavbarButton name={'Home'} hrefTag={'/'} />
          <NavbarButton name={'Overview'} hrefTag={'/overview'} />
          <NavbarButton name={'Contact'} hrefTag={'/contact'} />
        </nav>
      </div>
      <div className={styles['nav-menu']} onClick={handleMenuToggle}>
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </header>
  )
}

export default Navbar;