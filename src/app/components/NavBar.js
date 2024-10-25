import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const NavBar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div>
      <div className='navbar-container'>

        <div className='logo'> 
            <p> OneDebt </p>
            <p> Solutions </p>
        </div>
        <div className='nav'>
            <ul>
                <li> Home </li>
                <li> About Us </li>
                <li> Services </li>
                <li> Carrer </li>
                <li> Contact Us </li>
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
