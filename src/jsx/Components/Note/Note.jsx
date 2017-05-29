import React from 'react';

class Note extends React.Component{
  callbackDelete(event) {
    this.props.deleteNote(this.props.id, event)
  }

  callbackClose(event){
    this.props.closeNote(this.props.id,this.refs.title.value,this.refs.description.value, event);
  }
  callBackColor(color,event){
     this.props.changeColor(this.props.id,color,event);
  }


  render(){ 
    const {title,description, isNewNote, color} = this.props;
    return(
      <div className='col-xs-12 col-sm-6 col-md-3'>
        <div className={isNewNote ? 'note-block note-modal--active': 'note-block'} onClick={this.props.openNote}>
          <div className={color ==='red'? 'note red-note note-modal--content' : color==='blue'?'note blue-note note-modal--content': 'note note-modal--content' }>
            <span className='close'>X</span>
            <textarea className='note--title' maxLength='15' ref='title' defaultValue={title}/>
            <textarea className='note--description' ref='description' defaultValue={description}/>
            <div className='footer'>
              <button onClick={this.callbackDelete.bind(this)} className='footer--icon btn-delete'>
                <i className='fa fa-trash' aria-hidden='true'></i>
              </button>
              <button className='btn btn-default footer--btn-save' onClick={this.callbackClose.bind(this)}>Save</button>
              <button className='footer--icon btn-color'>
                <i className='fa fa-paint-brush' aria-hidden='true'></i>
              </button>
              <div className='color-picker'>
                <div className='blue' onClick={this.callBackColor.bind(this,'blue')}></div>
                <div className='red'  onClick={this.callBackColor.bind(this,'red')}></div>
                <div className='default' onClick={this.callBackColor.bind(this,'default')}></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Note;