import styles from './NumberSelector.module.css'
import {useState} from 'react'

const NumberSelector = () => {
    const arrNumber =[1,2,3,4,5,6]
    const [selectedNumber,setSelectedNumber] = useState();
    return (
      
        <div className={styles.SelectorContainer}>
          <div className={styles.flex_container}>
            {arrNumber.map((value,i) =>(
            <div className={`${styles.box} ${value === selectedNumber ? styles.isSelected : ''}`}
            key={i} onClick={() => setSelectedNumber(value)}
            >{value}</div>
            ))}
          </div>
        <p>Selected number</p>
        </div>
      

  )
}

export default NumberSelector
