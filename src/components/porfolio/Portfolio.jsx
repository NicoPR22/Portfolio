import React from 'react'
import './Portfolio.css'
import PI from '../../assets/pi-pokemon.jpg'
import PF from '../../assets/pf-techmarket.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__image">
            <img src={PI} alt="pi" />
          </div>
          <h3>Henry's Pokemon PI</h3>
          <div className="portfolio__cta">
            <a href="https://github.com/NicoPR22/PI-Pokemon-main" className="btn" target="_blank">GitHub</a>
            <a href="https://pokemon-app-nicopr22.vercel.app/" className="btn btn-primary"  target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__image">
            <img src={PF} alt="pi" />
          </div>
          <h3>Henry's E-comerce PF</h3>
          <div className="portfolio__cta">
            <a href="https://github.com/NicoPR22/PF-FrontEnd" className="btn" target="_blank">GitHub</a>
            <a href="https://techmarketfront.vercel.app/" className="btn btn-primary"  target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio