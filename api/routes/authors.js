const express = require('express');
const router = express.Router();

const AuthorsController = require('../controllers/authors');
const mongoose = require('mongoose');


router.get('/', function (req, res, next) {
  res.status(200);
  res.json({
    'authors': [
      {
        'name': 'Benjamin Grundy',
        'description': 'started Mysterious Universe back in 2006. Every week he researches the fortean world and puts together the weekly free MU podcast, extended podcast and Plus + podcast alongside Aaron Wright.'
      },
      {
        'name': 'Aaron Wright',
        'description': 'is one half of the Mysterious Universe team who brings expertise in the sciences. Ben and he formed 8th Kind Pty Ltd in 2008 to take MU to the next level.'
      }
    ]
  });
});

router.get('/getall', AuthorsController.author_get_all);

module.exports = router;