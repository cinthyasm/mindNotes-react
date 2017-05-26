const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT;
const host = process.env.DB;

mongoose.connect(host, function (err, res) {
    if (err) {
        console.log (`ERROR connecting to: ${host}`);
    } else {
        console.log (`Succeeded connecting to: ${host}`);
    }
});

app.listen(port , () => {
    console.log(`Express listening on port ${port}`);
})