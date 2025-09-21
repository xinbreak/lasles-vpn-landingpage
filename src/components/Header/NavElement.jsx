import { Link } from 'react-scroll'
import styles from './NavElement.module.css'

export default function NavElement({ text, to }) {
  return (
    <li className={styles.navElement}>
      <Link
        to={to}
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
      >
        {text}
      </Link>
    </li>
  )
}
