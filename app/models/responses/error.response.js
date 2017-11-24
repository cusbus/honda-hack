const BaseResponse = require('./base.response')

class ErrorResponse extends BaseResponse {
    
    constructor(err) {
        super()
        this.isSuccessful = false
        this.errors = err
        this.alert.type = 'danger'
    }

}


module.exports = ErrorResponse