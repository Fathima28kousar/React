import React from 'react'
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return(
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/index' className='navbar-brand'>Logo</Link>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li><Link className='nav nav-link' to='/index'>Home</Link></li>
                        <li><Link className='nav nav-link' to='/about'>About</Link></li>
                        <li><Link className='nav nav-link' to='/contact'>Contact</Link></li>
                        <li><Link className='nav nav-link' to='/services'>Services</Link></li>
                        <li><Link className='nav nav-link' to='/message'>Message</Link></li>
                        <li><Link className='nav nav-link' to='/counter'>Counter</Link></li>
                        <li><Link className='nav nav-link' to='/product'>Product</Link></li>
                       
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar