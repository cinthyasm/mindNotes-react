import React from 'react';
import Header from './../Header/Header'
import Content from './../Content/Content'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      notes : [ {'id': 1, 'title': 'asdasdasd', 'description': 'Hellow'}, 
            {'id': 2, 'title': 'Wasap',     'description': 'World'}, 
            {'id': 3, 'title': 'Yolololo',  'description': 'Loremp ipmsum'}],
      activeHeader : false,
      activeNote: false
    }

    this.handlerStateSearch = this.handlerStateSearch.bind(this);
    this.handlerUiClick = this.handlerUiClick.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.openNote = this.openNote.bind(this);
  }
   
  handlerStateSearch(event){
    this.setState({searchTerm: event.target.value})
  }

  handlerUiClick (event){
    this.setState({activeHeader: !this.state.activeHeader})
  }

  addNote(event){
    let addNotes = this.state.notes.slice();
    let idNote = (this.state.notes[addNotes.length-1]['id'])+1 ;
    addNotes.push({'id':idNote, 'title':'El che', 'description':'prueba'});
    this.setState({notes: addNotes})
  }

  deleteNote(idNote,event) {
    let arrayNotes = this.state.notes.slice()
    arrayNotes = arrayNotes.filter(function( note ) { return note.id !== idNote})
    this.setState({notes: arrayNotes})
 }

 openNote(event){
   event.currentTarget.className = 'note-block note-modal--active';
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
          isActive = {this.state.activeHeader}
          onClick={this.addNote}
          deleteNote={this.deleteNote}
          openNote={this.openNote}
          isActiveNote = {this.state.activeNote}
        />
      </div>
   ) 
  }
}

export default AppContainer;