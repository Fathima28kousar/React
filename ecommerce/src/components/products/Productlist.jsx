import styles from  './ProductList.module.css'
import items from './data'
import Products from './Products'

const Productlist = ({items}) => {
  return (
    <div className={styles.ProductList}>
      {items.map(item => (
        <Products key={item.id} {...item}/>
      ))}
    </div>
  )
}

export default Productlist
