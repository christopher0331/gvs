const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Needed to parse request body
const AWS = require('aws-sdk');
require('dotenv').config(); // To load environment variables from a .env file

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Configure AWS
AWS.config.update({
  accessKeyId: "AKIAZJ7XN6M6Q63UINQY",
  secretAccessKey: "bjLEPxvSIuBOuMax51TUtGQsI26E3L4f/zrdrpjX",
  region: 'us-east-2' // Change to your AWS SES regio
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

// API route for sending email
app.post('/send-email', (req, res) => {
  const { to, subject, body } = req.body;

  const params = {
    Source: 'chris@greenviewsolutions.net', // Replace with your verified SES email
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Subject: {
        Data: subject
      },
      Body: {
        Html: {
          Data: body
        }
      }
    }
  };

  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error sending email!!');
    } else {
      res.send('Email sent successfully');
    }
  });
});

// The "catchall" handler for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
