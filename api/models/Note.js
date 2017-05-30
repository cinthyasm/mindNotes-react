const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type:String, 
        required: true
    },
    description:{
        type:String, 
        required: false
    },
    color:{
        type:String, 
        required: false
    },
    notebook:{
        type:String,
        required: true
    },
    tags:{
        type: [Number]
    }
});

module.exports = mongoose.model('Note', noteSchema);