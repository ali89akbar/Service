import React, { useState, useEffect } from 'react';
import '../nav.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from './Header';
import About from './AboutUs';

const Navbar = ({blog}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Add a state to track the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add an event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle the navbar on smaller screens
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Navbar-main'>
      {/* Check if the screen width is less than a certain breakpoint (e.g., 768px) */}
      {windowWidth < 768 ? (
        <button className='Navbar-toggle-button' onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem' }} />
        </button>
      ) : (
        <nav className={`Navbar ${isOpen ? 'open' : ''}`}>
          <ul className='Navlist'>
            <li className='ull'>
              <a>Home</a>
            </li>
            <li className='ull'>
              <a>Projects</a>
            </li>
            <li className='ull'>
              <a>About</a>
            </li>
            <li className='ull'>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <Header/>
      <About blogs={blog?blog:" "}/>
    </div>
  );
};

export default Navbar;
