import React from 'react';
import Header from './../Header/Header'
import Content from './../Content/Content'

class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: 'This is the message to past'
    }
  }

  render(){
   return(
      <div>
        <Header serchTerm={this.state.searchTerm}/>
        <Content/>
      </div>
   ) 
  }
}

export default AppContainer;