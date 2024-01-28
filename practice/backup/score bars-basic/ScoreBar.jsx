const ScoreBar = ({ name,score }) => {
    const barWidth = `${(score / 100) * 100}%`;
  
    return (
      <div >
        <h2>{name}'s Score:{score}</h2>
        <div style={{
          backgroundColor: 'blue',
          height: '30px',
          width: '100%',
        }}>
  
        <div
          style={{
            backgroundColor: 'green',
            height: '100%',
            width: barWidth,
            }}
        ></div>
  
        </div>
      </div>
    )
  
  }
export default ScoreBar