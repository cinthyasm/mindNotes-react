const mongoose = require('mongoose');
const Notebook = mongoose.model('Notebook');

exports.getAllNotebooks = (req,res) => {
    Notebook.find().exec((err,data) =>{
        if(!err){
            res.status(200);
            res.json(data);
        }
    });
}

exports.getSingleNotebook = (req,res) => {
  Notebook.findById(req.params.notebookId).exec((err,data) => {
    if(!err){
      res.status(200);
      res.json(data);
    }
  })
}

exports.createNotebook= (req,res) => {
  const newNotebook = new Notebook (req.body);
  newNotebook.save((err,data) =>{
    if(err){
      res.status(404);
      res.json(err);
    }else{
      res.status(201);
      res.json(data);
    }
  })
}


exports.updateNotebook = (req,res) =>{

    Notebook.findById(req.params.notebookId).exec((err,notebook) =>{
        if(err){
            res.status(404).send(err);
        }else{
            notebook.name = req.body.name;
            notebook.slug = req.body.slug;
            notebook.save();
            res.json(notebook);
        }
    });
}

exports.deleteNotebook = (req,res) =>{
  Notebook.findByIdAndRemove(req.params.notebookId).exec((err,data) =>{
      if(err){
          res.status(404);
          res.json(err);
      }else{
          res.status(200);
          res.json(data);
      }
    });
  }
