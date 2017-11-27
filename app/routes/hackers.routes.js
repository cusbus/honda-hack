const router = require('express').Router()
const hackersController = require('../controllers/hackers.controller')
const validateBody = require('../filters/validate.body')
const Hacker = require('../models/hacker')

module.exports = router

// api routes ===========================================================
router.get('/', hackersController.readAll)
router.get('/:id([0-9a-fA-F]{24})', hackersController.readById)
router.post('/', validateBody(Hacker), hackersController.create)
router.put('/:id([0-9a-fA-F]{24})', validateBody(Hacker),hackersController.update)
router.delete('/:id([0-9a-fA-F]{24})', hackersController.delete)