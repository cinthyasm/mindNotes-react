const mongoose = require('mongoose');
const express  = require('express');
const router = express.Router();
const noteAPI = require('../controllers/notesController');


router.get('/',(req,res) =>{
    res.send('Welcome to MindNotes API');
});

//Notes router
router.get('/notes', noteAPI.getAllNotes);
router.get('/notes/:noteId', noteAPI.getSingleNote);
router.post('/notes', noteAPI.createNote);
router.put('/notes/:noteId', noteAPI.updateNote);
router.delete('/notes/:noteId', noteAPI.deleteNote);

module.exports = router;