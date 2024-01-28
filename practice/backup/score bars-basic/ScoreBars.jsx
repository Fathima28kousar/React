import React from 'react'
import ScoreBar from './ScoreBar';
const ScoreBars = () => {
  const data = [
    { name: 'John', score: 80 },
    { name: 'Alice', score: 45 },
    { name: 'Bob', score: 65 },
    { name: 'Eve', score: 90 },
  ];

  return (
    <div>
      {data.map((entry,index) => (
        <ScoreBar key={index} name={entry.name} score={entry.score}/>
      ))}
      
    </div>
  )
}

export default ScoreBars;