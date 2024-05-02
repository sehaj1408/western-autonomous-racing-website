import styles from "./TeamMember.module.css";

const TeamMember = ({ imagePath, name, position, websiteLink, githubLink, linkedinLink }) => {
  const goToLinkedin = (linkedinLink) => {
    window.open(linkedinLink, '_blank');
  }

  const goToPersonalSite = (websiteLink) => {
    window.open(websiteLink, '_blank');
  }

  const goToGithub = (githubLink) => {
    window.open(githubLink, '_blank');
  }

  return (
    <div className={styles['member-container']}>
      <img src={require(`../../Images//LinkedIn-Images/${imagePath}`)} alt="Right Arrow White" className={styles['member-profile']} />
      <div className={styles['details-container']}>
        <p className={styles['member-name']}>{name}</p>
        <p className={styles['member-title']}>{position}</p>
        <div className={styles['info-container']}>
          {websiteLink &&
            (<button onClick={() => goToPersonalSite(websiteLink)}>
              <img src={require('../../Images/Link-Icon-Purple.png')} alt="" />
            </button>)
          }
          <button onClick={() => goToGithub(githubLink)}>
            <img className={styles['github-icon-image']} src={require('../../Images/Github-Icon-Purple.png')} alt="Github Icon" />
          </button>
          <button onClick={() => goToLinkedin(linkedinLink)}>
            <img src={require('../../Images/Linkedin-Icon-Purple.png')} alt="LinkedIn Icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeamMember;