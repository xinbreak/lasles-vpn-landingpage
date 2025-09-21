import NavElement from './NavElement'
import styles from './NavBar.module.css'

const items = [
  { label: 'About', to: 'about' },
  { label: 'Features', to: 'features' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Reviews', to: 'reviews' },
]

export default function NavBar() {
  return (
    <ul className={styles.navBar}>
      {items.map((item) => (
        <NavElement key={item.to} text={item.label} to={item.to} />
      ))}
    </ul>
  )
}
