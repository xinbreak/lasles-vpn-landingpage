import GetStartedButton from '../UI/GetStartedButton'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.mainContainer}>
        <h1 className={styles.mainText}>
          Want anything to be easy with
          <span className={styles.mainVPN}>LaslesVPN.</span>
        </h1>
        <p className={styles.infoText}>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <GetStartedButton />
      </div>
      <img src="/images/img1.svg" alt="illustration 1" />
    </div>
  )
}
