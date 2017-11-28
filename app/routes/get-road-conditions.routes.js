const router = require('express').Router();
const getRoadConditionsController = require('../controllers/get-road-conditions.controller');

module.exports = router;

router.get('/', getRoadConditionsController.getRoadConditions);