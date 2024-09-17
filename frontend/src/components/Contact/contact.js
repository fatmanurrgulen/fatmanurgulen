import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
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
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">Benim harika çalışmalarım var.</p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg"/>
                    <img src={Adobe} alt="Client" className="clientImg"/>
                    <img src={Microsoft} alt="Client" className="clientImg"/>
                    <img src={Facebook} alt="Client" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Benimle iletişime geçebilirsiniz.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name="user_name" required />
                    <input type="email" className="email" placeholder='Your Email' name="user_email" required />
                    <textarea className="msg" name="message" rows="5" placeholder='Your Message' required></textarea>
                    <button type='submit' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="facebook" className="link" />
                        <img src={twitterIcon} alt="twitter" className="link" />
                        <img src={YoutubeIcon} alt="youtube" className="link" />
                        <img src={InstagramIcon} alt="instagram" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
