import styles from "./OverviewPage.module.css";
import React, { Component } from 'react';
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

const OverviewPage = () => {
  return (
    <div className={styles['overview-container']}>
      <div className={`${styles['section-title-text-container']} ${styles['photo-text-container']}`}>
        <div className={styles['horizontal-line']}></div>
        <div className={styles['section-title-text']}>Gallery</div>
        <div className={styles['horizontal-line']}></div>
      </div>
      {/* <Carousel>
        <div>
          <img src={require("../../Images/Website-Gallery-Images/image-1.jpg")} alt="Image 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
      <div className={`${styles['section-title-text-container']} ${styles['video-text-container']}`}>
        <div className={styles['horizontal-line']}></div>
        <div className={styles['section-title-text']}>Video</div>
        <div className={styles['horizontal-line']}></div>
      </div>
      <div className={styles['video']}>
        <YoutubeEmbed embedId="XIxxdxKqV5I" />
      </div>
    </div >
  )
}

export default OverviewPage;