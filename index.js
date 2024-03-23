const express = require('express');
const app = express();
const vidRoutes = require('./routes/videos.js');

app.get('/', function (req, res) {
    res.send("Fetch the videos");
});

app.use('/videos', vidRoutes);

app.listen(8080, function() {
    console.log('Started server.js, listening on PORT 8080')
}
)