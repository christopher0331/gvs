import React, { useState, useEffect } from 'react';
import { DataProvider } from './Context.js';
import DynamoDBService from '../dbhelpers/dynamoDBService.js'; // adjust this path to your DynamoDBService file location
import ErrorBoundary from './ErrorBoundary.jsx';

const dbService = new DynamoDBService();

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dbService.getAllItems()
      .then(items => setData(items))
      .catch(error => console.log(error));
  }, []);

  return (
    <ErrorBoundary>
      <DataProvider value={{ data, setData }}>
        {children}
      </DataProvider>
    </ErrorBoundary>
  );
};

export default Provider;
