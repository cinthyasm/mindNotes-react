import React from 'react';
import {Link} from 'react-router-dom'


class AsideTags extends React.Component {

  callBackDelete(){
    this.props.onDelete(this.props._id);
  }

  callBackUpdate(event){
    this.props.onKeyDown(this.props._id, this.refs.tagName.innerHTML, event);
  }
  render(){
    return(
      <div className="aside--notebook text-center">
      <div className='aside--notebook--close' onClick={this.callBackDelete.bind(this)}><i className="fa fa-times" aria-hidden="true"></i></div>
         <Link to={{ pathname:`/tags/${this.props.slug}`,query: {'id':this.props._id,'type':'tags'}}}>
          <div onDoubleClick={this.props.setEditable} 
                onBlur={this.props.setNoEditable} 
                onKeyDown={this.callBackUpdate.bind(this)}
                ref='tagName'>
              {this.props.name}
          </div>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </Link>
      </div>
    ) 
  }
}

export default  AsideTags;