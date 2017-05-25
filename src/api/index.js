const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/notes', (req, res) => {
    res.json({
        "name": "Note 1"
    });
});

app.listen(3000, () => {
    console.log('Express listening on port 3000');
})