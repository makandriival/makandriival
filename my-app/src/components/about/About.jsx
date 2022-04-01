import React from 'react'
import './about.css'

import AboutTxt from './AboutTxt'

import meImg from '../../assets/img/img-about.png'

import {GiYinYang} from 'react-icons/gi'
import {GiMagnifyingGlass} from 'react-icons/gi'
import {FaPrayingHands} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
    <div className="container about__container">
    
    <div className="about__me">
        <img src={meImg} alt="About" />
    </div>
    
    <div className="about__content">
      <div className="about__cards">

        <article className='about__card'>
          <GiYinYang className='about__icon'/>
          <h3>Motivated</h3>         
        </article>

        <article className='about__card'>
          <GiMagnifyingGlass className='about__icon'/>
          <h3>Self-Learner</h3>         
        </article>

        <article className='about__card'>
          <FaPrayingHands className='about__icon'/>
          <h3>Team Player</h3> 
        </article>        
      </div>
          <div className='bullets'>
          <h2>A bit about my experience:</h2>
      <ul>
        <li className='li__parent'>I have worked in an outstuff company, as a: 
        <br />
            <li className='li__child'>Copywrighter</li>
            <li className='li__child'>Marketing specialist</li>
            <li className='li__child'>Social media maneger</li>
            </li>
        <li className='li__parent'>All my adulthood i spent in sales.</li>
        <li className='li__parent'>Founded E'comerce bussiness together with my friend's. </li>
      </ul>
          </div>
    </div>
    </div> 

    <AboutTxt/>

    </section>
  )
}

export default About



