import React from 'react';
import Header from './../Header/Header'
import Content from './../Content/Content'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handlerStateSearch = this.handlerStateSearch.bind(this);
  }
  
  handlerStateSearch(event){
    this.setState({searchTerm: event.target.value})
  }

  render(){
   return(
      <div>
        <Header onChange={this.handlerStateSearch} searchTerm={this.state.searchTerm}/>
        <Content searchTerm={this.state.searchTerm}/>
      </div>
   ) 
  }
}

export default AppContainer;