const AWS = require('aws-sdk');
const credentials = require('../aws-credentials.json');

AWS.config.credentials = new AWS.Credentials();

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: credentials.accessKeyId,
  secretAccessKey: credentials.secretAccessKey,
});

class DynamoDBService {
    
  constructor() {
    this.docClient = new AWS.DynamoDB.DocumentClient();
    // Update the table name to match your use case
    this.tableName = 'WarrantyForm';
    console.log('testing dynamoDBService');

  }

  getAllItems = () => {
    const params = {
      TableName: this.tableName,
    };

    return new Promise((resolve, reject) => {
      this.docClient.scan(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Items);
        }
      });
    });
  }


  getItem(email) {
    const params = {
      TableName: this.tableName,
      Key: {
        email: email,
      },
    };
  
    return new Promise((resolve, reject) => {
      this.docClient.get(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Item);
        }
      });
    });
  }

  
  createItem(request) {
    console.log('testing dynamoDBService');
    const params = {
      TableName: this.tableName,
      Item: request,
    };

    return new Promise((resolve, reject) => {
      this.docClient.put(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  // Add more methods here as needed (e.g., deleteRequest, updateRequest, etc.)
}

export default DynamoDBService;
