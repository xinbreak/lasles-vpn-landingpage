import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src="/logos/Logo.svg" alt="Logo" />
      <h1 className={styles.logoText}>
        Lasles<span className={styles.logoTextVPN}>VPN</span>
      </h1>
    </Link>
  )
}
