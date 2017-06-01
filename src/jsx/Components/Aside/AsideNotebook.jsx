import React from 'react';
import {Link} from 'react-router-dom'


class AsideNotebook extends React.Component {

  callBackDelete(event){
    this.props.onDelete(this.props._id,event);
  }

  callBackUpdate(event){
    this.props.onKeyDown(this.props._id, this.refs.noteBName.innerHTML, event);
  }

  callBackNotebookName(){
    this.props.notebookNameClick(this.refs.noteBName.innerHTML);
  }

  render(){
    return(
      <div className="aside--notebook text-center" onClick={this.callBackNotebookName.bind(this)}>
        <div className='aside--notebook--close' onClick={this.callBackDelete.bind(this)}><i className="fa fa-times" aria-hidden="true"></i></div>
          <Link to={{ pathname:`/notebooks/${this.props.slug}`,query: {'id':this.props._id,'type':'notebooks'}}}> 
            <div onDoubleClick={this.props.setEditable} 
                  onBlur={this.props.setNoEditable} 
                  onKeyDown={this.callBackUpdate.bind(this)}
                  ref='noteBName'>
                {this.props.name}
            </div>
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </Link>
        </div>
    ) 
  }
};

export default AsideNotebook;


