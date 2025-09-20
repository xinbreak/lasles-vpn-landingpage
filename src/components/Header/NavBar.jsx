import NavElement from './NavElement'
import styles from './NavBar.module.css'

const items = ['About', 'Features', 'Pricing', 'Testimonials', 'Reviews']

export default function NavBar() {
  return (
    <ul className={styles.navBar}>
      {items.map((item, index) => (
        <NavElement key={index} text={item} />
      ))}
    </ul>
  )
}
