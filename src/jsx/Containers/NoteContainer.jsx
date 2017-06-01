import React from 'react';
import axios from 'axios'
import Note from './../Components/Note/Note'

class NoteContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      notes : [],
      currentTags: "", //tags selected from UI
      tags: [], //all tags
      isTagOn: false,
      favnotes: []

    }
    //functions' binding
    this.getDataNotes = this.getDataNotes.bind(this);
    this.getTags = this.getTags.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.openNote = this.openNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.closeNote = this.closeNote.bind(this);
    this.handlerNoteColor = this.handlerNoteColor.bind(this);
    this.favNote = this.favNote.bind(this);
    this.handlerTagSelector = this.handlerTagSelector.bind(this);
    this.functionHandlerTags = this.functionHandlerTags.bind(this);
  }//constructor

  componentWillMount(){
    this.getDataNotes();
    this.getTags();
  }//componentWillMount()

  componentWillReceiveProps(){
    this.getDataNotes();
  }//componentWillReceiveProps()

  getTags(){
    axios.get(`http://localhost:3000/api/tags`)   
    .then((response) => {
      this.setState({tags: response.data})
    })
    .catch((error) => console.error('axios error', error))
  }


  filterNotesByNotebook(){
    let notesByNotebook = this.state.notes.slice()
    let notebookId = this.props.location.query.id
    notesByNotebook = notesByNotebook.filter(function( note ) { return note.notebook == notebookId})
    this.setState({notes: notesByNotebook})
  }

   filterNotesByTags(){
    let notesByTags = this.state.notes.slice()
    let tagId = this.props.location.query.id
    notesByTags = notesByTags.filter(function( note ) { return note.tags.indexOf(tagId) != -1})
    this.setState({notes: notesByTags})
  }

  filterNotesByFavorites(){
    let notesByFavorites = this.state.notes.slice()
    notesByFavorites = notesByFavorites.filter(function( note ) { return note.favorite == true})
    this.setState({favnotes: notesByFavorites})
  }

  getDataNotes(){
   axios.get(`http://localhost:3000/api/notes`)
    .then((response) => {
      this.setState({notes: response.data})
      if(this.props.location.query.type == 'notebooks'){
        this.filterNotesByNotebook()
      }else if(this.props.location.query.type == 'tags'){
        this.filterNotesByTags()
      }else if(this.props.location.query.type == 'favorites'){
        this.filterNotesByFavorites()
      }
    })
    .catch((error) => console.error('axios error', error))
  }//getDataNotes()

  handlerNoteColor(idNote,title,description,notebook,tags,color,favorite,event){
    event.stopPropagation();
    axios.put(`http://localhost:3000/api/notes/${idNote}`, {title: title, description: description, color:color, notebook:notebook, tags:this.state.currentTags,favorite:favorite})
    .then(function(response){
      const newState = this.state.notes.map((note)=> this.functionChange(note,response)) //delete from state the tag
      this.setState({
        notes: newState//add the tag updated
      });
    }.bind(this));
  }

  functionChange(note, response){
    if(note._id == response.data._id){
      note.color = response.data.color;
    }
    return note;
  }

  functionHandlerTags(tagArray){
    let options = tagArray;
    const value = [];
    for (var i = 0;  i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }   
    this.state.currentTags = value;
  }

  /*****NOTE's CRUDS*****/
  deleteNote(idNote,event) {
    event.stopPropagation()
    axios.delete(`http://localhost:3000/api/notes/${idNote}`)
    .then(function(response){      
      const newState = this.state.notes.filter(note => note._id != response.data._id) //delete from state the tag
      this.setState({
        notes: newState
      })
    }.bind(this));
  }//deleteNode()

  closeNote(idNote,title,description,color,notebook,favorite,event){
    event.stopPropagation()
    event.currentTarget.parentNode.parentNode.parentNode.className = 'note-block'
    this.setState({activeNote: !this.state.activeNote})
    axios.put(`http://localhost:3000/api/notes/${idNote}`,
          {title: title, description: description, color:color, notebook:notebook, tags:this.state.currentTags, favorite: favorite})
    .then(function(response){
    });
    this.setState({isTagOn: false})
  }//closeNote()

  openNote(event){
    event.currentTarget.className = 'note-block note-modal--active'
  }//openNode()

  addNote(event){
    let notebook = this.props.location.query.id
    axios.post('http://localhost:3000/api/notes', {title: "New Note", description: "", color:"", notebook:notebook, tags:[], favorite: false })
      .then(function(response){
       const newNote = Object.assign(response.data , {isNewNote: true} )
       this.setState({notes: this.state.notes.concat(newNote)})
    }.bind(this));
  }//addNote()

  favNote(idNote,title,description,notebook,tags,color,favorite,event){
    event.stopPropagation()
    axios.put(`http://localhost:3000/api/notes/${idNote}`, {title: title, description: description, color:color, notebook:notebook, tags:tags,favorite:favorite})
    .then(function(response){
      const newState = this.state.notes.map((note)=> this.functionUpdateFav(note,response)) //delete from state the tag
      this.setState({
        notes: newState
      });

      const notesFavUpdated = this.state.notes.filter(function( note ) { return note.favorite == true})
      this.setState({
        favnotes: notesFavUpdated
      });
    }.bind(this));
  }

  functionUpdateFav(note, response){
    if(note._id == response.data._id){
      note.favorite = response.data.favorite;
    }
    return note;
  }

  handlerTagSelector(){
    this.setState({isTagOn: !this.state.isTagOn})
  }

  render(){

    return(
    <div> 
      {this.props.location.query.type == 'notebooks' ? (
        <div onClick={this.addNote} className='fa-add'><i className='fa fa-plus' aria-hidden='true'></i></div>
      ) : ( null )}
      {this.props.location.query.type == 'notebooks' || this.props.location.query.type == 'tags' ? this.state.notes.filter((note) => 
        `${note.title} ${note.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase())>= 0)
        .map((note) => {
          return ( 
            <Note
              isTagOn={this.state.isTagOn}
              key={note._id} {...note} 
              deleteNote={this.deleteNote} 
              openNote={this.openNote} 
              closeNote={this.closeNote}
              changeColor={this.handlerNoteColor}
              favNote={this.favNote}
              setTags={this.functionHandlerTags}
              togglerTag={this.handlerTagSelector}
              tags={this.state.tags}
            />
            )//return
          }//map
        )//map
        : 
        this.state.favnotes.filter((note) => 
        `${note.title} ${note.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase())>= 0)
        .map((note) => {
          return ( 
            <Note
              key={note._id} {...note} 
              deleteNote={this.deleteNote} 
              openNote={this.openNote} 
              closeNote={this.closeNote}
              changeColor={this.handlerNoteColor}
              favNote={this.favNote}
            />
            )//return
          }//map
        )//map

      }
    </div>
    )//return
  }//render
}

export default NoteContainer;