import styles from "./TeamMember.module.css";

const TeamMember = () => {
  return (
    <div className={styles['member-container']}>
      <img src={require('../../Images/Sehaj-Naangal.jpeg')} alt="Right Arrow White" className={styles['member-profile']} />
      <p className={styles['member-name']}>Person 1</p>
      <p className={styles['member-title']}>Position Title</p>
      <button className={styles['linkedin-button']}>
        <p>LinkedIn</p>
        <img src={require('../../Images/right-arrow-white.png')} alt="Right Arrow White" />
      </button>
    </div>
  )
}

export default TeamMember;