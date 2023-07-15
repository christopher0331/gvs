const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: process.env.PUBLIC_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

const dynamoDB = new AWS.DynamoDB({
    region: 'us-west-2'
});

const createTable = () => {
  const params = {
    TableName: 'WarrantyForm',
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

createTable();
