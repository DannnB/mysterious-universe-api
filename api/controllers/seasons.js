const mongoose = require('mongoose');
const Seasons = require('../models/season');

exports.seasons_get_all = (req, res, next) => {
  Seasons.find() // find all // .limit(5) etc
    .select('season_number name number_of_episodes episodes')
    .exec()
    .then(docs => {
      //return more
      const response = {
        count: docs.length,
        data: docs.map(doc => {
          return {
            _id: doc._id,
            season_number: doc.season_number,
            name: doc.name,
            number_of_episodes: doc.number_of_episodes,
            episodes: doc.episodes
          }
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

};

exports.seasons_get_number = (req, res, next) => {
  console.log(req.params.seriesNumber);
  Seasons.find() // find all // .limit(5) etc
    .where('season_number').equals(req.params.seriesNumber)
    .select('season_number name number_of_episodes episodes')
    .exec()
    .then(docs => {
      //return more
      const response = {
        count: docs.length,
        data: docs.map(doc => {
          return {
            _id: doc._id,
            season_number: doc.season_number,
            name: doc.name,
            number_of_episodes: doc.number_of_episodes,
            episodes: doc.episodes
          }
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.seasons_get_episode_number = (req, res, next) => {
  console.log(req.params.episodeNumber);
  Seasons.find({
    // season_number: req.params.seriesNumber,
    // episodes: episodes.map(episode => {
    // })
  }) // find all // .limit(5) etc
    // .where('season_number').equals(req.params.seriesNumber)
    .select('episodes')
    .exec()
    .then(docs => {
      //return more
      const response = {
        msg: req.params.episodeNumber,
        count: docs.length,
        data: docs.map(doc => {
          return {
            episodes: doc.episodes
          }
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};