import React, { useContext } from 'react';
import { DataContext } from './Context.js';

const MarketingData = () => {

    const { state } = useContext(DataContext);
    const { marketingData } = state;
  
  if (!marketingData) {
    // Handle the case when marketingData is undefined or empty
    return (
      <div>
        <h1>No Marketing Data Found</h1>
        <p>There are no marketing records available.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Marketing Data</h1>
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
          {marketingData.map((item) => (
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

export default MarketingData;
