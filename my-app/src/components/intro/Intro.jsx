import React from 'react'
import styled, { keyframes } from 'styled-components'
import './intro.css'


export default function Intro (){

   

  return (
        <BgAnim className= 'intro'>
        <div className='logo-header'>
            <First className='logo' >Andrii Makarov</First> <Second className='logo'>Portfolio</Second>
        </div>
        
    </BgAnim>
  )
}

// ======bg animation========

const bg_animation = keyframes`
0% {}
45% {top: -60vh;}
65% {top: -60vh;}
100% {top: -100vh}
`
const BgAnim = styled.span`

animation-name: ${bg_animation};
animation-duration: 1.5s;
animation-fill-mode: forwards;
`


// =======first word=========
const fw_anim= keyframes`
0% {color: rgb(255, 0, 212);}
25% {
    bottom: 0;
    opacity: 1;
    transition: ease-in-out 0.5s;
}
75% {}
100% {color: rgb(0, 255, 255);}
`

const First =styled.span`
animation-name: ${fw_anim};
animation-duration: 2s;
`

// =======second word=========
const sw_anim= keyframes`
0% {color: rgb(0, 255, 255);}
25% {
}
75% {
    bottom: 0;
    opacity: 1;
    transition: ease-in-out 0.5s;
}
100% {color: rgb(255, 0, 212);}
`

const Second =styled.span`
animation-name: ${sw_anim};
animation-duration: 2s;
`









// animation-iteration-count: Infinite;

// let intro = document.querySelector('.intro');
//   let logo = document.querySelector('.logo-header');
//   let spans = document.querySelector('.logo');

//   window.addEventListener('DOMContentLoaded', ()=>{

//     setTimeout(()=>{

//       spans.forEach((span, idx)=>{
//         setTimeout(()=>{
//           span.classList.add('active');
//         }, (idx+1) * 400)
//       });
//     });

//     setTimeout(()=>{

//         spans.forEach((span, idx)=>{
        
//             setTimeout(()=>{
//             span.classList.remove('active');
//             span.classList.add('fade');
//         }, (idx+1) * 50)
//     });
// },2000);

// setTimeout(()=>{
//     intro.style.top = '-100vh'
// });

// });

