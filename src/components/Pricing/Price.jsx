import SelectButton from '../UI/SelectButton'
import styles from './Price.module.css'

export default function Price({ img, name, features, price }) {
  return (
    <div className={styles.card}>
      <div>{img}</div>
      <h1 className={styles.cardName}>{name}</h1>
      <ul className={styles.cardList}>
        {features.map((feature) => (
          <li className={styles.cardListItem}>
            <img src="/icons/featureIcon.svg" />
            <p className={styles.featureCardText}>{feature}</p>
          </li>
        ))}
      </ul>
      <h1 className={styles.price}>{price}</h1>
      <SelectButton />
    </div>
  )
}
