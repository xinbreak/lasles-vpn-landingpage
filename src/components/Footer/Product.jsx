import styles from './Product.module.css'

export default function Product({ products }) {
  return (
    <div>
      <h1 className={styles.title}>Products</h1>
      <ul>
        {products.map((product) => (
          <li className={styles.productsListItem}>{product}</li>
        ))}
      </ul>
    </div>
  )
}
