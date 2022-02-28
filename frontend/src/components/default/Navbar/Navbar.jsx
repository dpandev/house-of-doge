import React, { useState } from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import HelpIcon from '@mui/icons-material/Help'

const Navbar = () => {

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  const toggleMobileMenu = () => {
    if (mobileMenuOpened) {
      setMobileMenuOpened(false)
    } else {
      setMobileMenuOpened(true)
    }
  }

  return (
    <div className='navbar'>
      <header className='navbar-header stick'>
        <div className='nav-desktop'>
          <div className="nav-logo">
            <img src='/assets/images/dogeLogo.png' alt='' className='logo-img' />
            <a href='/'>{"House of Doge"}</a>
          </div>
          <div className='nav-list'>
            <div className="left">
              <a href="/statistics" className="item">
                <BarChartIcon />
                {"Stats"}
              </a>
              <a href="/leaderboard" className="item">
                <EmojiEventsIcon />
                {"Leaderboard"}
              </a>
              <a href="/help" className="item">
                <HelpIcon />
                {"Help"}
              </a>
            </div>
            <div className="right">
              <a href="/login" className="item">
                <i></i>
                {"Login"}
              </a>
              <a href="/register" className="item">
                <i></i>
                {"Register"}
              </a>
            </div>
          </div>
        </div>
        <div className='nav-mobile'>
          <div className='left'>
            <div className='nav-logo'>
              <img src='/assets/images/dogeLogo.png' alt='' className='logo-img' />
              <p>{"HoD"}</p>
            </div>
          </div>
          <div className={` ${'right'} ${mobileMenuOpened ? 'icon-rotate' : ''}`} onClick={toggleMobileMenu}>
            <svg xmlns='http://www.w3.org/2000/svg' className='hamburger-icon' width='16' height='16' viewBox='0 0 16 16' strokeWidth='2' stroke='#000000' fill='none'>
              <path stroke='none' d='M0 0h16v16H0z' fill='none'/>
              <g>
                <line x1='0' y1='3' x2='15' y2='3' />
                <line x1='0' y1='11' x2='15' y2='11' />
              </g>
            </svg>
          </div>
        </div>
      </header>
      <div className={`${'mobileNavFullScreen'} ${mobileMenuOpened ? 'aboveThemAll' : 'belowThemAll'}`}>
        <div className='header-push'></div>
        <div className='nav-menu' style={mobileMenuOpened ? { 'right': '20vw' } : { 'right': '100vw' } }>
          <div className='nav-list'>
            <a href='/register' className='item' onClick={toggleMobileMenu}>{"Register"}</a>
            <a href='/login' className='item' onClick={toggleMobileMenu}>{"Login"}</a>
            <a href='/statistics' className='item' onClick={toggleMobileMenu}>{"Statistics"}</a>
            <a href='/leaderboard' className='item' onClick={toggleMobileMenu}>{"Leaderboard"}</a>
            <a href='/help' className='item' onClick={toggleMobileMenu}>{"Help"}</a>
          </div>
        </div>
      </div>
      <div className='header-push'></div>
    </div>
  )
}

export default Navbar