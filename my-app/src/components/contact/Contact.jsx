import React from 'react'
import './contact.css'

import iconM from '../../assets/img/h8nXNQI1_male_9_cartoon1_preview.png'

const Contact = () => {
  return (
    <section  id='contact'>
      <div className='contact_container'>
     <span>
      You can send me an email or submit the contact form!
     </span>
     <br />
       <img className='imgConntact' src={iconM} alt="makval icon" />
     <span>
      <a href="mailto:remote.makandriival@gmail.com">Click to send an email</a>
     </span>

     <div className='contact-form'>
       <form >
         <label  htmlFor="fname"> Your name:
           <input type="text" name='fname' id='fname' />
         </label> <br />
         <label  htmlFor="email"> Your Email:
           <input type="text" name='email' id='email' />
         </label><br />
         <label className='formText' htmlFor="massage"> Your massage:
           <input className='inputText' type="text" name='massage' id='massage' />
         </label><br />
         <button>submit</button>

       </form>
      </div>
     </div>

    </section>
  )
}

export default Contact