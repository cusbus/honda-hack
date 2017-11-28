const router = require('express').Router();
const getParkRideLotsController = require('../controllers/get-park-ride-lots.controller');

module.exports = router;

router.get('/', getParkRideLotsController.getParkRideLots);