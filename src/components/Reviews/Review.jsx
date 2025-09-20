import styles from './Review.module.css'

export default function Review({ ava, name, location, rate, text }) {
  return (
    <div className={styles.reviewBlock}>
      <div className={styles.headerOfReview}>
        <div>{ava}</div>
        <div className={styles.nameAndLocation}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.location}>{location}</p>
        </div>
        <p className={styles.rate}>{rate}</p>
        <img src="/icons/star.svg" alt="" />
      </div>
      <p className={styles.mainText}>{text}</p>
    </div>
  )
}
