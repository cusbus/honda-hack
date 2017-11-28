const router = require('express').Router();
const getMessageSignsController = require('../controllers/get-message-signs.controller');

module.exports = router;

router.get('/', getMessageSignsController.getMessageSigns);