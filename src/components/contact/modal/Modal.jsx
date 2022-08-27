import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import './Modal.css' 

const Modal = ({show}) => {
  if(!show) return null
  return (
    <div className="modal__container">
        <p>Message Sent</p>
        <BiCheckCircle className='modal__icon'/>
    </div>
  )
}

export default Modal