'use client'
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
              <Link href='/'> <p> OneDebt </p> <p> Solutions </p> </Link>
            </div>

        </div>
        <div className='nav'>
            <ul>
                <li> <Link href='/'> Home </Link> </li>
                <li> <Link href='/'> About Us </Link> </li>
                <li> <Link href='/'> Services </Link> </li>
                <li> <Link href='/'> Carrer </Link> </li>
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
