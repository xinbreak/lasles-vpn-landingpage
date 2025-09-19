import styles from './NavElement.module.css'

export default function NavElement({ text }) {
  return <li className={styles.navElement}>{text}</li>
}
