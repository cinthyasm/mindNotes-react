import React from 'react';


class AsideTags extends React.Component {

  callBackDelete(){
    this.props.onDelete(this.props._id);
  }
  render(){
    return(
      <div className="aside--notebook text-center">
      <div style={{position: "absolute"}} onClick={this.callBackDelete.bind(this)}>x</div>
        <a onDoubleClick={this.props.setEditable} onBlur={this.props.setNoEditable}>{this.props.name}<i className="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
    ) 
  }
}

export default  AsideTags;