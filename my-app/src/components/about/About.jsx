import React from 'react'
import './about.css'
import {useState} from 'react'

import meImg from '../../assets/img/img-about.png'

import {GiYinYang} from 'react-icons/gi'
import {GiMagnifyingGlass} from 'react-icons/gi'
import {FaPrayingHands} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
    <div className="container about__container">
    <div className="about__me">
     
      <div className="about__me-img">
        <img src={meImg} alt="About Image" />
      </div>

    </div>
    
    <div className="about__content">
      <div className="about__cards">

        <article className='about__card'>
          <GiYinYang className='about__icon'/>
          <h3>Motivated</h3>
          <small></small>
        </article>

        <article className='about__card'>
          <GiMagnifyingGlass className='about__icon'/>
          <h3>Quick Learner</h3>
          <small></small>
        </article>

        <article className='about__card'>
          <FaPrayingHands className='about__icon'/>
          <h3>Team Player</h3>
          <small></small>
        </article>

      </div>

      <p>
      ...working online and building my House in parallel.
I'm studying JavaScript becoz i love to work remotely, and I am fascinated by the range of possible outcomes of 
mixing HTML, CSS, and JS. Also the speed of development of new tech...<a href="">Read more...</a> 
      </p>
    </div>  
    

    </div>
    </section>
  )
}

export default About



