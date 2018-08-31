const mongoose = require('mongoose');
const Author = require('../models/author'); // import model exported from author.js

let BASE_URL = process.env.BASE_URL_PROTO + process.env['C9_HOSTNAME'];

exports.author_get_all = (req, res, next) => {
  Author.find() // find all // .limit(5) etc
    .select('name description') // define which fields to select
    .exec()
    .then(docs => {
      //return more
      const response = {
        count: docs.length,
        data: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            description: doc.description
          }
        })
      };
      // console.log(req);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

};