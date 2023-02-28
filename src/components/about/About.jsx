import React from 'react'
import './About.css'
import ME from '../../assets/Mayank-about-2.png'
import {FaAward} from 'react-icons/fa'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 years Experience</small>
            </article>
            <article className='about__card'>
              <VscFolder className='about__icon'/>
              <h5>projects</h5>
              <small>10+ project completed</small>
            </article>
          </div>
          <p>
            I am Mayank Singh, a Frontend developer. I will help you with fringing solution and solve your problem & I Ensure that the website or UI is optimized and responsive for various devices and also understand the limitations of our tech stack and business model and provide technical
            Advice wherever necessary.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About