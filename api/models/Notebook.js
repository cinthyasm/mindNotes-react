const mongoose = require('mongoose');

const notebookSchema = new mongoose.Schema({
    name: {
        type:String, 
        required: true
    },
    slug:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Notebook', notebookSchema);