import styles from './EarnMoney.module.css'

export default function EarnMoney({ earnMoney }) {
  return (
    <div className={styles.earnMoneyBlock}>
      <h1 className={styles.title}>Earn Money</h1>
      <ul>
        {earnMoney.map((item) => (
          <li className={styles.earnMoneyListItem}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
