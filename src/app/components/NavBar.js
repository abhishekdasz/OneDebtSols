import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Link from 'next/link';

const NavBar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div>
      <div className='navbar-container'>

        <div className='logo'>
            <div id='rupee'> ₹ </div> 
            <div>
            <p> OneDebt </p>
            <p> Solutions </p>
            </div>

        </div>
        <div className='nav'>
            <ul>
                <li> Home </li>
                <li> About Us </li>
                <li> Services </li>
                <li> Carrer </li>
                <li> <Link href='/contact'> Contact Us </Link> </li>
            </ul>
        </div>
        <div className='dark-mode'>
            <button className='dark-mode-button' onClick={toggleDarkMode}> 
                {isDarkMode ? <CiLight /> : <MdDarkMode/>}
            </button> 
        </div>

      </div> 
    </div>
  )
}

export default NavBar
