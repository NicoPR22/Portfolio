import React, { useRef, useState }from 'react'
import './Contact.css'
import { MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { RiWhatsappLine } from 'react-icons/ri'
import emailjs from '@emailjs/browser';
import Modal from './modal/Modal'


const Contact = () => {

  const [open, setOpen] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_78iwzs7', 'template_f1ivx1h', form.current, 'UQfCPQhMQ-PafaU_t')
    e.target.reset()
    setOpen(true)
    setTimeout(()=>{
      setOpen(false)
    }, "3000")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nicolasexeburgos@gmail.com</h5>
            <a href="mailto:nicolasexeburgos@gmail.com"  target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Nicolas Burgos</h5>
            <a href="https://m.me/nicolas.e.burgos.1" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine/>
            <h4>WhatsApp</h4>
            <h5>+54 221 6068539</h5>
            <a href="https://api.whatsapp.com/send?phone=5492216068539"  target="_blank">Send A Message</a>
          </article>

        </div>
        {/* ================================ */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeHolder="Your Full Name" required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
          <Modal className="modal" show={open}/>
      </div>
    </section>
  )
}

export default Contact