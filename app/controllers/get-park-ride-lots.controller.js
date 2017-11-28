const responses = require('../models/responses');
const request = require('request');

module.exports = {
    getParkRideLots: getParkRideLots
}


function getParkRideLots(req, res) {
    console.log('Get main lines running...');
    request.get('https://api.go511.com/api/parkandridelots?key=93a61394a8eeae835f7d4b7a0d3597cd&format=json', {json: true}, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send(new responses.ErrorResponse(err));
        }
        const responseModel = new responses.ItemsResponse();
        responseModel.items = data;
        res.json(responseModel);
        
    });
}