import AboutCounterElement from './AboutCounterElement'
import styles from './AboutCounter.module.css'

const stats = [
  {
    icon: <img src="./icons/user.svg" />,
    count: '90+',
    text: 'Users',
  },
  {
    icon: <img src="./icons/location.svg" />,
    count: '30+',
    text: 'Locations',
  },
  {
    icon: <img src="./icons/server.svg" />,
    count: '50+',
    text: 'Servers',
  },
]

export default function AboutCounter() {
  return (
    <div className={styles.abtCntContainer}>
      {stats.map((stat, index) => (
        <AboutCounterElement
          key={index}
          img={stat.icon}
          count={stat.count}
          text={stat.text}
        />
      ))}
    </div>
  )
}
