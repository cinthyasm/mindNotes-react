import React from 'react';

class Note extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      isNew: this.props.isNewNote
    }
    this.handlerNoteActive = this.handlerNoteActive.bind(this)
  }

  componentDidMount(){
    this.state.isNew = false
  }

  handlerNoteActive(){
    this.setState({isActive: !this.state.isActive})   
    console.log("estatus");
  }

  callbackDelete(event) {
    this.props.deleteNote(this.props.id, event)
  }

  callbackClose(){
    this.props.closeNote(this.props.id,this.refs.title.value,this.refs.description.value);
  }

  render(){
    const {title,description, isNewNote} = this.props;
    return(
      <div className='col-xs-12 col-sm-6 col-md-3'>
        <div className={this.state.isActive || this.state.isNew ? 'note-block note-block note-modal--active' : 'note-block' } onClick={this.handlerNoteActive}>
          <div className='note note-modal--content'>
            <span className='close'>X</span>
            <textarea className='note--title' maxLength='15' ref='title'>{title}</textarea>
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