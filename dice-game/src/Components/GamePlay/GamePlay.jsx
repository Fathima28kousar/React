import NumberSelector from "../NumberSelector/NumberSelector"
import styles from '../GamePlay/GamePlay.module.css'
import TotalScore from "../TotalScore/TotalScore"
import RollDice from '../RollDice/RollDice'
const GamePlay = () => {
  return (
    <main>
      <div className={styles.top_section}>
      <TotalScore/>
      <NumberSelector/>
      </div>
      <RollDice/>
    </main>
  )
}

export default GamePlay
