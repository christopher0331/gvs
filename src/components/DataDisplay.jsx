import React from 'react';
import MarketingFormPost from './MarketingFormPost.jsx';
import WarrantyData from './WarrantyData.jsx';
import MarketingData from './MarketingData.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const DataDisplay = () => {
  return (
    <div>
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <MarketingFormPost />
      </ErrorBoundary>

      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <WarrantyData />
      </ErrorBoundary>

      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <MarketingData />
      </ErrorBoundary>

    </div>
  );
};

export default DataDisplay;
