import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [request, setRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      firstName,
      lastName,
      email,
      phone,
      city,
      zipCode,
      stateRegion,
      request,
    };

    console.log("newRequest ===> ", newRequest);

    axios.post('https://your-api-endpoint.com/postRequest', newRequest)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCity('');
    setZipCode('');
    setStateRegion('');
    setRequest('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>How can we help?</h1>
      <p>Fields marked with an * are required</p>
      <label>
        First Name*:
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name*:
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email*:
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        City*:
        <input
          type="text"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        Zip Code*:
        <input
          type="text"
          required
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </label>
      <label>
        State/Region*:
        <input
          type="text"
          required
          value={stateRegion}
          onChange={(e) => setStateRegion(e.target.value)}
        />
      </label>
      <label>
        Tell Us About Your Request:
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
      </label>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default ContactForm;
