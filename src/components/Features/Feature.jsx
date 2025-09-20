import icon from '/icons/confirm.svg'
import styles from './Feature.module.css'

export default function Feature({ text }) {
  return (
    <li className={styles.listElement}>
      <img src={icon} />
      <p className={styles.featureText}>{text}</p>
    </li>
  )
}
