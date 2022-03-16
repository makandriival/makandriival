import React from 'react'



import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'


const App = () => {
  return (
    <>
    <Header/>
    <About />
    <Portfolio/>
    <Contact />

    <Nav />
    </>
  )
}

export default App