import axios from 'axios';
const AWS = require('aws-sdk');
require('dotenv').config();
AWS.config.update({region: 'us-west-2'})

axios.get("https://379pj43m47.execute-api.us-west-2.amazonaws.com/default/gvsGetCreds")
  .then((response) => {
    console.log('============> ', response);
    AWS.config.update({
      region: 'us-west-2',
      accessKeyId: response.data.accessKeyId,
      secretAccessKey: response.data.secretAccessKey,
    });
  })
  .catch((err) => {
    console.log('error', err);
  });


const dynamoDB = new AWS.DynamoDB({
    region: 'us-west-2'
});

const createMarketingTable = () => {
  const params = {
    TableName: 'MarketingForm',
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' }, // Primary key attribute
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' }, // Attribute type: String
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5, // Adjust as per your needs
      WriteCapacityUnits: 5, // Adjust as per your needs
    },
  };

  dynamoDB.createTable(params, (err, data) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table created successfully:', data);
    }
  });
};

createMarketingTable();
