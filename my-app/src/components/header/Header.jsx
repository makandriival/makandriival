import React, { useState } from 'react';
import Contact from '../contact/Contact';
import './header.scss';

const Header = () => {
  const [isContactOpen, setContactOpen] = useState(false)

  const handleCloseContact = () => {
    setContactOpen(false);
  };

  return (
    <header className='header'>
        <div className="header__leftside">
          <span className='header__img'></span>
        </div>
        <div className="header__rightside">
        <h1 className='header__h1'>
          Full-Stack 
        </h1>
        <h2 className='header__h2'>
          Andrii Makarov
        </h2>
        <div className="header__btns">
          <button 
          className='header__contactBtn button'
          onClick={() => {
            setContactOpen(true);
          }}
          >
            contact
          </button>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1TbUBdRy2gNdxJdeeUhlGuJP_y-6FU_2U/view?usp=sharing"
            className='button'
          >
            CV
          </a>
        </div>
        {isContactOpen && (
          <Contact closeContact={handleCloseContact} />
        )}
        </div>
    </header>
  )
};

export default Header