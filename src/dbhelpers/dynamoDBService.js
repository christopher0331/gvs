import axios from 'axios'; 
const AWS = require('aws-sdk');
require('dotenv').config();
AWS.config.update({region: 'us-west-2'})

AWS.config.credentials = new AWS.Credentials();

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

class DynamoDBService {
    
  constructor() {
    this.docClient = new AWS.DynamoDB.DocumentClient();
    // Update the table name to match your use case
    this.tableName = 'WarrantyForm';
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


  deleteItem(email) {
    const params = {
      TableName: this.tableName,
      Key: {
        email: email,
      },
    };
  
    return new Promise((resolve, reject) => {
      this.docClient.delete(params, (err, data) => {
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
