const AWS = require('aws-sdk');
const credentials = require('./src/aws-credentials.json');

AWS.config.credentials = new AWS.Credentials();

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: credentials.accessKeyId,
  secretAccessKey: credentials.secretAccessKey,
});

