const SuccessResponse = require('./success.response')

class ItemsResponse extends SuccessResponse {

    constructor(data) {
        super()
        this.items = data
    }
}

module.exports = ItemsResponse
