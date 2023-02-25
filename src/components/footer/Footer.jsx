import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mayank Singh</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__social">
        <a href="https://github.com/Mayank-Singh-dev" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
        <a href="https://www.linkedin.com/in/mayank-singh-ab2794254/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://www.instagram.com/singhmayank_x0" target="_blank" rel='noreferrer'><BsInstagram/></a>
        <a href="https://twitter.com/Mayanksingh57" target="_blank" rel='noreferrer'><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer