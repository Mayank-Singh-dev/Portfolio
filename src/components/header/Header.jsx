import React from 'react'
import CTA from './CTA'
import './Header.css'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='home' >
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mayank Singh</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header