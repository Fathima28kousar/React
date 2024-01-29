import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/home' className='navbar-brand'>React All</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link className='nav-link' to='/Home'>Home</Link></li>
                <li><Link className='nav-link' to='/Contacts'>Contacts</Link></li>
                <li><Link className='nav-link' to='/Login'>Login</Link></li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar
