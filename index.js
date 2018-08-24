var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.json({
    'Mysterious Universe API': 'true'
  });
});

app.get('/series', function (req, res) {
  res.status(200);
  res.json({
    'series': [
      {
        'name': 'Series One',
        'Number of Epesodes': 15
      },
      {
        'name': 'Series Two',
        'Number of Epesodes': 24
      }
    ]
  });
});

app.get('/series/1', function (req, res) {
  res.status(200);
  res.json({
    'description': 'Series One Epesodes',
    'epesodes': [
      {
        'name': 'Epesode One',
        'Length': 1.25
      },
      {
        'name': 'Epesode Two',
        'Length': 1.17
      }
    ]
  });
});

var server = app.listen(3000, function () {});