import React from 'react';
import Header from './../Header/Header'
import Content from './../Content/Content'
import axios from 'axios'
import {Route} from 'react-router-dom'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      notes : [],
      notebooks: [],
      newTitle: '',
      activeHeader : false,
      activeNote: true
    }

    this.handlerStateSearch = this.handlerStateSearch.bind(this);
    this.handlerUiClick = this.handlerUiClick.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.openNote = this.openNote.bind(this);
    this.closeNote = this.closeNote.bind(this);
    this.getDataNotes = this.getDataNotes.bind(this);
    this.getDataNotebooks = this.getDataNotebooks.bind(this);
  }

  componentWillMount () {
    this.getDataNotes();
    this.getDataNotebooks();
    console.log(this.props);
  }
  
  getDataNotes(){
   axios.get(`http://localhost:3000/notes`)
    .then((response) => {
      this.setState({notes: response.data})
    })
    .catch((error) => console.error('axios error', error))
  }

  getDataNotebooks(){
  axios.get(`http://localhost:3000/notebooks`)
  .then((response) => {
    this.setState({notebooks: response.data})
  })
  
  .catch((error) => console.error('axios error', error))
  }

  handlerStateSearch(event){
    this.setState({searchTerm: event.target.value})
  }

  handlerUiClick (event){
    this.setState({activeHeader: !this.state.activeHeader})
  }

  addNote(event){
    axios.post('http://localhost:3000/notes/', {title: "Hellow", description: "Test1" })
      .then(function(response){      
       const newNote = Object.assign(response.data , {isNewNote: true} )
       this.setState({notes: this.state.notes.concat(newNote)})
    }.bind(this));
  }


  deleteNote(idNote,event) {
    event.stopPropagation()
    axios.delete('http://localhost:3000/notes/'+idNote, {title: "Hellow", description: "Test1" })
    .then(function(response){      
      this.getDataNotes();
      }.bind(this));
 }

 openNote(event){
   event.currentTarget.className = 'note-block note-modal--active'
 }

closeNote(id,title,description, event){
  event.stopPropagation()
  event.currentTarget.parentNode.parentNode.parentNode.className = 'note-block'
  console.log("close");
  this.setState({activeNote: !this.state.activeNote})
  axios.put('http://localhost:3000/notes/'+id, {title: title, description: description })
  .then(function(response){
    console.log('saved successfully');
  });
 }

  render(){
   return(

      <Route path='/' render={() => (
        <div>
          <Header 
            onChange={this.handlerStateSearch} 
            onClick={this.handlerUiClick} 
            searchTerm={this.state.searchTerm} 
          />
          <Content 
          searchTerm={this.state.searchTerm} 
          notes={this.state.notes} 
          notebooks={this.state.notebooks}
          isActiveNote={this.state.activeNote}
          isActive = {this.state.activeHeader}
          newTitle = {this.state.newTitle}
          onClick={this.addNote}
          deleteNote={this.deleteNote}
          openNote={this.openNote}
          closeNote={this.closeNote}
        />
        </div>
      )} />
     
   ) 
  }
}

export default AppContainer;