import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const goToWebsite = (url) => {
    window.open(url, '_blank');
  }

  const openMail = () => {
    const email = 'danxie2001@gmail.com';
    const mailLink = `mailto:${email}`;
    window.location.href = mailLink;
  }

  return (
    <div className={styles['contact-container']}>
      <div className={styles['contact']}>
        <div className={styles['contact-text-and-info-container']}>
          <h1 className={styles['contact-us-text']}>Contact Us</h1>
          <div>
            <div className={styles['contact-info-container']}>
              <h2 className={styles['contact-name']}>Western Autonomous Racing</h2>
              <div className={styles['contact-buttons-container']}>
                <button>
                  <img src={require('../../Images/Github-Icon.png')} alt="Github Icon" onClick={() => goToWebsite('https://github.com/Western-Autonomous-Racing')} />
                </button>
                <button>
                  <img src={require('../../Images/Mail-Icon.png')} alt="Mail Icon" onClick={openMail} />
                </button>
              </div>
            </div>
            <div className={styles['contact-info-container']}>
              <h2 className={styles['contact-name']}>Western AI</h2>
              <div className={styles['contact-buttons-container']}>
                <button>
                  <img src={require('../../Images/LinkedIn-Icon.png')} alt="LinkedIn Icon" onClick={() => goToWebsite('https://www.linkedin.com/company/westernuai/mycompany/')} />
                </button>
                <button>
                  <img src={require('../../Images/Instagram-Icon.png')} alt="Instagram Icon" onClick={() => goToWebsite('https://www.instagram.com/westernu.ai/')} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={require('../../Images/Contact-Image.png')} alt="Contact Image" className={styles['contact-image']} />
      </div>
    </div>
  )
}

export default ContactPage;