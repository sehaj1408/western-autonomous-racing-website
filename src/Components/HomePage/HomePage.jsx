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
            Western Autonomous Racing, a pioneering team, addresses the pressing issue of road safety by developing
            an innovative and cost-effective autonomous system. Our approach combines a stereo camera and an inertial
            measurement unit sensor suite, offering a promising alternative to expensive LiDAR sensors. By integrating
            data from these sensors into mapping and localization algorithms, we've achieved initial success with a
            proof-of-concept RC car. Our investigation focuses on enhancing sensor capabilities through additional
            cameras, wider field of view, and robust algorithm development. Click Overview to learn more about our project.
          </p>
        </div>
        <img src={require("../../Images/WAR-logo.png")} alt="WAR Logo" className={styles['war-logo']} />
      </div>
    </div>
  )
}

export default HomePage;