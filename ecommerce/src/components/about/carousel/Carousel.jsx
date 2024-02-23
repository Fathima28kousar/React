import styles from "./Carousel.module.css";
import Button from "../button/Button";
import { FaStar } from "react-icons/fa";

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <img src="/images/carousel1.jpg" alt="carousel" id={styles.car} />
        <div className={styles.stars}>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className={styles.review}>
            <img src='/images/customer1.png' alt='' />
            <p>Mila Kunit</p>
        </div>

      </div>
      <div className={styles.certificate}>
        <div className={styles.heading}>
          <img src="/images/organic-badge.jpg" alt="organic badge" />
          <div className={styles.text}>
            <h2>Certified Products</h2>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
        <h1>We Deal With Various Quality Organic Products!</h1>
        <img src="/images/leaf.png" alt="" />
        <div className={styles.list}></div>
        <Button text="START SHOPPING" icon="cart" />
      </div>
    </div>
  );
};

export default Carousel;