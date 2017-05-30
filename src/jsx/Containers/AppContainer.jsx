import React from 'react';
import Header from './../Components/Header/Header'
import Content from './../Components/Content/Content'
import axios from 'axios'
import {Route} from 'react-router-dom'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      noteBookName: '',
      activeHeader : true
    }
    this.handlerStateSearch = this.handlerStateSearch.bind(this);
    this.handlerUiClick = this.handlerUiClick.bind(this);
    this.handlerStateSearch = this.handlerStateSearch.bind(this);
  }

  handlerStateSearch(event){
    this.setState({searchTerm: event.target.value})
  }//handlerStateSearch

  handlerUiClick (event){
    this.setState({activeHeader: !this.state.activeHeader})
  }//handlerUiClick()

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
            isActive = {this.state.activeHeader}
          />
        </div>
      )} />
     
   ) 
  }
}

export default AppContainer;