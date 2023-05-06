import React from 'react'
import './contact.scss'
import ContactAnim from './ContactAnim';

import { send } from 'emailjs-com';




import { useState } from 'react';


const Contact = ({
  closeContact
}) => {

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_yy2rsx5',
      'template_k9n6wid',
      toSend,
      'gb5GKwn0ji0Ukl5dC'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        handleSubmit()
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      
  };

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    pitch: '',
    text: ''
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = ()=>{
    setToSend({
      name: '',
    email: '',
    pitch: '',
    text: ''
    });
    closeContact();
    alert('Message sent successfully! I will get in touch with you shortly!');
  };

  return (

    
    <section id='contact' className='contact'>
      <div>
        <div>
          <span>
            Please, do not hesitate to submit!
          </span>
          <button onClick={closeContact} className='btn cls_btn'>X</button>
        </div>

      <ContactAnim/>

       <form 
       onSubmit={onSubmit}
       className='contact__form'
       >
         <label  htmlFor="name">
           <input type="text" name='name' id='name' placeholder='Your name...'
           value={toSend.name}
           onChange={handleChange}
           required
           />
         </label>

         <label  htmlFor="email">
           <input type="email" name='email' id='email' placeholder='Email...' 
           value={toSend.email}
           onChange={handleChange}
           required
           />
         </label>

         <label  htmlFor="textarea">
           <textarea 
           className='inputText'
           type="textarea" 
           name='text' 
           id='text' 
           placeholder='Your Message...'
           value={toSend.text}
           onChange={handleChange}
           autoFocus
           required/>
         </label>

         <button className='btn contact__form__submit'>Submit</button>
       </form>
     </div>

    </section>
  )
}

export default Contact