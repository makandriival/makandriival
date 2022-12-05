import React from 'react'
import './contact.css'
import ContactAnim from './ContactAnim';

import { send } from 'emailjs-com';




import { useState } from 'react';


const Contact = (props) => {

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
    props.handleMod();
    alert('Message sent successfully! I will get in touch with you shortly!');
  };

  return (

    
    <section  id='contact'>
      <div className='contact_container'>
     <span>
       Please, do not hesitate to submit!
     </span>
      <ContactAnim/>
     <div className='contact-form'>
       <form 
       onSubmit={onSubmit} 
       >
         <label  htmlFor="name"> Your name:
           <input type="text" name='name' id='name' placeholder='...'
           value={toSend.name}
           onChange={handleChange}
           required
           />
         </label> <br />

         <label  htmlFor="email"> Your Email:
           <input type="email" name='email' id='email' placeholder='...' 
           value={toSend.email}
           onChange={handleChange}
           required
           />
         </label><br />

         <label  htmlFor="textarea"> Your Message:
           <textarea 
           className='inputText' type="textarea" 
           name='text' id='text' placeholder='text...'
           value={toSend.text}
           onChange={handleChange}
           autoFocus
           required/>
         </label><br />

        

         <button>Submit</button>

       </form>``
      </div>
         <button onClick={props.handleMod} className='cls_btn'>X</button>
     </div>

    </section>
  )
}

export default Contact