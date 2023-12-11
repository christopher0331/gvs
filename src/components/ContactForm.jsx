import React from 'react';
import emailjs from 'emailjs-com';
import './styles/FreeEstimate.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            address: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('service_p6clffh', 'template_jidzwzw', event.target, 'user_wPYeoaoebNsoGt3GhzLVu')
            .then((result) => {
                console.log(result.text);
                alert('Thank you for your message, we will be in touch soon!');
                this.setState({ name: '', phone: '', email: '', address: '', message: '' }); // Reset form
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email, please try again.');
            });
    }

    render() {
        const { name, phone, email, address, message } = this.state;
        return (
            <div className="formBackground">
                <form onSubmit={this.sendEmail}>
                    <div className="formContactInfo">
                        <div className="row1">
                            <label className='inputBox'>
                                <input className='inputField' placeholder="Name" type="text" name="name" value={name} onChange={this.handleChange} />
                            </label>
                            <label className='inputBox'>
                                <input className='inputField' placeholder="Phone" type="tel" name="phone" value={phone} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="row2">
                            <label className='inputBox'>
                                <input className='inputField' placeholder="Email" type="email" name="email" value={email} onChange={this.handleChange} />
                            </label>
                            <label className='inputBox'>
                                <input className='inputField' placeholder="Address" type="text" name="address" value={address} onChange={this.handleChange} />
                            </label>
                        </div>
                    </div>
                    <div className="messageBoxAndSubmitButton">
                        <div className="messageBox">
                            <textarea className="messageArea inputField" placeholder='Description of Project' name="message" value={message} onChange={this.handleChange} />
                        </div>
                        <div className="submitButtonBox">
                            <input className="submitButton" type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;

