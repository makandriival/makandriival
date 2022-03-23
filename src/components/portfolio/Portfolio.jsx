import React from 'react'
import './portfolio.css'

import tatImg from '../../assets/img/tat.png'
import bloImg from '../../assets/img/blo.jpeg'
import phoImg from '../../assets/img/pho.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent projects</h5>

        <div className='portfolio__container'>
        
        <article className='portfolio__item'>
        <div className='portfolio__item-img'>   
        <img src={tatImg} alt="tattoo studio logo" />
        </div>
        <h3>Project name/title!</h3>
            <a href="link to github">GitHub</a>
            <a href="link to live demo">Live Demo</a>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-img'>   
        <img src={bloImg} alt="blog website logo" />
        </div>
        <h3>Project name/title!</h3>
            <a href="link to github">GitHub</a>
            <a href="link to live demo">Live Demo</a>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-img'>   
        <img src={phoImg} alt="photographer logo" />
        </div>
        <h3>Project name/title!</h3>
            <a href="link to github">GitHub</a>
            <a href="link to live demo">Live Demo</a>
        </article>
        
        </div>

    </section>
  )
}

export default Portfolio