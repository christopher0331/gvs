import {React, useEffect } from 'react';
import './styles/FreeEstimate.css';
import ContactForm from './ContactForm.jsx';
import ContactInformation from './ContactInformation.jsx';
import Calculator from './Calculator.jsx';

const ContactUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <div>
                <div className="contactUsTitle">
                    Contact Us
                </div>
                <div className="contactFormAndInfo">     
                    <div className="contactForm">
                        <ContactForm />
                    </div>
                    <div className="contactInfo">
                        <ContactInformation />
                    </div>
                </div>
                <div className="contactFormAndInfoBreakpoint"> 
                    <div className="contactInfoBP">
                        <ContactInformation />
                    </div>    
                    <div className="contactFormBP">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs;