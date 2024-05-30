import NumberSelector from "../NumberSelector/NumberSelector"
import styles from '../GamePlay/GamePlay.module.css'
import TotalScore from "../TotalScore/TotalScore"
import RollDice from '../RollDice/RollDice'
import { useState } from "react"
import Rules from "../Rules"


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const rollDice  = () => {

    if(!selectedNumber){
      setError("You have not selected any number")
      return // dice will get rolled but the score will not get updated if no number is selected
    };

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber)

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    } else{
      setScore((prev) => prev -2)
    }

    setSelectedNumber(undefined)
  }

  const resetScore =() => {
    setScore(0);
  }


  return (
    <main>
      <div className={styles.top_section}>
      <TotalScore score={score}/>
      <NumberSelector 
      selectedNumber={selectedNumber} 
      setSelectedNumber={setSelectedNumber} 
      error={error}
      setError={setError}/>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}/>
      <div className={styles.btns}>
        <button className={styles.reset} onClick={resetScore}>Reset</button>
        <button onClick={() => setShowRules((prev) => !prev )}>{showRules ? "Hide" : "Show"} Rules</button>
      </div>
      {showRules && <Rules/>}
    </main>
  )
}

export default GamePlay
