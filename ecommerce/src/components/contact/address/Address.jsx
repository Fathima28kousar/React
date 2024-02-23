import styles from './Address.module.css'
import { FaPhone,FaEnvelope,FaMapMarkerAlt  } from "react-icons/fa";

const Address = () => {
  return (
    
        <div className={styles.address}>
      <div className={styles.header}>
      <h1>Get In Touch</h1>
      </div>
      <div className={styles.info}>
        <section>
          <FaPhone/>
          <p>+123 456 7890</p>
          <p>+123 456 7890</p>
        </section>
        <section>
          <FaEnvelope/>
          <p>info@example.com</p>
          <p>support@example.com</p>
        </section>
        <section>
          <FaMapMarkerAlt/>
          <p>1569 Ave, New York,</p>
          <p>NY 10028, USA</p>
        </section>
      </div>
    </div>
    
    
  )
}

export default Address
