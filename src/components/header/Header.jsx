import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Header.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='#'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nicolás Burgos</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="ME" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div> 
    </header>
  )
}

export default Header