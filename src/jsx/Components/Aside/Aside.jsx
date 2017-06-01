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
        <Route path={'/notebooks'} render={(props)=>
          <NotebookContainer notebookNameClick={this.props.notebookNameClick}/>
        }/>
         <Route path={'/tags' } render={(props)=>
          <TagContainer notebookNameClick={this.props.notebookNameClick}/>
        }/>
      </aside>
    ) // return
  } // render
}

export default Aside;
