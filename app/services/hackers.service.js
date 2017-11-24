const Hacker = require('../models/hacker')
const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    readAll: readAll,
    readById: readById,
    create: create,
    update: update,
    delete: _delete
}

function readAll() {
    return conn.db().collection('hackers').find().toArray()
        .then( hackers => {
            for (let i = 0; i < hackers.length; i++) {
                let hacker = hackers[i]
                hacker._id = hacker._id.toString() // convert ObjectId back to string
            }
            return hackers
        } )
}

function readById(id) {
    return conn.db().collection('hackers').findOne({ _id: new ObjectId(id) })
        .then(hacker => {
            hacker._id = hacker._id.toString() // convert ObjectId back to string
            return hacker
        })
}

function create(model) {
    return conn.db().collection('hackers').insert(model)
        .then(result => result.insertedIds[0].toString()) // "return" generated Id as string
}

function update(id, doc) {
    // convert string id used outside of MongoDB into ObjectId needed by MongoDB
    doc._id = new ObjectId(doc._id)

    return conn.db().collection('hackers').replaceOne( { _id: new ObjectId(id) }, doc )
        .then(result => Promise.resolve()) // "return" nothing
}

function _delete(id) {
    return conn.db().collection('hackers').deleteOne({ _id: new ObjectId(id) })
        .then(result => Promise.resolve()) // "return" nothing
}
