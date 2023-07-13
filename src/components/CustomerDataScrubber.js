import * as fs from 'fs';
const AWS = require("aws-sdk");
const csv = require("csv-parser");
const credentials = require('../aws-credentials.json');

AWS.config.credentials = new AWS.Credentials();

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: credentials.accessKeyId,
  secretAccessKey: credentials.secretAccessKey,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = "customerDataScrubbing"; // update with your table name

const CustomerDataScrubber = () => {
    const isValidZip = (zip) => /^\d{5}$/.test(zip);

    const scrubPhoneNumber = (phoneNumber) => {
      const digits = phoneNumber.replace(/\D/g, '');
      return digits.length === 10 ? digits : '';
    };
    
    const isValidEmail = (email) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+com$/.test(email);
    
    function generateRandomId() {
        const maxId = 100000;
        return Math.floor(Math.random() * maxId);
      }
    
    
    fs.createReadStream('./customers2.csv')
      .pipe(csv())
      .on('data', (row) => {
        // Scrub the data
        const scrubbedData = {
          id: generateRandomId(),
          Name: row['Name'],
          StreetAddress: row['Street Address'],
          City: row['City'],
          State: row['State'],
          ZipCode: isValidZip(row['Zip Code']) ? row['Zip Code'] : null,
          PhoneNumber: scrubPhoneNumber(row['Phone Number']),
          Email: isValidEmail(row['Email']) ? row['Email'] : null,
        };
    
        // Insert data into DynamoDB
        const params = {
          TableName: tableName,
          Item: scrubbedData,
        };
    
        dynamodb.put(params, (err, data) => {
          if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
          } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
          }
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });
    
}

export default CustomerDataScrubber;
  
