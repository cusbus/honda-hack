const SuccessResponse = require('./success.response')

class ItemResponse extends SuccessResponse {

    constructor(data) {
        super()
        this.item = data
    }
}

module.exports = ItemResponse