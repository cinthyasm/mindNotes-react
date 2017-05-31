const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name:{
    type:String,
    require: true
  },
  color:{
    type: String,
    require: false
  }
});

module.exports = mongoose.model('Tag', tagSchema);