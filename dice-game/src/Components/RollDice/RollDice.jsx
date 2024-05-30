import styles from './RollDice.module.css'
const RollDice = ({currentDice,rollDice}) => {

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
