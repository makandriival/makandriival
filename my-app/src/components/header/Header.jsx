import React from 'react';
import styled, { keyframes } from 'styled-components'
import './header.css';

const Header = () => {
  return (
    <header>
        <div>
      <AnimA className='animA'>
        Makval's </AnimA>
            <AnimC className='animC'>Portfolio</AnimC>
            <AnimB className='animB'>React Developer</AnimB>
        </div>
        
    </header>
  )
};


// ==========Anim A=============
const leftToright = keyframes`
0% {left: 1000px;}
25% {}
65% {left: 40px;}
100% {left: 150px;}
`
const AnimA = styled.span`

animation-name: ${leftToright};
animation-duration: 3.3s;
animation-fill-mode: forwards;
`
// ==========Anim B=============
const rightToLeft = keyframes`
0% {left: 1000px}
25% {}
65% {left: 0px;}
100% {left: 50px;}
`
const AnimB = styled.span`

animation-name: ${rightToLeft};
animation-duration: 3.3s;
animation-fill-mode: forwards;
`
// ==========Anim C=============
const topToBottom = keyframes`
0% {top: -70px;}
25% {}
65% {top: 100px;}
100% {top: 5px;}
`
const AnimC = styled.span`

animation-name: ${topToBottom};
animation-duration: 3s;
animation-fill-mode: forwards;
`



export default Header