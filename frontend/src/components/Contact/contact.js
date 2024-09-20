import React, { useRef } from 'react';   
import './contact.css';
import { FaJsSquare, FaReact, FaNodeJs, FaTypo3,  FaDatabase } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_qpzisf4', 'template_7rcebxe', form.current, 'nhOVeDyIyAxYLBWee') 
            .then((result) => {
                console.log('SUCCESS!', result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Kullandığım Araçlar</h1>
                <div className="techIcons">
                    <FaJsSquare />
                    <FaReact />
                    <FaNodeJs />
                    <FaTypo3 />
                    <FaDatabase />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Feel free to reach out to me anytime.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name="user_name" required />
                    <input type="email" className="email" placeholder='Your Email' name="user_email" required />
                    <textarea className="msg" name="message" rows="5" placeholder='Your Message' required></textarea>
                    <button type='submit' className="submitBtn">Submit</button>
                </form>
            </div>
        </section>
    );
    
}

export default Contact;
