const router = require('express').Router();
const getMainLineLinksController = require('../controllers/get-main-line-links.controller');

module.exports = router;

router.get('/', getMainLineLinksController.getMainLineLinks);