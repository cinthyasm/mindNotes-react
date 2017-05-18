import React from 'react';

class Note extends React.Component{
  render(){
    return(
      <div className='note-block'>
        <div className='note note-modal--content'>
          <span className='close'>X</span>
          <div className='note--title'>Title </div>
          <textarea></textarea>
          <div className='footer'>
            <button className='footer--icon btn-color'>
              <i className='fa fa-paint-brush' aria-hidden='true'></i>
            </button>
            <button className='footer--icon btn-delete'>
              <i className='fa fa-trash-o' aria-hidden='true'></i>
            </button>
          </div>
          <div className='color-picker'>
            <div className='blue'></div>
            <div className='green'></div>
            <div className='blue'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Note;