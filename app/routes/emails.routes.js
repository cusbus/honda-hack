const router = require('express').Router()
const emailsController = require ('../controllers/emails.controller')

module.exports = router

// api routes ===========================================================
router.post('/', emailsController.createEmail)