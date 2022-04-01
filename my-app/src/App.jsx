import React from 'react'

import Intro from './components/intro/Intro'
import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

import { useEffect } from 'react'
import {useState} from 'react'

import './components/nav/nav.css'

// import { CgHome } from 'react-icons/cg';
// import { IoMdContact } from 'react-icons/io';
// import {SiAtom} from 'react-icons/si';

const App = () => {
  
  const [activeNav, setActiveNav] = useState('About');

  React.useEffect(()=>{
    const data = localStorage.getItem('actComp');
    if (data) {setActiveNav(JSON.parse(data))};
  }, [] );

  React.useEffect(()=>{
    localStorage.setItem('actComp', JSON.stringify(activeNav));
  });
  
  return (
    <>
    <Intro/>
    <Header/>
    <nav>
      <button href="#about" onClick={()=>setActiveNav('About')} className={ activeNav === "About" ? 'act' : ''}> About </button>
      <button href="#portfolio" onClick={()=>setActiveNav('Portfolio')} className={ activeNav === 'Portfolio' ? 'act' : '' }> Portfolio </button>
      <button href="#contact" onClick={()=>setActiveNav('Contact')} className={ activeNav === 'Contact' ? 'act' : '' }> Contact </button>
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