const mongoose = require('mongoose');
const express  = require('express');
const router = express.Router();
const noteAPI = require('../controllers/notesController');
const noteBookAPI = require('../controllers/notebooksController');
const tagAPI = require('../controllers/tagsController');


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
router.put('/notebooks/:notebookId', noteBookAPI.updateNotebook);
router.delete('/notebooks/:notebookId', noteBookAPI.deleteNotebook);

//Tags router
router.get('/tags', tagAPI.getAllTags);
router.get('/tags/tagId', tagAPI.getSingleTag);
router.post('/tags', tagAPI.createTag);
router.put('/tags/:tagId', tagAPI.updateTag);
router.delete('/tags/:tagId', tagAPI.deleteTag);

module.exports = router;