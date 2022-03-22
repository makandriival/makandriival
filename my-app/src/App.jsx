import React from 'react'



import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Nav from '/Users/andriimakarov/Documents/GitHub/makandriival/makandriival/my-app/src/components/nav/Nav.jsx'

import {useState} from 'react'

import './components/nav/nav.css'

import { CgHome } from 'react-icons/cg';
import { IoMdContact } from 'react-icons/io';
import {SiAtom} from 'react-icons/si';

const App = () => {
  
  const [activeNav, setActiveNav] = useState('About');
  
  return (
    <>
    <Header/>
    <nav>
      <a href="#about" onClick={()=>setActiveNav('About')} className={ activeNav === '#about' ? 'active' : '' }> About <CgHome className='nav__icons'/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('Portfolio')} className={ activeNav === '#portfolio' ? 'active' : '' }> Portfolio <SiAtom className='nav__icons'/></a>
      <a href="#contact" onClick={()=>setActiveNav('Contact')} className={ activeNav === '#contact' ? 'active' : '' }> Contact <IoMdContact className='nav__icons'/></a>
    </nav>
    
    <div>
      {activeNav==='About' && <About/>}
      {activeNav==='Portfolio' && <Portfolio/>}
      {activeNav==='Contact' && <Contact/>}
    </div>
    </>
  )
}

export default App