const router = require('express').Router();
const getHOVRoutesController = require('../controllers/get-HOV-routes.controller');

module.exports = router;

router.get('/', getHOVRoutesController.getHOVRoutes);