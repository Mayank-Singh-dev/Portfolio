import React from 'react'
import './Experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className='experience__detail-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className='experience__detail-icon' /> 
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className='experience__detail-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className='experience__detail-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className='experience__detail-icon' />
              <div>
              <h4>React.js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className='experience__detail-icon' />
              <div>
              <h4>Next.js</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className='experience__detail-icon' />
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__detail-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience