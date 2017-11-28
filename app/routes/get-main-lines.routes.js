
const router = require('express').Router();
const getMainLinesController = require('../controllers/get-main-lines.controller');

module.exports = router;

router.get('/', getMainLinesController.getMainLines);