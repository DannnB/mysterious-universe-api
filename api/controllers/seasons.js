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
  const episodeNumber = parseInt(req.params.episodeNumber);
  const seasonNumber = parseInt(req.params.seriesNumber);
  Seasons.aggregate([{
        "$match": {
          "season_number": seasonNumber
        }
      },
      {
        // Acts as .select() function
        "$project": {
          "season_number": 1,
          "name": 1,
          "number_of_episodes": 1,
          "episodes": {
            "$filter": {
              "input": "$episodes",
              "as": "episode",
              "cond": {
                "$eq": ["$$episode.episode_number", episodeNumber]
              }
            }
          }
        }
      }
    ])
    .exec()
    .then(docs => {
      //return more
      let response;

      let episodeTest = {
        data: docs.map(doc => {
          return {
            episode: doc.episodes
          }
        })
      }      

      if (episodeTest.data[0].episode.length == 0){
        response = { 
          error: 'Episode not found!',
          data: docs.map(doc => {
            return {
              _id: doc._id,
              season_number: doc.season_number,
              name: doc.name,
              number_of_episodes: doc.number_of_episodes,
              episode: 'Not found'
            }
          })
        };
        res.status(404).json(response);
      }else {
        response = {
          data: docs.map(doc => {
            return {
              _id: doc._id,
              season_number: doc.season_number,
              name: doc.name,
              number_of_episodes: doc.number_of_episodes,
              episode: doc.episodes.map(episode => {
                return {
                  _id: episode._id,
                  episode_number: episode.episode_number,
                  name: episode.name,
                  length: episode.length,
                  author: episode.author,
                  release: episode.release,
                  description: episode.description,
                  url: 'https://mysteriousuniverse.org/2018/08/20-09-mu-podcast'
                }
              })
            };
          })
        };
        res.status(200).json(response);
      }
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};