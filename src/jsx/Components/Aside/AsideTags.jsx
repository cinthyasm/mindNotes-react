import React from 'react';


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
      <div style={{position: "absolute"}} onClick={this.callBackDelete.bind(this)}>x</div>
        <a>
         <div onDoubleClick={this.props.setEditable} 
              onBlur={this.props.setNoEditable} 
              onKeyDown={this.callBackUpdate.bind(this)}
              ref='tagName'>
            {this.props.name}
         </div>
         <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>
    ) 
  }
}

export default  AsideTags;