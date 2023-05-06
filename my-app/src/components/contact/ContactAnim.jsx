import React from 'react'

import iconBat from '../../assets/img/contact-anim-img/h8nXNQI1_male_9_cartoon1_preview.png'
import iconHands from '../../assets/img/contact-anim-img/h8nXNQI1_male_9_cartoon4_preview.png'

import styled, { keyframes } from 'styled-components'

function ContactAnim() {
  return (
    <>
    <AnimBat className='imgContact' 
     alt="makval icon">
     <img src={iconBat} alt="bat-img" />
    </AnimBat>
    <AnimHands className='imgContact' 
     alt="makval icon">
     <img src={iconHands} alt="bat-img" />
    </AnimHands>
  </>
  )
}
// =========================================

const animBatMotion = keyframes`
0% {left: 100vw;
  transform: rotate(15deg);}
25% {left: 60vw;
  transform: rotate(180deg);}
65% {
 left: 50vw;
}
100% {
  left: -10vw;
}
`

const AnimBat = styled.div`
    animation: ${animBatMotion} 4s linear ;
    position: absolute;
    left: -14rem;
`
const animHandsMotion = keyframes`
0% {left: 70rem;}
25% {;
  transform: rotate(180deg);
}
65% {
 
}
100% {
  left: -50rem
}
`

const AnimHands = styled.div`
    animation: ${animHandsMotion} 5s linear ;
    position: absolute;
    left: -50rem;   
    top: 5vh; 
`

export default ContactAnim