import Logo from '../Header/Logo'
import Product from './Product'
import Engage from './Engage'
import EarnMoney from './EarnMoney'
import styles from './Footer.module.css'

const products = [
  'Download',
  'Pricing',
  'Locations',
  'Server',
  'Countries',
  'Blog',
]
const engage = [
  'LaslesVPN',
  'FAQ',
  'Tutorials',
  'About Us',
  'Privacy Policy',
  'Terms of Service',
]
const earnMoney = ['Affiliate', 'Become Partner']
const socialLinks = [
  <img src="/icons/facebook.svg" />,
  <img src="/icons/twitter.svg" />,
  <img src="/icons/instagram.svg" />,
]

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <Logo />
        <p className={styles.mainText}>
          <span className={styles.mainTextVPN}>LaslesVPN </span>is a private
          virtual network that has unique features and has high security.
        </p>
        <div>
          {socialLinks.map((link) => (
            <>{link}</>
          ))}
        </div>
        <p className={styles.footerLicense}>©2020LaslesVPN</p>
      </div>
      <Product products={products} />
      <Engage engage={engage} />
      <EarnMoney earnMoney={earnMoney} />
    </footer>
  )
}
