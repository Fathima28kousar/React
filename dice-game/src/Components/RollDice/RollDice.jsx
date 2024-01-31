import styles from './RollDice.module.css'
import {useState} from 'react'
const RollDice = () => {
    const [currentDice,setCurrentDice] = useState(6)
    const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const rollDice  = () => {
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber)
    }


  return (
    <div className={styles.dice_container}> 
        <div className={styles.dice} onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt='dice1'/>
            <p>Click on dice to roll</p>
        </div>
    </div>
  )
}

export default RollDice
