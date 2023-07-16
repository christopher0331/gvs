const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.credentials = new AWS.Credentials();

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: process.env.REACT_APP_MY_PUBLIC_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY,
});

