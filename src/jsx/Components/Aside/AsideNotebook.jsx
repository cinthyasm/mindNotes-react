import React from 'react';
import {Link} from 'react-router-dom'


class AsideNotebook extends React.Component {

  callBackDelete(event){
    this.props.onDelete(this.props._id,event);
  }

  callBackUpdate(event){
    this.props.onKeyDown(this.props._id, this.refs.noteBName.innerHTML, event);
  }

  render(){
    return(
      <div className="aside--notebook text-center">
        <div style={{position: "absolute"}} onClick={this.callBackDelete.bind(this)}>x</div>
          <Link to={{ pathname:`/notebooks/${props.slug}`,query: {'id':props._id,'type':'notebooks'}}}> 
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


