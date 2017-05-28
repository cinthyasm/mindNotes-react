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
      notebooks: [],
      activeHeader : true,
    }
    this.handlerStateSearch = this.handlerStateSearch.bind(this);
    this.handlerUiClick = this.handlerUiClick.bind(this);
    this.getDataNotebooks = this.getDataNotebooks.bind(this);
    this.handlerStateSearch = this.handlerStateSearch.bind(this);
  }

  componentWillMount () {
    this.getDataNotebooks();
  }//componentWillMount()

  getDataNotebooks(){
    axios.get(`http://localhost:3000/notebooks`)
    .then((response) => {
      this.setState({notebooks: response.data})
    })
    .catch((error) => console.error('axios error', error))
  }//getDataNotebooks()

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
          notebooks={this.state.notebooks}
          isActive = {this.state.activeHeader}
        />
        </div>
      )} />
     
   ) 
  }
}

export default AppContainer;