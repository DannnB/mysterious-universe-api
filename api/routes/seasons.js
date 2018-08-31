const express = require('express');
const router = express.Router();

const SeasonsController = require('../controllers/seasons');
const mongoose = require('mongoose');

router.get('/', SeasonsController.seasons_get_all);

router.get('/:seriesNumber', SeasonsController.seasons_get_number);

router.get('/:seriesNumber/:episodeNumber', SeasonsController.seasons_get_episode_number);

module.exports = router;