const express = require('express');
const app = express();
const path = require('path');

module.exports = app


// static files ==============================================
app.use(
    "/content",
    express.static(path.join(__dirname, "../../content"), {
        fallthrough: false
    })
);

//doesn't look like we need this?
// app.use(
//     "/content/build",
//     express.static(path.join(__dirname, "../../content/build"), {
//         fallthrough: false
//     })
// );



