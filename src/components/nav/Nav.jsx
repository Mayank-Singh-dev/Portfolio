import React, { useState, useEffect } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {SiGooglemessages} from 'react-icons/si'
import {MdDesignServices} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home')
      const about = document.getElementById('about')
      const experience = document.getElementById('experience')
      const services = document.getElementById('services')
      const portfolio = document.getElementById('portfolio')
      const contact = document.getElementById('contact')

      const sections = [home, about, experience, services, portfolio, contact]
      const sectionIds = ['#home', '#about', '#experience', '#services', '#portfolio', '#contact']

      const currentSection = sections.find(section => {
        const sectionRect = section.getBoundingClientRect()
        return sectionRect.top <= (window.innerHeight / 2) && sectionRect.bottom >= (window.innerHeight / 2)
      })

      const currentSectionIndex = sections.indexOf(currentSection)
      const currentSectionId = sectionIds[currentSectionIndex]

      setActiveNav(currentSectionId)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav==='#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active' : ''}><MdDesignServices/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><SiGooglemessages/></a>
    </nav>
  )
}

export default Nav