const router = require('express').Router()
const paymentController = require('../controllers/payment.controller')
// const Payment = require('../models/payment')

module.exports = router

// api routes ===========================================================
router.post('/', paymentController.create) 