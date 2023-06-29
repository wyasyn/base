import React from 'react'
import {images} from '../../constants';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className="container">
      <div className='logo'>
            <a href="#home">
            <img src={images.logo} alt="logo" />
            </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar