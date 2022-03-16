import React from 'react';
import './header.css';
import {SiAtom} from 'react-icons/si';

const Header = () => {
  return (
    <header id='home' className='portfolio'>
        <div>
            <h1> <SiAtom/> MakAndriiVal</h1>
            
            <a href="#portfolio" > My portfolio  </a>

        </div>
    </header>
  )
}

export default Header