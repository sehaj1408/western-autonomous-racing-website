import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles['contact']}>
      <div className={styles['info']}>
        <h1 className={styles['contact-us-text']}>Contact Us</h1>
        <div>
          <div>
            <h2 className={styles['contact-name']}>Western Autonomous Racing</h2>
            <div className={styles['contact-buttons-container']}>
              <button>
                <img src={require('../../Images/Github-Icon.png')} alt="Github Icon" />
              </button>
              <button>
                <img src={require('../../Images/Github-Icon.png')} alt="Github Icon" />
              </button>
            </div>
          </div>
          <div>
            <h2 className={styles['contact-name']}>Western AI</h2>
            <div className={styles['contact-buttons-container']}>
              <button>
                <img src={require('../../Images/Github-Icon.png')} alt="Github Icon" />
              </button>
              <button>
                <img src={require('../../Images/Github-Icon.png')} alt="Github Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={require('../../Images/Contact-Image.png')} alt="Contact Image" />
    </div>
  )
}

export default ContactPage;