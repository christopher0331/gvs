import React, { useEffect, useState } from 'react';
import DynamoDBService from '../dbhelpers/dynamoDBService.js';

const dbService = new DynamoDBService();

const WarrantyForm = () => {
  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [productSerialNumber, setProductSerialNumber] = useState('');

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchAllDetails = async () => {
      try {
        const allDetails = await dbService.getAllItems();
        setDetails(allDetails);
      } catch (error) {
        console.error('Error fetching setup and warranty details:', error);
      }
    };

    fetchAllDetails();
  }, []);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSetupWarranty = {
      firstName,
      lastName,
      email,
      productName,
      productSerialNumber,
    };

    console.log('testing WarrantyForm', dbService);

    try {
      await dbService.createItem(newSetupWarranty);
      setFirstName('');
      setLastName('');
      setEmail('');
      setProductName('');
      setProductSerialNumber('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>

    <h1>Setup and Warranty Details</h1>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Product Name</th>
                <th>Product Serial Number</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.firstName}</td>
                  <td>{detail.lastName}</td>
                  <td>{detail.email}</td>
                  <td>{detail.productName}</td>
                  <td>{detail.productSerialNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>

    <form onSubmit={handleSubmit}>
      <h1>Setup & Warranty!</h1>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        Product Serial Number:
        <input
          type="text"
          value={productSerialNumber}
          onChange={(e) => setProductSerialNumber(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>

    

    </div>
  );
};

export default WarrantyForm;
