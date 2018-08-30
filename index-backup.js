var express = require('express');
var app = express();
var path = require('path');

// routes
var seriesRoutes = require('./api/routes/series');

app.get('/all', function (req, res, next) {
  res.status(200);
  res.json({
    'series': [{
        'name': 'Series Nineteen',
        'number of epesodes': 24,
        'active': false
      }
    ]
  });
});

app.use('/series', seriesRoutes); //forward to series.js
module.exports = app;

// app.get('/', function (req, res) {
//   res.json({
//     'description': 'Mysterious Universe API',
//     'routes': [{
//       'authors': 'A list off all authors from the Mysterious Universe',
//       'series': 'A list of all series',
//       'series/{number}': 'Get a list of all epesodes in the selected series',
//       'everything': 'Gets all data in one big object! Have fun!'
//     }]
//   });
// });

// app.get('/authors', function (req, res) {
//   res.status(200);
//   res.json({
//     'authors': [
//       {
//         'name': 'Benjamin Grundy',
//         'description': 'started Mysterious Universe back in 2006. Every week he researches the fortean world and puts together the weekly free MU podcast, extended podcast and Plus + podcast alongside Aaron Wright.'
//       },
//       {
//         'name': 'Aaron Wright',
//         'description': 'is one half of the Mysterious Universe team who brings expertise in the sciences. Ben and he formed 8th Kind Pty Ltd in 2008 to take MU to the next level.'
//       }
//     ]
//   });
// });

// app.get('/series', function (req, res) {
//   res.status(200);
//   res.json({
//     'series': [
//       {
//         'name': 'Series Nineteen',
//         'number of epesodes': 24,
//         'active': false
//       },
//       {
//         'name': 'Series Twenty',
//         'number of epesodes': 8,
//         'active': true
//       }
//     ]
//   });
// });

// app.get('/series/20', function (req, res) {
//   res.status(200);
//   res.json({
//     'description': 'Series Twenty Epesodes',
//     'epesodes': [
//       {
//         'name': '20.01',
//         'length': '1:36:24',
//         'author': 'Aaron Wright',
//         'release': '07/06/18',
//         'description': 'Can research from cutting edge psychologists give us greater insight into the world of attachment entities? Join us on this episode as we discuss the work of Dr. Shakuntala Modi who discovered some of her patient’s emotional imbalances may be caused by discarnate entities lost in the void.',
//         'plus': {
//           'description': 'Later in the show in our Plus+ extension we explore a developing story of the strange disappearance and reappearance of a woman in Indonesia and link it to odd reports of alleged “Skinwalker fogs”.'
//         }
//       },
//       {
//         'name': '20.02',
//         'length': '1:26:01',
//         'author': 'Aaron Wright',
//         'release': '07/13/18',
//         'description': 'Joshua Cutchin joins us this week to discuss his new research from ‘Thieves in the Night’, exploring the folklore connections to the phenomena of alien abductions and mysterious disappearances.',
//         'plus': {
//           'description': 'In our Plus+ extension we look at the occult concept of Egregores, the powerful thoughtform entities that influence human destiny.'
//         }
//       },
//       {
//         'name': '20.03',
//         'length': '1:03:49',
//         'author': 'Aaron Wright',
//         'release': '07/20/18',
//         'description': 'In the depths of the haunted subterranean networks below our bustling modern cities lurks entities that many of us could never fathom. On this episode we seek out the reports of people who claim to have encountered such monsters.',
//         'plus': {
//           'description': 'We then take a look at the alleged time portals appearing all over London and uncover some of the extraordinary accounts of people who have been swept up in them. All of this is discussed before discovering how a man destroyed his “thought-form” house on the astral plane in the Plus+ extension.'
//         }
//       },
//       {
//         'name': '20.04',
//         'length': '1:04:18',
//         'author': 'Benjamin Grundy',
//         'release': '07/27/18',
//         'description': 'Many of us tend to take an easy childbirth for granted these days but that hasn’t always been the case. In fact in the past it has been anything but easy. On this episode we take a look at the mysterious Chamberlen family and their birth device that was desperately sought after by the elite and aristocratic.',
//         'plus': {
//           'description': 'Then in our Plus+ extension we discuss alleged Soviet time travel experiments and cover some cases of “mischevious lightning”.'
//         }
//       }
//     ]
//   });
// });

// app.get('/series/:seriesid', function (req, res) {
//   if(req.params.seriesid != 20) {
//     res.status(404);
//     res.json({
//       'request_params': req.params,
//       'message': 'Nothing found here. Please check back soon.'
//     });
//   } else {
//     res.status(200);
//     res.json({
//       'request_params': req.params,
//       'description': 'Series Twenty Epesodes',
//       'epesodes': [
//         {
//           'name': '20.01',
//           'length': '1:36:24',
//           'author': 'Aaron Wright',
//           'release': '07/06/18',
//           'description': 'Can research from cutting edge psychologists give us greater insight into the world of attachment entities? Join us on this episode as we discuss the work of Dr. Shakuntala Modi who discovered some of her patient’s emotional imbalances may be caused by discarnate entities lost in the void.',
//           'plus': {
//             'description': 'Later in the show in our Plus+ extension we explore a developing story of the strange disappearance and reappearance of a woman in Indonesia and link it to odd reports of alleged “Skinwalker fogs”.'
//           }
//         },
//         {
//           'name': '20.02',
//           'length': '1:26:01',
//           'author': 'Aaron Wright',
//           'release': '07/13/18',
//           'description': 'Joshua Cutchin joins us this week to discuss his new research from ‘Thieves in the Night’, exploring the folklore connections to the phenomena of alien abductions and mysterious disappearances.',
//           'plus': {
//             'description': 'In our Plus+ extension we look at the occult concept of Egregores, the powerful thoughtform entities that influence human destiny.'
//           }
//         },
//         {
//           'name': '20.03',
//           'length': '1:03:49',
//           'author': 'Aaron Wright',
//           'release': '07/20/18',
//           'description': 'In the depths of the haunted subterranean networks below our bustling modern cities lurks entities that many of us could never fathom. On this episode we seek out the reports of people who claim to have encountered such monsters.',
//           'plus': {
//             'description': 'We then take a look at the alleged time portals appearing all over London and uncover some of the extraordinary accounts of people who have been swept up in them. All of this is discussed before discovering how a man destroyed his “thought-form” house on the astral plane in the Plus+ extension.'
//           }
//         },
//         {
//           'name': '20.04',
//           'length': '1:04:18',
//           'author': 'Benjamin Grundy',
//           'release': '07/27/18',
//           'description': 'Many of us tend to take an easy childbirth for granted these days but that hasn’t always been the case. In fact in the past it has been anything but easy. On this episode we take a look at the mysterious Chamberlen family and their birth device that was desperately sought after by the elite and aristocratic.',
//           'plus': {
//             'description': 'Then in our Plus+ extension we discuss alleged Soviet time travel experiments and cover some cases of “mischevious lightning”.'
//           }
//         }
//       ]
//     });
//   }
// });

var server = app.listen(3000, function () {});