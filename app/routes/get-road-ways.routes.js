const router = require('express').Router();
const getRoadWaysController = require('../controllers/get-road-ways.controller');

module.exports = router;

router.get('/', getRoadWaysController.getRoadWays);