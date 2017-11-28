const router = require('express').Router();
const getRoadWorksController = require('../controllers/get-road-works.controller');

module.exports = router;

router.get('/', getRoadWorksController.getRoadWorks);