const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const seriesRoutes = require('./api/routes/series');

app.use('/series', seriesRoutes);

// Add headers before any data requests

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // * access all or and ip or HTTP address. Can only sdtop other webpages but not tools like postman
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method == 'OPTIONS') {
    // euqal to http request
    res.header('Access-Control-Allow-Methids', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/', (req, res, next) => {
  res.status(200).json({
    message: 'API is online',
    request: {
      type: 'GET',
      message: 'A list of all the series',
      url: 'https://' + process.env['C9_HOSTNAME'] + '/series/'
    },
    credit: {
      creator: 'Dan B',
      creatorLink: 'https://danbdesigns.co.uk'
    }
  });
});


module.exports = app;