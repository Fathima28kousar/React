import styles from './Features.module.css'
import { FaTruck,FaRegAddressBook,FaRegMoneyBillAlt,FaRecycle } from "react-icons/fa"
import {Link} from 'react-router-dom'

const Features = () => {
  return (
    <div className={styles.features}>
      <section>
        <FaTruck className={styles.icon}/>
        <div>
            <Link to='/#'><h2>Free Shipping</h2></Link>
            <p>Above $5 Only</p>
        </div>
        
      </section>
      <section>
        <FaRegAddressBook className={styles.icon}/>
        <div>
            <Link to='/#'><h2>Certified Organic</h2></Link>
            <p>100% Guarantee</p>
        </div>
      </section>

      <section>
        <FaRegMoneyBillAlt className={styles.icon}/>
        <div>
            <Link to='/#'><h2>Huge Savings</h2></Link>
            <p>At Lowest Price</p>
        </div>
      </section>

      <section>
        <FaRecycle className={styles.icon}/>
        <div>
            <Link to='/#'><h2>Easy Returns</h2></Link>
            <p>No Questions Asked</p>
        </div>
      </section>
    </div>
  )
}

export default Features
