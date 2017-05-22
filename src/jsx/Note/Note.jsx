import React from 'react';

class Note extends React.Component{
  callbackDelete() {
       this.props.deleteNote(this.props.id)
  }

  callbackClose(){
    this.props.closeNote(this.props.id,this.refs.title.value,this.refs.description.value);
  }
  
  render(){
    const {title,description} = this.props;
    return(
      <div className='col-xs-12 col-sm-6 col-md-3'>
        <div className={this.props.isActiveNote ? null : 'note-block'} onClick={this.props.openNote}>
          <div className='note note-modal--content'>
            <span className='close'>X</span>
            <input type='text' className='note--title' ref='title' value={title} />
            <textarea className='note--description' ref='description'>{description}</textarea>
            <div className='footer'>
              <button className='footer--icon btn-color'>
                <i className='fa fa-paint-brush' aria-hidden='true'></i>
              </button>
              <button onClick={this.callbackDelete.bind(this)} className='footer--icon btn-delete'>
                <i className='fa fa-trash' aria-hidden='true'></i>
              </button>
              <button className='btn btn-default footer--btn-save' onClick={this.callbackClose.bind(this)}>Save</button>
            </div>
            <div className='color-picker'>
              <div className='blue'></div>
              <div className='green'></div>
              <div className='blue'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Note;