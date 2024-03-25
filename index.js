const express = require('express');
const cors = require('cors');
const app = express();
const vidRoutes = require('./routes/videos.js');

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send("Fetch the videos");
});

app.use('/videos', vidRoutes);

app.listen(8080, function() {
    console.log('Started server "index.js", listening on PORT 8080')
}
);