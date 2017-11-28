const router = require('express').Router();
const getTransitProvidersController = require('../controllers/get-transit-providers.controller');

module.exports = router;

router.get('/', getTransitProvidersController.getTransitProviders);