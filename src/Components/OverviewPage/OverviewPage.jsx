import styles from "./OverviewPage.module.css";
import React, { Component } from 'react';
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import TeamMember from "../TeamMember/TeamMember";

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
        <div className={`${styles['section-title-text-container']} ${styles['team-text-container']}`}>
          <div className={styles['horizontal-line']}></div>
          <div className={styles['section-title-text']}>Team</div>
          <div className={styles['horizontal-line']}></div>
        </div>
        <div className={styles['team-outer-container']}>
          <div className={styles['team-container']}>
            <TeamMember name={'Alexander Van Hoeve'} position={'NA'} linkedInUsername={'alexander-van-hoeve'} imagePath={'Alexander-Van-Hoeve.png'} />
            <TeamMember name={'Daniel Xie'} position={'NA'} linkedInUsername={'daniel-xie-2001'} imagePath={'Daniel-Xie.png'} />
            <TeamMember name={'Lucas Hartman'} position={'NA'} linkedInUsername={'lucashartman2021'} imagePath={'Lucas-Hartman.png'} />
            <TeamMember name={'Michael Wong'} position={'NA'} linkedInUsername={'wongm3079'} imagePath={'Michael-Wong.png'} />
            <TeamMember name={'Piotr Nowak'} position={'NA'} linkedInUsername={'pnowak5'} imagePath={'Piotr-Nowak.png'} />
            <TeamMember name={'Rishit Mehley'} position={'NA'} linkedInUsername={'rishit-mehley-667600198'} imagePath={'Rishit-Mehley.png'} />
            <TeamMember name={'Sehaj Naangal'} position={'NA'} linkedInUsername={'sehajnaangal'} imagePath={'Sehaj-Naangal.png'} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default OverviewPage;