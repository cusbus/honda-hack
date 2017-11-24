class BaseResponse {

    constructor() {
        this.isSuccessful = false
        this.alert = {
            message: null,
            type: null
        }
    }

}

module.exports = BaseResponse
