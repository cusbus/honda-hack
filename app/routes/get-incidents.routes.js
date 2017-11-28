const router = require('express').Router();
const getIncidentsController = require('../controllers/get-incidents.controller');

module.exports = router;

router.get('/', getIncidentsController.getIncidents);