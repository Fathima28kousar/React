import NumberSelector from '../NumberSelector/NumberSelector'
import styles from './TotalScore.module.css'
const TotalScore = () => {
  return (
    <div className={styles.score_container}>
      <h1>0</h1>
      <p>Total Score</p>
      <NumberSelector/>
    </div>
  )
}

export default TotalScore
