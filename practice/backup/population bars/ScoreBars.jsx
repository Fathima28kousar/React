import ScoreBar from './ScoreBar'
import React from 'react'
import {data} from './data' 

class ScoreBars extends React.Component{
    constructor(props){
        super(props);
        this.data = data;
    }
    
    render(){
        return(
            <div>
                {this.data.map((dat,index) => (
                <ScoreBar key={index} country={dat.country} population={dat.population}/>
              ))}
            </div>
            
        )
    }
}
export default ScoreBars

