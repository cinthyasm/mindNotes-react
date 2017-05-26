const mongoose = require('mongoose');
const Note = mongoose.model('Note');

exports.getAllNotes = (req,res) => {
    Note.find().exec((err,data) =>{
        if(!err){
            res.status(200);
            res.json(data);
        }
    });
}

exports.getSingleNote = (req,res) => {
    Note.findById(req.params.noteId).exec((err,data) =>{
        if(!err){
            res.status(200);
            res.json(data);
        }
    });
}

exports.createNote = (req,res) =>{

    const newNote = new Note(req.body);
    newNote.save((err,data) =>{

        if(err){
            res.status(404);
            res.json(err);
        }else{
            res.status(201);
            res.json(data);
        }
    });
}

exports.deleteNote = (req,res) =>{

    Note.findByIdAndRemove(req.params.noteId).exec((err,data) =>{

         if(err){
            res.status(404);
            res.json(err);
        }else{
            res.status(200);
            res.json(data);
        }
    });
}
