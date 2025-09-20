import Feature from './Feature'
import styles from './Features.module.css'

const features = [
  'Powerfull online protection.',
  'Internet without borders.',
  'Supercharged VPN.',
  'No specific time limits.',
]

export default function Features() {
  return (
    <div className={styles.featuresContainer}>
      <img src="/images/img2.svg" alt="illustration 2" />
      <div className={styles.mainText}>
        <h1 className={styles.mainTitle}>
          We Provide Many Features You Can Use
        </h1>
        <p className={styles.featuresText}>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className={styles.featuresList}>
          {features.map((item, index) => (
            <Feature key={index} text={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
