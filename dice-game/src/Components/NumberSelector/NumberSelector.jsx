import styles from './NumberSelector.module.css'

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
    const arrNumber =[1,2,3,4,5,6]

    const numberSelectorHandler =(value) =>{
      setSelectedNumber(value);
      setError("");  //if number is selected the error vanishes
    }

    return (
        
        <div className={styles.SelectorContainer}>
          <p className={styles.error}>{error}</p>
          <div className={styles.flex_container}>
            {arrNumber.map((value,i) =>(
            <div className={`${styles.box} ${value === selectedNumber ? styles.isSelected : ''}`}
            key={i} onClick={() => numberSelectorHandler(value)}
            >{value}</div>
            ))}
          </div>
        <p className={styles.selected_number}>Selected number</p>
        </div>
      

  )
}

export default NumberSelector
