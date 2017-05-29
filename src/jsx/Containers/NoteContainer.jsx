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
  }//constructor

  componentWillMount(){
    this.getDataNotes();
  }//compnentWillMount()

  getDataNotes(){
   axios.get(`http://localhost:3000/notes`)
    .then((response) => {
      this.setState({notes: response.data})
    })
    .catch((error) => console.error('axios error', error))
  }//getDataNotes()

  handlerNoteColor(id,color,event){
    event.stopPropagation();
    axios.patch('http://localhost:3000/notes/'+id, {color: color })
    .then(function(response){
      let noteArray = this.state.notes;
      const otherArray = this.state.notes.map((note) => note.id==response.data["id"]? note.color= response.data["color"]: console.log("no"));
      this.setState({
        notes: noteArray
      })
    }.bind(this));
  }

  /*****NOTE's CRUDS*****/
  deleteNote(idNote,event) {
    event.stopPropagation()
    axios.delete('http://localhost:3000/notes/'+idNote, {title: "Hellow", description: "Test1", "color": "default" })
    .then(function(response){      
      this.getDataNotes();
      }.bind(this));
  }//deleteNode()

  openNote(event){
   event.currentTarget.className = 'note-block note-modal--active'
 }//openNode()

  closeNote(id,title,description, event){
    event.stopPropagation()
    event.currentTarget.parentNode.parentNode.parentNode.className = 'note-block'
    this.setState({activeNote: !this.state.activeNote})
    axios.put('http://localhost:3000/notes/'+id, {title: title, description: description })
    .then(function(response){
      console.log('saved successfully');
    });
  }//closeNote()

  addNote(event){
    axios.post('http://localhost:3000/notes/', {title: "Hellow", description: "Test1" })
      .then(function(response){      
       const newNote = Object.assign(response.data , {isNewNote: true} )
       this.setState({notes: this.state.notes.concat(newNote)})
    }.bind(this));
  }//addNote()

      
  render(){
    return(
    <div> 
      <div onClick={this.addNote} className='fa-add'><i className='fa fa-plus' aria-hidden='true'></i></div>
      {this.state.notes.filter((note) => 
        `${note.title} ${note.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase())>= 0)
        .map((note) => {
          return ( 
            <Note
              key={note.id} {...note} 
              deleteNote={this.deleteNote} 
              openNote={this.openNote} 
              closeNote={this.closeNote}
              changeColor={this.handlerNoteColor}
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