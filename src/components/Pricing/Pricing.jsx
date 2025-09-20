import styles from './Pricing.module.css'
import Price from './Price'

const items = [
  {
    img: <img src="/images/free.svg" />,
    name: 'Free Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
    ],
    price: 'Free',
  },
  {
    img: <img src="/images/standard.svg" />,
    name: 'Standard Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
    ],
    price: '$9 / mo',
  },
  {
    img: <img src="/images/premium.svg" />,
    name: 'Premium Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
      'Get New Features',
    ],
    price: '$12 / mo',
  },
]

export default function Pricing() {
  return (
    <div className={styles.pricingContainer}>
      <h1 className={styles.title}>Choose Your Plan</h1>
      <p className={styles.mainText}>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className={styles.prices}>
        {items.map((item, index) => (
          <Price
            key={index}
            img={item.img}
            name={item.name}
            features={item.features}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}
