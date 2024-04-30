import styles from "./TeamMember.module.css";

const TeamMember = ({ name, position, linkedInUsername }) => {
  const goToLinkedInPage = (linkedInUsername) => {
    window.open(`https://www.linkedin.com/in/${linkedInUsername}/`, '_blank');
  }

  return (
    <div className={styles['member-container']}>
      <img src={require('../../Images/Sehaj-Naangal.jpeg')} alt="Right Arrow White" className={styles['member-profile']} />
      <div className={styles['details-container']}>
        <p className={styles['member-name']}>{name}</p>
        <p className={styles['member-title']}>{position}</p>
        <button className={styles['linkedin-button']} onClick={() => goToLinkedInPage(linkedInUsername)}>
          <p>LinkedIn</p>
          <img src={require('../../Images/right-arrow-white.png')} alt="Right Arrow White" />
        </button>
      </div>
    </div>
  )
}

export default TeamMember;