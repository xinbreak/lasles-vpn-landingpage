import styles from './AboutCounterElement.module.css'

export default function AboutCounterElement({ img, count, text }) {
  return (
    <div className={styles.abtCntContainer}>
      <div>{img}</div>
      <div className={styles.abtCntTextContainer}>
        <h1 className={styles.abtCntCount}>{count}</h1>
        <p className={styles.abtCntText}>{text}</p>
      </div>
    </div>
  )
}
