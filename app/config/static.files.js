const express = require('express');
const app = express();
const path = require('path');

module.exports = app


// static files ==============================================
app.use(
    "/",
    express.static(path.join(__dirname, "../../content"), {
        fallthrough: false
    })
);

app.use(
    "/client/build",
    express.static(path.join(__dirname, "../../content/client/build"), {
        fallthrough: false
    })
);



