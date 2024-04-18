import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./NavbarButton.module.css";

const NavbarButton = ({ name, hrefTag, onMenuChange }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === hrefTag) {
      localStorage.setItem('ACTIVE_NAVBAR_BUTTON', JSON.stringify(hrefTag));
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname, hrefTag]);

  return (
    <Link to={hrefTag} className={isActive ? styles['active'] : ''} onClick={onMenuChange}>{name}</Link>
  )
}

export default NavbarButton;