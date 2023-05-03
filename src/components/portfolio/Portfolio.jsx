import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Texteditor.png'
import IMG2 from '../../assets/airbnb.jpg'
import IMG3 from '../../assets/Owasp.png'
import IMG4 from '../../assets/news1.jpg'
import IMG5 from '../../assets/notebook.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Airbnb-clone</h3>
          <h5>This is a clone of Airbnb built using Next.js, Tailwind CSS, Node.js, React and Mapbox..</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Mayank-Singh-dev/Airbnb-clone" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://airbnb-clone-ebon-six.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='Tailwind'></span>
            <span className='TechName'>Tailwind</span>
            </div>
            <div className='techHead'>
            <span className='NextJs'></span>
            <span className='TechName'>NextJs</span>
            </div>
            <div className='techHead'>
            <span className='ReactJs'></span>
            <span className='TechName'>ReactJs</span>
            </div>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Owasp-risk Calculator</h3>
          <h5>A simple web app which  is based on the guidelines and format provided by the OWASP Risk Assessment Calculator.</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Mayank-Singh-dev/0wasp-risk-calculator" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://owasp-risk-calculator.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='css'></span>
            <span className='TechName'>CSS</span>
            </div>
            <div className='techHead'>
            <span className='ReactJs'></span>
            <span className='TechName'>ReactJs</span>
            </div>
          </div>
        </article>
       
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>News App</h3>
          <h5>A simple news app which fetch data from the api and give the real time news of different category.</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Mayank-Singh-dev/NewsCrate.git" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='bootstrap'></span>
            <span className='TechName'>Bootstrap</span>
            </div>
            <div className='techHead'>
            <span className='ReactJs'></span>
            <span className='TechName'>ReactJs</span>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Note Book</h3>
          <h5>A web app which allows us to save and edit our notes and can also fetch user specific notes.</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Mayank-Singh-dev/NoteBook.git" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='bootstrap'></span>
            <span className='TechName'>Bootstrap</span>
            </div>
            <div className='techHead'>
            <span className='ReactJs'></span>
            <span className='TechName'>ReactJs</span>
            </div>
            <div className='techHead'>
            <span className='mongoDB'></span>
            <span className='TechName'>MongoDB</span>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Text-Editor</h3>
          <h5>A Simple text editor web app where you can edit your text.</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Mayank-Singh-dev/TextUtils.git" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://text-editor-x.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          <div className='techHead'>
            <div className='techHead'>
            <span className='JavaScript'></span>
            <span className='TechName'>Javascript</span>
            </div>
            <div className='techHead'>
            <span className='bootstrap'></span>
            <span className='TechName'>Bootstrap</span>
            </div>
            <div className='techHead'>
            <span className='ReactJs'></span>
            <span className='TechName'>ReactJs</span>
            </div>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Fighting game</h3>
          <h5>A simple game where we can heal and attack the oponent. </h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Mayank-Singh-dev/Fighting-Game.git" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://fighting-game-x.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio