import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link className='navbar-brand' to='/index'>Logo</Link>
      <div className='ml-auto'>
        <ul className='navbar-nav'>
          <li><Link to='/index' className='nav-link' >Home</Link></li>
          <li><Link to='/about' className='nav-link'>About</Link></li>
          <li><Link to='/contact' className='nav-link'> Contact</Link></li>
        </ul>
      </div>
      
      
    </nav>
  )
}

export default Navbar
