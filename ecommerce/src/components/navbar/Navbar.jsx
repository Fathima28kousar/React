import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  FaShoppingBasket,
  FaDollarSign,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <img src="/images/logo.svg" alt="" />
        <ul className={styles.groceries}>
          <li>Everything</li>
          <li>Groceries</li>
          <li>Juice</li>
        </ul>
      </div>

      <div className={styles.header2}>
        <ul className={styles.about}>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul className={styles.icons}>
          <li className={styles.icon}>
            <FaDollarSign />1
          </li>
          <li className={styles.icon}>
            <FaShoppingBasket />
          </li>
          <li className={styles.profile}>
            <FaUser />
          </li>
        </ul>
      </div>

      <div className={styles.toggleButton} onClick={toggleDropDown}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isOpen && (
        <div className={`${styles.dropDownMenu} ${styles.open}`}>
          <ul>
            <li>
              <FaUser />
            </li>
            <li>Everything</li>
            <li>Groceries</li>
            <li>Juice</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
