import React from 'react'
import './portfolio.scss'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h2 className='portfolio_heding'>Projects</h2>

        <div className='portfolio__container'>
        <article className='portfolio__item'>
        <h3 className='portfolio__item__heading'>Gadjets Store</h3>
        <ul>
          <li>It might load phones from server for several minutes,</li>
          <li>becouse the back end hosted on render.com</li>
          <li>Developed in a team of five</li>
          <li>Made on React, SCSS, Express, NodeJs</li>
          <li>Custom athorization logic</li>
        </ul>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/fe-feb23-LGTM/react_phone-catalog"
            >
              GitHub frontend
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/fe-feb23-LGTM/backend_phone_catalog"
            >
              GitHub backend
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://fe-feb23-lgtm.github.io/react_phone-catalog/"
            >
              Live Demo
            </a>
        </article>

        <article className='portfolio__item'>
        <h3 className='portfolio__item__heading'>myBike Landing</h3>
        <ul>
          <li>Landing page</li>
          <li>Made on React</li>
          <li>gsx, html, scss, classnames</li>
        </ul>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/makandriival/mybike"
            >
              GitHub
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://makandriival.github.io/mybike/"
            >
              Live Demo
            </a>
        </article>

        <article className='portfolio__item'>
        <h3 className='portfolio__item__heading'>Todo App</h3>
        <ul>
          <li>React with Typescript</li>
          <li>MateAcademy api</li>
          <li>Input to create new todo</li>
          <li>Bylma for styling</li>
          <li>Used props to transfer data between components</li>
        </ul>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/makandriival/toDoApp"
            >
              GitHub
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://makandriival.github.io/toDoApp/"
            >
              Live Demo
            </a>
        </article>
        
        <article className='portfolio__item'>    
        <h3 className='portfolio__item__heading'>Kino-React-App</h3>
        <ul>
          <li>React web app</li>
          <li>Movie database api</li>
          <li>Used local storage to store the watch lists</li>
          <li>Lots of props movement</li>
          <li>Styling sucks, but hey im not a designer</li>
        </ul>
            <a
              href="https://github.com/makandriival/kino-react-app/tree/main/kinomak"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href='https://makandriival.github.io/kino-react-app/'
              rel="noreferrer"
              target="_blank"
            >
              Kino-App Live Demo
            </a>
        </article>

        <article className='portfolio__item'>
        <h3 className='portfolio__item__heading'>Angular Currency Converter</h3>
        <ul>
          <li>Angular web app</li>
          <li>Monobank api</li>
          <li>Input to transfer the data</li>
          <li>Used ternary operator for converter logic</li>
          <li>Its not perfect, but it works</li>
        </ul>
            <a
              href="https://github.com/makandriival/converter-angular-project"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://makandriival.github.io/converter-angular-project/"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
        </article>
        </div>

    </section>
  )
}

export default Portfolio