import React from 'react'

class TechList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {techs} = this.props
        return(
            techs.map((tech) => 
            <h1 key={tech}>{tech}</h1>
            )
        )
    }
}
export default TechList