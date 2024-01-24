import React from 'react'
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './website/Home'
import Services from './website/Services'
import About from './website/About'
import Contact from './website/Contact'


class App extends React.Component{

    render(){
        return(
            <div>
                <BrowserRouter>
                    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                        <Link to='/index' className='navbar-brand'>Logo</Link>
                        <div className='ml-auto'>
                            <ul className='navbar-nav'>
                                <li><Link to='/home' className='nav-link'>Home</Link></li>
                                <li><Link to="/about" className='nav-link'>About</Link></li>
                                <li><Link to="/services" className='nav-link'>Services</Link></li>
                                <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/services' element={<Services/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Routes>
                </BrowserRouter>
                
            </div>
        )
    }
}
export default App