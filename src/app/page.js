'use client'
import React, { useState } from 'react'
import NavBar from './components/NavBar'

const page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode': ''}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <div className='home-section'>
        <div className='home-container'>
          <div className='left-home'>
            <h1> OneDebt Solutions </h1>
            <p> At One Debt Solutions, we offer comprehensive debt collection services, including early-stage collections, overdue account management, and legal recovery solutions. Our expertise spans various industries, allowing us to deliver customized strategies that maximize recovery rates for our clients. With a commitment to compliance and ethical practices, we handle each case with diligence and respect. </p>
            <p> Explore- </p>
          </div>
          <div className='right-home'>
            <img src='home.png' alt='home-img' />  
          </div>
        </div> 
      </div>
    </div>
  )
}

export default page
