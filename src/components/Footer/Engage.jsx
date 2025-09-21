import styles from './Engage.module.css'

export default function Engage({ engage }) {
  return (
    <div className={styles.engageBlock}>
      <h1 className={styles.title}>Engage</h1>
      <ul>
        {engage.map((item) => (
          <li className={styles.engageListItem}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
