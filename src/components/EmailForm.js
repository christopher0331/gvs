import React, { useState } from 'react';

function EmailForm() {
    const [emailData, setEmailData] = useState({
        to: '',
        subject: '',
        body: ''
    });

    const handleChange = (e) => {
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/send-email', { // Replace with your server URL if different
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        })
        .then(response => response.text())
        .then(data => {
            alert('Email sent successfully!');
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="to"
                placeholder="Recipient's email"
                value={emailData.to}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={emailData.subject}
                onChange={handleChange}
                required
            />
            <textarea
                name="body"
                placeholder="Email Body"
                value={emailData.body}
                onChange={handleChange}
                required
            />
            <button type="submit">Send Email</button>
        </form>
    );
}

export default EmailForm;
