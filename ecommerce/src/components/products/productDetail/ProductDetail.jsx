import React from 'react';
import styles from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';
import items from '../data';
import Button from '../../home/button/Button'

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  
  const selectedItem = items.find(item => item.id === parseInt(id));  //finding item based on id

  
  if (!selectedItem) {
    return <div className={styles.container}>Product not found</div>; //if item not found
  }

  return (
    <div className={styles.container}>
      <div className={styles.productImg}>
        <img src={selectedItem.image2} alt='' />
      </div>
      <div className={styles.productCont}>
        <h1>{selectedItem.name}</h1>

        <div className={styles.shipping}>
            <h4>Price: ${selectedItem.price}.00</h4>
            <p>+ Free Shipping</p>
        </div>
        
        <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
        <Button text="ADD TO CART"/>
      </div>
    </div>
  );
}

export default ProductDetail;
