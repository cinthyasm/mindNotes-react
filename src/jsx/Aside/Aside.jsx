import React from 'react';
import AsideMenu from './AsideMenu';
import AsideNotebook from './AsideNotebook';
import AsideTags from './AsideTags';
import {Route} from 'react-router-dom'

class Aside extends React.Component{

   render() {
    return(
      <aside> 
        <AsideMenu onClick={this.props.onClick}/>
        <Route path ='/notebooks' render={() => ( <AsideNotebook /> ) } />
        <Route path= '/tags' render={ () => ( <AsideTags/>)} />
      </aside>
    )
  }
}

export default Aside;
