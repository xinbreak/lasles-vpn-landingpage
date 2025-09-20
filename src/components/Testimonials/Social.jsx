import styles from './Social.module.css'

export default function Social({ images }) {
  return (
    <div className={styles.socialLinks}>
      {images.map((img) => (
        <div>{img}</div>
      ))}
    </div>
  )
}
