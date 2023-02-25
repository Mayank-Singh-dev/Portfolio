import React from 'react'
import './Services.css'
import {GiCheckMark} from 'react-icons/gi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer?</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Design, build, and maintain highly reusable JavaScript, React JS, HTML, CSS and Bootstrap code.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Come up with UI and UX strategies based on your target goals</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Understand the limitations of our tech stack and business model and provide technical Advice wherever necessary.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Liaise with the client to gauge their needs and expectations.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Plan the layout of the website or UI.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Ensure that the website or UI is optimized and responsive for various devices.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services