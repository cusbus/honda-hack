// const payment = require('../models/payment')
const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    create: _create,
}

function _create(model){
    let newModel = {
        name: model.cardName,
        cardType: model.cardType,
        cardNumber: model.cardNumber,
        cardExpiration: model.cardExpiration,
        cardSecCode: model.cardSecCode,
        addressA: model.addressA,
        addressB: model.addressB,
        city: model.city,
        state: model.state,
        zip: model.zip
    }
    return conn.db().collection('reservations').insert(newModel)
        .then(result => result.insertedIds[0].toString() ) // return generated Id as string
}

