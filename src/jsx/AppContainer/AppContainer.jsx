import React from 'react';
import Header from './../Header/Header'
import Content from './../Content/Content'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      notes : {notes: [ {'id': 1, 'title': 'asdasdasd', 'description': 'Hellow'}, 
            {'id': 2, 'title': 'Wasap',     'description': 'World'}, 
            {'id': 3, 'title': 'Yolololo',  'description': 'Loremp ipmsum'}] },
      activeHeader : false
    }

    this.handlerStateSearch = this.handlerStateSearch.bind(this);
    this.handlerUiClick = this.handlerUiClick.bind(this);
  }
   
  handlerStateSearch(event){
    this.setState({searchTerm: event.target.value})
  }

  handlerUiClick (event){
    this.setState({activeHeader: !this.state.activeHeader})
    console.log(this.state.activeHeader)
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
          notes={this.state.notes.notes} 
          isActive = {this.state.activeHeader}
          />
      </div>
   ) 
  }
}

export default AppContainer;