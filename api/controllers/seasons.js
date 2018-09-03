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
  // console.log(typeof(req.params.episodeNumber));
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

  // Seasons.find({
    // season_number: req.params.seriesNumber, // TODO: needs to be renamed to "seasonNumber"
    // episodes: {
    //   $elemMatch: {
    //     episode_number: parseInt(req.params.episodeNumber)
    //   }
    // }
    
    // $and: [{
    //     season_number: req.params.seriesNumber
    //   }, // TODO: needs to be renamed to "seasonNumber"
    //   {
    //     episodes: {
    //       $elemMatch: {
    //         episode_number: parseInt(req.params.episodeNumber)
    //       }
    //     }
    //   }
    // ],
  //})
    // .select('season_number name episodes')
    .exec()
    .then(docs => {
      //return more
      console.log(docs)
      const response = {
        count: docs.length,
        data: docs
        // data: docs.map(doc => {
        //   return {
        //     name: doc.name,
        //     number_of_episodes: doc.number_of_episodes,
        //     // episode: doc.episodes.episode_number,
        //     // needs to return 1 matched episode...
        //     episode: doc.episodes.map(episode => {
        //       return {
        //         _id: episode._id,
        //         episode_number: episode.episode_number,
        //         name: episode.name,
        //       }
        //     }),
        //     // list of episodes for example
        //     episodes: doc.episodes
        //   };
        // })
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