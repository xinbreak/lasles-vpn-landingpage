import Logo from './Logo'
import DownloadButton from '../UI/DownloadButton'
import NavBar from './NavBar'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.mainHeader}>
      <Logo />
      <NavBar />
      <DownloadButton />
    </header>
  )
}
