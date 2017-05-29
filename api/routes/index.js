const mongoose = require('mongoose');
const express  = require('express');
const router = express.Router();
const noteAPI = require('../controllers/notesController');
const noteBookAPI = require('../controllers/notebooksController');


router.get('/',(req,res) =>{
  res.send('Welcome to MindNotes API');
});

//Notes router
router.get('/notes', noteAPI.getAllNotes);
router.get('/notes/:noteId', noteAPI.getSingleNote);
router.post('/notes', noteAPI.createNote);
router.put('/notes/:noteId', noteAPI.updateNote);
router.delete('/notes/:noteId', noteAPI.deleteNote);

//Notebooks router
router.get('/notebooks', noteBookAPI.getAllNotebooks);
router.get('/notebooks/:notebookId', noteBookAPI.getSingleNotebook);
router.post('/notebooks', noteBookAPI.createNotebook);
router.delete('/notebooks/:notebookId', noteBookAPI.deleteNotebook);

module.exports = router;