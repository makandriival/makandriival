import React from 'react'

import iconBat from '../../assets/img/contact-anim-img/h8nXNQI1_male_9_cartoon1_preview.png'
import iconPiece from '../../assets/img/contact-anim-img/h8nXNQI1_male_9_cartoon6_preview.png'
import iconHands from '../../assets/img/contact-anim-img/h8nXNQI1_male_9_cartoon4_preview.png'

import styled, { keyframes } from 'styled-components'

function ContactAnim() {
  return (
    <div>
    

    <AnimBat className='imgContact' 
     alt="makval icon">
     <img src={iconBat} alt="bat-img" />
    </AnimBat>
    <AnimHands className='imgContact' 
     alt="makval icon">
     <img src={iconHands} alt="bat-img" />
    </AnimHands>
    <AnimPiece className='imgContact' 
     alt="makval icon">
     <img src={iconPiece} alt="bat-img" />
    </AnimPiece>
   
  </div>
  )
}
// =========================================

const animBatMotion = keyframes`
0% {left: -30rem;
  transform: rotate(15deg);}
25% {left: -10rem;
  transform: rotate(180deg);}
65% {
  /* right:-10rem; */
}
100% {
  left:-40rem;
}
`

const AnimBat = styled.div`
    animation: ${animBatMotion} 4s linear ;
    position: absolute;
    left: -40rem;
   
    /*===========================================  */
`
const animHandsMotion = keyframes`
0% {left:50rem;
  /* transform: rotate(15deg); */
}
25% {left:10rem;
  transform: rotate(180deg);
}
65% {
 
}
100% {
  
}
`

const AnimHands = styled.div`
    animation: ${animHandsMotion} 5s linear ;
    position: absolute;
    left: 50rem;    
`

// ===============================

const animPieceMotion = keyframes`
0% {
  
}
25% {
  left: 10rem;
  transform: rotate(35deg)
  
}
65% {transform: rotate(-35deg)
 
}
100% {
  
}
`

const AnimPiece = styled.div`
    animation: ${animPieceMotion} 3s linear infinite;
   position: absolute;
top:-15rem; 
left:-7rem;
`

export default ContactAnim