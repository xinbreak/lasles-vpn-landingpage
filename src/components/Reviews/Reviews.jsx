import Review from './Review'
import styles from './Reviews.module.css'

const reviews = [
  {
    ava: <img src="/images/viez.svg" alt="avatar" />,
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    rate: '4.5',
    text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
  },
  {
    ava: <img src="/images/yessica.svg" alt="avatar" />,
    name: 'Yessica Christy',
    location: 'Shanxi, China',
    rate: '4.5',
    text: '“I like it because I like to travel far and still can connect with high speed.”.',
  },
  {
    ava: <img src="/images/kim.svg" alt="avatar" />,
    name: 'Kim Young Jou',
    location: 'Seoul, South Korea',
    rate: '4.5',
    text: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
  },
]

export default function Reviews() {
  return (
    <div className={styles.reviewsContainer}>
      <h1 className={styles.title}>Trusted by Thousands of Happy Customer</h1>
      <p className={styles.mainText}>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review
            ava={review.ava}
            name={review.name}
            location={review.location}
            rate={review.rate}
            text={review.text}
          />
        ))}
      </div>
    </div>
  )
}
