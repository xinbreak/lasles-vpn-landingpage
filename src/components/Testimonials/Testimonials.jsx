import Social from './Social'
import styles from './Testimonials.module.css'

const images = [
  <img src="/images/netflix.svg" />,
  <img src="/images/reddit.svg" />,
  <img src="/images/amazon.svg" />,
  <img src="/images/discord.svg" />,
  <img src="/images/spotify.svg" />,
]

export default function Testimonials() {
  return (
    <div className={styles.testimonialsContainer}>
      <h1 className={styles.title}>Huge Global Network of Fast VPN</h1>
      <p className={styles.mainText}>
        See <span className={styles.mainTextVPN}>LaslesVPN</span> everywhere to
        make it easier for you when you move locations.
      </p>
      <img src="/images/map.svg" alt="map" />
      <Social images={images} />
    </div>
  )
}
