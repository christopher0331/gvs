import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarketingFormPost from './MarketingFormPost.jsx';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get('https://2igaj32lwf.execute-api.us-west-2.amazonaws.com/getCustomerDataStage/getCustomerData')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <MarketingFormPost /> 
      <h1>Data Display</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Street Number</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Phone</th>
            <th>Marketing Channels</th>
            <th>Bid Total</th>
            <th>Completed Project Total</th>
            <th>Project Types</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.streetNumber}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.zipCode}</td>
              <td>{item.phone}</td>
              <td>{item.marketingChannels}</td>
              <td>{item.bidTotal}</td>
              <td>{item.completedProjectTotal}</td>
              <td>{item.projectTypes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDisplay;
