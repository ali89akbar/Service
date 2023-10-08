import React from 'react'
import '../nav.scss'
const Navbar = () => {
  return (
    <div className='Navbar-main'>
        <nav className='Navbar'>
          <ul className='Navlist'>
            <li className='ull'><a>Home</a></li>
            <li className='ull'><a>Projects</a></li>
            <li className='ull'><a>About</a></li>
            <li className='ull'><a>Contact</a></li>
            
            

          </ul>
        </nav>
    </div>
  )
}

export default Navbar