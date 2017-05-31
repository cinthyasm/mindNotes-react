import React from 'react';
import axios from 'axios'
import Note from './../Components/Note/Note'

class NoteContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      notes : [],
    }
    //functions' binding
    this.getDataNotes = this.getDataNotes.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.openNote = this.openNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.closeNote = this.closeNote.bind(this);
    this.handlerNoteColor = this.handlerNoteColor.bind(this);
    this.favNote = this.favNote.bind(this);
  }//constructor

  componentWillMount(){
    this.getDataNotes();
  }//componentWillMount()

  componentWillReceiveProps(){
    this.getDataNotes();
  }//componentWillReceiveProps()

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

  getDataNotes(){
   axios.get(`http://localhost:3000/api/notes`)
    .then((response) => {
      this.setState({notes: response.data})
      if(this.props.location.query.type == 'notebooks'){
        this.filterNotesByNotebook()
      }else if(this.props.location.query.type == 'tags'){
        this.filterNotesByTags()
      }
    })
    .catch((error) => console.error('axios error', error))
  }//getDataNotes()

  handlerNoteColor(idNote,title,description,notebook,tags,color,event){
    event.stopPropagation();
    axios.put(`http://localhost:3000/api/notes/${idNote}`, {title: title, description: description, color:color, notebook:notebook, tags:tags})
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

  closeNote(idNote,title,description,color,notebook,tags,event){
    event.stopPropagation()
    event.currentTarget.parentNode.parentNode.parentNode.className = 'note-block'
    this.setState({activeNote: !this.state.activeNote})
    axios.put(`http://localhost:3000/api/notes/${idNote}`, {title: title, description: description, color:color, notebook:notebook, tags:tags})
    .then(function(response){
    });
  }//closeNote()
  openNote(event){
    event.currentTarget.className = 'note-block note-modal--active'
  }//openNode()


  addNote(event){
    let notebook = this.props.location.query.id
    console.log()
    axios.post('http://localhost:3000/api/notes', {title: "New Note", description: "", color:"", notebook:notebook, tags:[] })
      .then(function(response){
       const newNote = Object.assign(response.data , {isNewNote: true} )
       this.setState({notes: this.state.notes.concat(newNote)})
    }.bind(this));
  }//addNote()

  favNote(idNote,title,description,notebook,tags,color,favorite,event){
    event.stopPropagation()
    console.log(favorite)
    axios.put(`http://localhost:3000/api/notes/${idNote}`, {title: title, description: description, color:color, notebook:notebook, tags:tags,favorite:favorite})
    .then(function(response){
      console.log(response)
      const newState = this.state.notes.map((note)=> this.functionUpdateFav(note,response)) //delete from state the tag
      this.setState({
        notes: newState//add the tag updated
      });
    }.bind(this));
  }

   functionUpdateFav(note, response){
    if(note._id == response.data._id){
      note.favorite = response.data.favorite;
    }
    return note;
  }

  render(){
    
    return(
    <div> 
      {this.props.location.query.type == 'notebooks' ? (
        <div onClick={this.addNote} className='fa-add'><i className='fa fa-plus' aria-hidden='true'></i></div>
      ) : ( null )}
      {this.state.notes.filter((note) => 
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