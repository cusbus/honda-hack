const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId
const sgMail = require('@sendgrid/mail')

module.exports = {
    sendEmail: _sendEmail
}


var emailLog = null

function _sendEmail(toAddress, subject, body) {
    let email = {
        to: toAddress,
        from: process.env.SENDGRID_FROM_USER,
        bcc: process.env.SENDGRID_BCC_EMAIL,
        subject: subject,
        text: body.text,
        html: body.html
    }

    emailLog = {
        toAddress: toAddress,
        fromAddress: process.env.SENDGRID_FROM_USER,
        subject: subject,
        body: body
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.setSubstitutionWrappers('==', '==')
    return sgMail.send(email)
        .then(_storeEmail)
        .then(result => result.insertedIds[0].toString())
        .catch(err => console.log(err.toString()))

}
