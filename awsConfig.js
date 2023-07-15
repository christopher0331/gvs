const AWS = require('aws-sdk');
require('dotenv').config();
console.log('helllo ---------------------------------------')

console.log( 'PUBLIC +==========> ',  process.env.PUBLIC_KEY,
'SECRET KEY =============+>' , process.env.SECRET_KEY)

AWS.config.credentials = new AWS.Credentials();

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: process.env.PUBLIC_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

