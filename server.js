const express = require('express');

const PORT = process.env.PORT || 3128;

const app = express();

app.post('/', function (req, res) {
    res.send('GET request to the home page');
});

app.listen(PORT, function() {
    console.log(`App running on localhost:${PORT}`);
})