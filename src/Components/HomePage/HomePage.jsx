import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles['home-container']}>
      <div className={styles['home']}>
        <div className={styles['info-container']}>
          <div className={styles['title']}>
            <h1>Western</h1>
            <h1 className={styles['title-autonomous-racing-text']}>Autonomous Racing</h1>
          </div>
          <p className={styles['summary']}>
            Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src={require("../../Images/WAR-logo.png")} alt="WAR Logo" className={styles['war-logo']} />
      </div>
    </div>
  )
}

export default HomePage;