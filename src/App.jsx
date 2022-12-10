import React from 'react'

import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

import { useState } from 'react'




const App = () => {
  
  const [mod, setMod] = useState('closed');
  

  const handleMod = ()=>{
    mod === 'closed' ? setMod('opened') : mod === 'opened' ? setMod('closed') : alert('modal is broken');
  // console.log(mod);
  }

  return (
    <>
    <div className='app_conteiner'>

    <div className={mod ==='opened' ? 'blured' : 'main conteiner'}>
      <Header/>
    <button className='hireMeBtn' onClick = {()=>{handleMod()}}>Contact</button>
    
      <About/>
      

    
     <Portfolio/>
    </div>
  
    {mod==='opened' ? <Contact handleMod = {()=>{handleMod()}} /> : console.log('modal-didnt-open') }

    </div>
    </>
  )
}

export default App