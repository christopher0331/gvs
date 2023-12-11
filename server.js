const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allowed origins for CORS
const allowedOrigins = [
  'https://greenviewsolutions.net',
  'https://www.greenviewsolutions.net'
];

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));  // Apply CORS before other routes

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.PUBLIC_KEY,
    secretAccessKey: process.env.PRIVATE_KEY,
    region: 'us-east-2' // Change to your AWS SES region
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



