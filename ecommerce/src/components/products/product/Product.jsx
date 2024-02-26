import styles from './Product.module.css'

const Product = ({id,name,image,price,category}) => {
  return (
    <div className={styles.product}>
      <img src={image} alt={name}/>
      <sup>{category}</sup>
      <h4>{name}</h4>
      <span>{`$${price}.00`}</span>
        
    </div>
  )
}

export default Product
