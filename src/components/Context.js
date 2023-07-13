import React, { useEffect, createContext, useReducer, useState } from 'react';
import DynamoDBService from '../dbhelpers/dynamoDBService'; // adjust this path to your dynamoDBService.js file location
import DynamoDBServiceMarketing from '../dbhelpers/dynamoDBServiceMarketing'; // adjust this path to your dynamoDBService.js file location
import axios from 'axios';

const DataContext = createContext();

const initialState = {
  warrantyData: [],
  marketingData: [],
};

const dbService = new DynamoDBService();
const dbServiceMarketing = new DynamoDBServiceMarketing();

// Define a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MARKETING_DATA':
      return { ...state, marketingData: action.payload };
    case 'SET_WARRANTY_DATA':
      return { ...state, warrantyData: action.payload };
    case 'DELETE_ITEM_WARRANTY':
      return { ...state, warrantyData: state.warrantyData.filter(item => item.email !== action.payload.email) };
    case 'DELETE_ITEM_MARKETING':
        return { ...state, marketingData: state.marketingData.filter(item => item.id !== action.payload.id) };
    case 'EDIT_ITEM':
      // This part needs to be implemented based on your requirement
      return state;
    case 'ADD_ITEM_WARRANTY':
      return { ...state, warrantyData: [...state.warrantyData, action.payload] };
    case 'ADD_ITEM_MARKETING':
      return { ...state, marketingData: [...state.marketingData, action.payload] };
    default:
      throw new Error();
  }
};

// Define a provider
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true); // Add loading state

  const setWarrantyData = (data) => {
    dispatch({ type: 'SET_WARRANTY_DATA', payload: data });
  };

  // Define actions
  const setMarketingData = (data) => {
    dispatch({ type: 'SET_MARKETING_DATA', payload: data });
  };


  const triggerDataScrubbing = async () => {
    try {
      const response = await axios.post('/scrubAndUploadData');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  triggerDataScrubbing();
  
  useEffect(() => {
    const fetchMarketingData = async () => {
      try {
        const marketingData = await dbServiceMarketing.getAllItems();
        setMarketingData(marketingData);
      } catch (error) {
        console.error('Error fetching marketing data:', error);
      }
    };

    const fetchWarrantyData = async () => {
      try {
        const warrantyData = await dbService.getAllItems();
        setWarrantyData(warrantyData);
      } catch (error) {
        console.error('Error fetching warranty data:', error);
      } finally {
        setLoading(false); // Set loading state to false after fetching warranty data
      }
    };

    fetchMarketingData();
    fetchWarrantyData();
  }, []);

  const addItemWarranty = async (item) => {
    try {
      await dbService.createItem(item);
      dispatch({ type: 'ADD_ITEM_WARRANTY', payload: item });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const deleteItemFromContext = async (item) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await dbService.deleteItem(item.email);
        dispatch({ type: 'DELETE_ITEM_WARRANTY', payload: item });
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };




  const addItem = async (item) => {
    try {
      await dbServiceMarketing.createItem(item);
      dispatch({ type: 'ADD_ITEM_MARKETING', payload: item });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const deleteMarketingItemFromContext = async (item) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await dbServiceMarketing.deleteMarketingItem(item.id);
        dispatch({ type: 'DELETE_ITEM_MARKETING', payload: item });
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  const editItem = (item) => {
    dispatch({ type: 'EDIT_ITEM', payload: item });
    // Call to DBService update method needs to be implemented
  };


  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <DataContext.Provider
    value={{
        state,
        setMarketingData,
        setWarrantyData,
        deleteItemFromContext,
        editItem,
        addItem,
        addItemWarranty,
        deleteMarketingItemFromContext
    }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
