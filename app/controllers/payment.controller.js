const responses = require('../models/responses')
const paymentService = require('../services/payment.service')
const apiPrefix = '/api/payment';

module.exports = {
    create: _create
}

function _create(req, res) {
    paymentService.create(req.body)
        .then(confirmation => {
            const responseModel = new responses.successResponse()
            responseModel.item = confirmation
            res.status(201).send(responseModel)
        })
        .catch(err => {
            res.status(501).send(new responses.ErrorResponse(err))
        })
}