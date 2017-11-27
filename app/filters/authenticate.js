module.exports = authenticate

function authenticate(req, res, next) {
    // req.auth should contain information related to the logged-in user, stored and passed
    // between web server and client via auth cookie.

    // this is a hard-coded test implementation of the above.
    req.auth = {
        id: process.env.TEST_AUTH_ID
    }
    next()
}