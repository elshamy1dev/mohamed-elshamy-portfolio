import "./Contacts.css"
import {HiOutlineMail} from "react-icons/hi"
import {PiMessengerLogoBold} from "react-icons/pi"
import {BsWhatsapp} from "react-icons/bs"
import { MdOutlineContactMail } from "react-icons/md"
import logo from "../../assets/my_logo.png"

// email js
import React, { useRef } from 'react';
import emailjs from "emailjs-com"



const Contacts = () => {
    // email js
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
            emailjs.sendForm('service_rpg65um', 'template_ryegeop', form.current, 'dEZQXaveVd3Zn7r__')
            e.target.reset()
        };



    return(
        <section id="contacts">

                <div className="container-logo">
                    <img className="logo-about" src={logo} alt="" />
                    <h2 className="section-title">Contact <span>ME</span> </h2>
                    <MdOutlineContactMail className="btn-about" />
                </div>            
                
                <div className="container contact-container">

                <div className="contact-options">

                    <article className="contact-option">
                        <HiOutlineMail className="icon-contact" />
                        <h3>Email</h3>
                        <h5>sophymohamed613@gmail.com</h5>
                        <a className="send-message" href="mailto:sophymohamed613@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <PiMessengerLogoBold className="icon-contact" />
                        <h3>Messenger</h3>
                        <h5>Mohamed Elshamy</h5>
                        <a className="send-message" href="http://m.me/mohamed.alshamy.3150" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <BsWhatsapp className="icon-contact" />
                        <h3>WhatsApp</h3>
                        <h5>+201096601061</h5>
                        <a className="send-message" href="https://wa.me/201096601061" target="_blank" rel="noreferrer">Send a message</a>
                    </article>

                </div>


                <form ref={form} onSubmit={sendEmail}>
                    <div className="full-name">
                        <input type="text" name="Fname" placeholder="First Name" required />
                        <input type="text" name="Lname" placeholder="Last Name" required />
                    </div>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <textarea name="message" rows="10" placeholder="Enter your message"></textarea>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>

            </div>

        </section>
    )
}

export default Contacts;