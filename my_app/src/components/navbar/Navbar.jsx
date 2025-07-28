import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar container">
        <div className="leftSide">
            <div className="logo"><img src="/src/assets/logo.png" alt="logo" /></div>
            <div className="logoText">Awesome App</div>
        </div>
        <div className="rightSide">
            <ul>
                <li className="navItems nav-line">Home</li>
                <li className="navItems nav-line">Features</li>
                <li className="navItems nav-line">Pricing</li>
                <li className="navItems navDnld">Downlaod Now</li>
            </ul>
        </div>
      </nav>
    </>
  )
}
