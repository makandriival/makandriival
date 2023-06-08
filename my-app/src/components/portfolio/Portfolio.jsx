import React from 'react'
import './portfolio.scss'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h2>Projects</h2>

        <div className='portfolio__container'>
        
        <article className='portfolio__item'>    
        <h3 className='portfolio__item__heading'>Kino-React-App</h3>
        <ul>
          <li>react web app</li>
          <li>movie database api</li>
          <li>used local storage to store the watch lists</li>
          <li>lots of props movement</li>
          <li>styling sucks, but hey im not a designer</li>
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
          <li>angular web app</li>
          <li>monobank api</li>
          <li>input to transfer the data</li>
          <li>used ternary operator for converter logic</li>
          <li>its not perfect, but it works</li>
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

        <article className='portfolio__item'>
        <h3 className='portfolio__item__heading'>Todo App</h3>
        <ul>
          <li>React with Typescript</li>
          <li>MateAcademy api</li>
          <li>input to create new todo</li>
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
        </div>

    </section>
  )
}

export default Portfolio