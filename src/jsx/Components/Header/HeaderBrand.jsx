import React from 'react';
import {Link} from 'react-router-dom'

class HeaderBrand extends React.Component {

  callBackNotebookName(){
      this.props.notebookNameClick("MindNotes App");
  }
  render(){
      return(
      <div className='col-xs-4 col-sm-2 col-md-2'>
        <div className='navbar-header' onClick={this.callBackNotebookName.bind(this)}>
          <Link to={'/'} className='navbar-brand'>
            <img alt='logo' src='./public/images/brain-logo.png'/>
            <h2>MindNotes</h2>
          </Link>
        </div>
    </div>
    )
  }
}

export default HeaderBrand;