import React from 'react'

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
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button> 
        </div>

      </div> 
    </div>
  )
}

export default NavBar
