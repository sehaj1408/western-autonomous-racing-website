import styles from "./OverviewPage.module.css";
import React, { Component } from 'react';
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const OverviewPage = () => {
  return (
    <div className={styles['overview-container']}>
      <div className={styles['overview-container-2']}>
        <div className={`${styles['section-title-text-container']} ${styles['photo-text-container']}`}>
          <div className={styles['horizontal-line']}></div>
          <div className={styles['section-title-text']}>Gallery</div>
          <div className={styles['horizontal-line']}></div>
        </div>
        <div className={styles['carousel']}>
          <ImageCarousel />
        </div>
        <div className={`${styles['section-title-text-container']} ${styles['video-text-container']}`}>
          <div className={styles['horizontal-line']}></div>
          <div className={styles['section-title-text']}>Video</div>
          <div className={styles['horizontal-line']}></div>
        </div>
        <div className={styles['video']}>
          <YoutubeEmbed embedId="XIxxdxKqV5I" />
        </div>
      </div>
    </div >
  )
}

export default OverviewPage;