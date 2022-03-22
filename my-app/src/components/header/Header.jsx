import React from 'react';
import './header.css';
import {SiAtom} from 'react-icons/si';
import Nav from '/Users/andriimakarov/Documents/GitHub/makandriival/makandriival/my-app/src/components/nav/Nav.jsx'

// console.log(activeNav);

const Header = () => {
  return (
    <header id='home' className='portfolio'>
        <div>
            <h3>Makval's</h3>
            <h1>Portfolio</h1>
            <h5>React Developer</h5>
        </div>
    </header>
  )
}

export default Header