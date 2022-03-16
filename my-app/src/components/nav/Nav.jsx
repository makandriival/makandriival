import React from 'react'
import './nav.css'

import { CgHome } from 'react-icons/cg';
import { IoMdContact } from 'react-icons/io';
import {SiAtom} from 'react-icons/si';

import {useState} from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
   
      <nav>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : '' }> <CgHome className='nav__icons'/></a>
      <a href="#pro" onClick={()=>setActiveNav('#pro')} className={ activeNav === '#pro' ? 'active' : '' }> <SiAtom className='nav__icons'/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : '' }> <IoMdContact className='nav__icons'/></a>
     </nav>
  
  );
};

export default Nav
