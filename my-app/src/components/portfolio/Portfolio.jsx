import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent projects</h5>

        <div className='portfolio__container'>
        <article className='portfolio__item'>
        <div className='portfolio__item-img'>   </div>
        <h3>Project name/title!</h3>
            <a href="link to github">GitHub</a>
            <a href="link to live demo">Live Demo</a>
        </article>
        </div>

    </section>
  )
}

export default Portfolio