import React from 'react';
import Header from './../Header/Header'
import Content from './../Content/Content'
import axios from 'axios'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      notes : [],
      notebooks: [],
      activeHeader : false,
      activeNote: false
    }

    this.handlerStateSearch = this.handlerStateSearch.bind(this);
    this.handlerUiClick = this.handlerUiClick.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.openNote = this.openNote.bind(this);
    this.closeNote = this.closeNote.bind(this);
  }

    componentDidMount () {
    axios.get(`http://localhost:3000/notes`)
      .then((response) => {
        this.setState({notes: response.data})
      })
      .catch((error) => console.error('axios error', error))

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
    let addNotes = this.state.notes.slice();
    let idNote;
    if(addNotes.length > 0){
       idNote = (this.state.notes[addNotes.length-1]['id'])+1 ;
    }else{
      idNote = 1;
    }
    
    addNotes.push({'id':idNote, 'title':'El che', 'description':'prueba'});
    this.setState({notes: addNotes})
  }

  deleteNote(idNote,event) {
    let arrayNotes = this.state.notes.slice()
    arrayNotes = arrayNotes.filter(function( note ) { return note.id !== idNote})
    this.setState({notes: arrayNotes})
 }

 openNote(event){
   event.currentTarget.className = 'note-block note-modal--active'
 }

closeNote(id,title,description){
    this.setState({activeNote: !this.state.activeNote})
    axios.put('http://localhost:3000/notes/'+id, {title: title, description: description })
    .then(function(response){
      console.log('saved successfully')
    });
 }

  render(){
   return(
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
          isActive = {this.state.activeHeader}
          onClick={this.addNote}
          deleteNote={this.deleteNote}
          openNote={this.openNote}
          isActiveNote={this.state.activeNote}
          closeNote={this.closeNote}
        />
      </div>
   ) 
  }
}

export default AppContainer;