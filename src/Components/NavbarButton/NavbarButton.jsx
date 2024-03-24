import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./NavbarButton.module.css";

const NavbarButton = ({ name, hrefTag }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedActiveButton = localStorage.getItem('ACTIVE_NAVBAR_BUTTON');
    if (savedActiveButton) {
      const parsedActiveButton = JSON.parse(savedActiveButton);
      if (parsedActiveButton === name) {
        setIsActive(true);
      }
    }
  }, [name]);

  useEffect(() => {
    if (location.pathname === hrefTag) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname, hrefTag]);

  const handleButtonClick = () => {
    setIsActive(true);
    localStorage.setItem('ACTIVE_NAVBAR_BUTTON', JSON.stringify(name));
  };

  return (
    <Link to={hrefTag} className={isActive ? styles['active'] : ''}>{name}</Link>
  )
}

export default NavbarButton;