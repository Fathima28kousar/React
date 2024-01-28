import React from 'react'
const headerStyles = {
    backgroundColor: 'lightBlue',
    height: '200px',
    padding: '2rem 0 0 5rem',
    fontSize: '2rem',
}


class Header extends React.Component{
    render(){
        return(
            <div style={headerStyles}>
                <h3>Welcome to 30 days of React</h3>
                <p>Getting Started</p>
            </div>
        )
    }
}
export default Header