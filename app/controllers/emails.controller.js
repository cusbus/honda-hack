const responses = require('../models/responses')
const emailsService = require('../services/emails.service')
const apiPrefix = 'api/emails';

module.exports = {
    createEmail: _createEmail
}

function _createEmail(req, res) {
    //let toAddress = req.body.toAddress
    let toAddress = 'smileycakes@mailinator.com'
    let subject = req.body.subject
    let body = req.body.body
    emailsService.sendEmail(toAddress, subject, body)
        .then(id => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = id
            res.status(201)
                .json(responseModel)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

