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
            <TeamMember imagePath={'Daniel-Xie.png'} name={'Daniel Xie'} position={'Software Developer'} websiteLink={'https://danielxie.me/'}
              githubLink={'https://github.com/d4n13lx13'} linkedinLink={'https://www.linkedin.com/in/daniel-xie-2001/'}
            />
            <TeamMember imagePath={'Michael-Wong.png'} name={'Michael Wong'} position={'Software Developer'} websiteLink={'https://michaelewong.ca/'}
              githubLink={'https://github.com/wongm3079'} linkedinLink={'https://www.linkedin.com/in/wongm3079/'}
            />
            <TeamMember imagePath={'Sehaj-Naangal.png'} name={'Sehaj Naangal'} position={'Software Developer'} websiteLink={'https://sehajnaangal.vercel.app/'}
              githubLink={'https://github.com/sehaj1408'} linkedinLink={'https://www.linkedin.com/in/sehajnaangal/'}
            />
            <TeamMember imagePath={'Alexander-Van-Hoeve.png'} name={'Alexander Van Hoeve'} position={'Hardware Engineer'}
              githubLink={'https://github.com/avanhoev'} linkedinLink={'https://www.linkedin.com/in/alexander-van-hoeve/'}
            />
            <TeamMember imagePath={'Piotr-Nowak.png'} name={'Piotr Nowak'} position={'Hardware Engineer'}
              githubLink={'https://github.com/UMER1S'} linkedinLink={'https://www.linkedin.com/in/pnowak5/'}
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default OverviewPage;