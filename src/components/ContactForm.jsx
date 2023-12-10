import React from 'react';
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
        this.sendMessage = this.sendMessage.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    sendMessage(event) {
        event.preventDefault();
        const { name, phone, email, address, message } = this.state;

        fetch('https://www.greenviewsolutions.net/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: email,
                subject: `Message from ${name}`,
                body: `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Address: ${address}<br>Message: ${message}`
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your request, we\'ll be in touch soon!');
                this.setState({ name: '', phone: '', email: '', address: '', message: '' }); // Reset form
            } else {
                alert('Failed to send email.');
            }
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        });
    }

    render() {
        const { name, phone, email, address, message } = this.state;
        return (
            <div className="formBackground">
                <form onSubmit={this.sendMessage}>
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
