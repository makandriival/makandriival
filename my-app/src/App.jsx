import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {

  return (
    <div className='app'>
      <Header/>
      <About/>
      <Portfolio/>
    </div>
  )
}

export default App