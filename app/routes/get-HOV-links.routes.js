const router = require('express').Router();
const getHOVLinksController = require('../controllers/get-HOV-links.controller');

module.exports = router;

router.get('/', getHOVLinksController.getHOVLinks);