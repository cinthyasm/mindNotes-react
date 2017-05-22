import React from 'react';

class Note extends React.Component{
  callbackDelete() {
       this.props.deleteNote(this.props.id)
  }
  
  render(){

    const {title,description} = this.props;
    return(
      <div className='col-xs-12 col-sm-6 col-md-3'>
        <div className='note-block' onClick={this.props.openNote}>
          <div className='note note-modal--content'>
            <span className='close'>X</span>
            <div className='note--title'>{title} </div>
            <textarea value={description}></textarea>
            <div className='footer'>
              <div className='footer--hover'>
                <button className='footer--icon btn-color'>
                  <i className='fa fa-paint-brush' aria-hidden='true'></i>
                </button>
                <button onClick={this.callbackDelete.bind(this)} className='footer--icon btn-delete'>
                  <i className='fa fa-trash-o' aria-hidden='true'></i>
                </button>
              </div>
              <button className='btn btn-default footer--btn-save'>Save</button>
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