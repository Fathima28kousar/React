import styles from './Products.module.css'

const Products = ({id,name,image}) => {
  return (
    <div className={styles.product}>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
    </div>
  )
}

export default Products
