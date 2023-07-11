import React, { useState } from 'react';
import axios from 'axios';
import './styles/AboutUs.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [marketingChannels, setMarketingChannels] = useState('');
  const [bidTotal, setBidTotal] = useState('');
  const [completedProjectTotal, setCompletedProjectTotal] = useState('');
  const [projectTypes, setProjectTypes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new customer object
    const newCustomer = {
      name,
      streetNumber,
      city,
      state,
      zipCode,
      phone,
      marketingChannels,
      bidTotal,
      completedProjectTotal,
      projectTypes
    };

    console.log("newCustomers ===> ", newCustomer);

    
    // Send a POST request to the API endpoint
    axios.post('https://14y5p40bnl.execute-api.us-west-2.amazonaws.com/putCustomerDataInfo/postCustomerData', newCustomer)
      .then((response) => {
        console.log(response.data);
        // Optionally, display a success message or perform additional actions
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Optionally, display an error message or perform error handling
      });

    // Reset the form fields
    setName('');
    setStreetNumber('');
    setCity('');
    setState('');
    setZipCode('');
    setPhone('');
    setMarketingChannels('');
    setBidTotal('');
    setCompletedProjectTotal('');
    setProjectTypes('');
  };

  return (
    <div className="projOverviewDiv">
      <form className="formContainer" onSubmit={handleSubmit}>
        <h1 className="formTitle">Marketing Form</h1>
        <div className="formField">
          <div>
            <label className="formLabel">
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              Street Number:
              <input
                type="text"
                name="streetNumber"
                value={streetNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              City:
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              State:
              <input
                type="text"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              Zip Code:
              <input
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              Phone:
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              Marketing Channels:
              <input
                type="text"
                name="marketingChannels"
                value={marketingChannels}
                onChange={(e) => setMarketingChannels(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              Bid Total:
              <input
                type="text"
                name="bidTotal"
                value={bidTotal}
                onChange={(e) => setBidTotal(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              Completed Project Total:
              <input
                type="text"
                name="completedProjectTotal"
                value={completedProjectTotal}
                onChange={(e) => setCompletedProjectTotal(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="formLabel">
              Project Types:
              <input
                type="text"
                name="projectTypes"
                value={projectTypes}
                onChange={(e) => setProjectTypes(e.target.value)}
              />
            </label>
          </div>
          <button className="pofButton" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;