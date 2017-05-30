import React from 'react';
import AsideMenu from './AsideMenu';
import NotebookContainer from './../../Containers/NotebookContainer';
import TagContainer from './../../Containers/TagContainer';
import {Route} from 'react-router-dom'

class Aside extends React.Component{

  render() {
    const self = this;
    return(
      <aside className='full-height'> 
        <AsideMenu onClick={this.props.onClick}/>
        <Route path={'/notebooks'} component={NotebookContainer}/>
       <Route path= '/tags' render={ () => ( <TagContainer/>)} />
      </aside>
    ) // return
  } // render
}

export default Aside;
