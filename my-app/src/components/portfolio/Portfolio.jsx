import React from 'react'
import './portfolio.css'

import tatImg from '../../assets/img/portfolio-img/tat.png'
import convertImg from '../../assets/img/portfolio-img/convert.png'
import phoImg from '../../assets/img/portfolio-img/pho.png'
import kinoImg from '../../assets/img/portfolio-img/kino-app.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects:</h2>

        <div className='portfolio__container'>
        
        <article className='portfolio__item'>
        <div >   
        <img className='portfolio__item-img' src={kinoImg} alt="hompage-kino-app" />
        </div>
        
        <h3>Kino-React-App</h3>
        <ul>
          <li>react web app</li>
          <li>movie database api</li>
          <li>used local storage to store the watch lists</li>
          <li>lots of props movement</li>
          <li>styling sucks, but hey im not a designer</li>
        </ul>
            <a href="https://github.com/makandriival/kino-react-app/tree/main/kinomak">GitHub</a>
            <a href='https://makandriival.github.io/kino-react-app/'>Kino-App Live Demo</a>
        </article>

        {/* <article className='portfolio__item'>
        <div >   
        <img className='portfolio__item-img' src={tatImg} alt="tattoo studio logo" />
        </div>
        
        <h3>Project name/title!</h3>
            <a href="link to github">GitHub</a>
            <a href='./projects/tattoo-studio/tattoo.html'>Tattoo Live Demo</a>

        </article> */}

        <article className='portfolio__item'>
        <div >   
        <img className='portfolio__item-img' src={convertImg} alt="converter website logo" />
        </div>
        <h3>Angular Currency Converter</h3>
        <ul>
          <li>angular web app</li>
          <li>monobank api</li>
          <li>input to transfer the data</li>
          <li>used ternary operator for converter logic</li>
          <li>its not perfect, but it works</li>
        </ul>
            <a href="https://github.com/makandriival/converter-angular-project">GitHub</a>
            <a href="https://makandriival.github.io/converter-angular-project/">Live Demo</a>
        </article>

        {/* <article className='portfolio__item'>
        <div className='portfolio__item-img'>   
        <img src={phoImg} alt="photographer logo" />
        </div>
        <h3>Project name/title!</h3>
            <a href="link to github">GitHub</a>
            <a href="link to live demo">Live Demo</a>
        </article> */}
        
        

        
        
        </div>

    </section>
  )
}

export default Portfolio