const AWS = require('aws-sdk');
const config = require('../../awsConfig.js');
AWS.config.update(config);

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
