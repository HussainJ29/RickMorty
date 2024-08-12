import React from 'react'
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={logo} alt="logo" />
        <div className="navList">
            <ul className='list01'>
                <li><a href="">Docs</a></li>
                <li><a href="">About</a></li>
                <li><a href="">SUPPORT US</a></li>
            </ul>
        </div>
    </div>
  )
}
export default Navbar
