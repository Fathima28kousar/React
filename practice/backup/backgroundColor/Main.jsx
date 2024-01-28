import React from 'react'
const techs = ['HTML', 'CSS', 'Javascript']
const image = 'data:image/jpeg;base64,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'


const imageStyles = {
    width: '200px',
    borderRadius: '50%',
}



class Main extends React.Component {

    // state = {
    //     style: {
    //         backgroundColor: 'white',
    //         color: 'black'
    //     }
    // }

    // changeMode = () => {
    //     const normalMode = {
    //         backgroundColor: 'white',
    //         color: 'black'
    //     }

    //     let excitedMode = {
    //         backgroundColor: 'black',
    //         color: 'white'
    //     }
    //     let newStyle = this.state.style === normalMode.backgroundColor ? excitedMode : normalMode
    //     this.setState({ style: newStyle })
    // }
    state = {
        style: {
            backgroundColor: 'white'
        }
    }

    changeMode =() =>{
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: 'black',
                color: 'white'
            }, 
        })
    }

    render(){
        return (
            <div style={{padding: '2rem 0 0 5rem', backgroundColor: this.state.style.backgroundColor,color: this.state.style.color }}>
                <p>Prerequisites to get started with React.js</p>
                <ul>
                    {techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
                <img src={image} style={imageStyles} />
                <p>Snow White</p>
                <button onClick={this.changeMode} style={this.state.style}>Change Color</button>
            </div>
        )
    }
    }
export default Main