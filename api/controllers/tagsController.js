const mongoose = require('mongoose');
const Tag = mongoose.model('Tag');


exports.getAllTags = (req,res) => {
  Tag.find().exec((err,data) =>{
    if(!err){
      res.status(200);
      res.json(data);
    }
  });
}

exports.getSingleTag  = (req,res) =>{
  Tag.findById(req.params.tagId).exec((err,data) =>{
    if(!err){
      res.status(200);
      res.json(data);
    }
  })
}


exports.createTag= (req,res) => {
  const newTag = new Tag (req.body);
  newTag.save((err,data) =>{
    if(err){
      res.status(404);
      res.json(err);
    }else{
      res.status(201);
      res.json(data);
    }
  })
}


exports.updateTag = (req,res) =>{
  Tag.findById(req.params.tagId).exec((err,tag) =>{
    if(err){
      res.status(404).send(err);
    }else{
      tag.name = req.body.name;
      tag.slug = req.body.slug;
      tag.save();
      res.json(tag);
    }
  });
}

exports.deleteTag = (req,res) =>{
  Tag.findByIdAndRemove(req.params.tagId).exec((err,data) =>{
      if(err){
          res.status(404);
          res.json(err);
      }else{
          res.status(200);
          res.json(data);
      }
    });
  }

