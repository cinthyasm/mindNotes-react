import React from 'react';

class Note extends React.Component{
  callbackDelete(event) {
    this.props.deleteNote(this.props._id, event)
  }

  callbackClose(event){
    this.props.closeNote(this.props._id,this.refs.title.value,this.refs.description.value,this.props.color,this.props.notebook,this.props.favorite, event);
  }
 
  callBackColor(color,event){
     this.props.changeColor(this.props._id,this.refs.title.value, this.refs.description.value,this.props.notebook,this.props.tags,color,this.props.favorite,event);
  }

  callBackFavorite(event){
    if(this.props.favorite == false){
      this.props.favNote(this.props._id,this.refs.title.value, this.refs.description.value,this.props.notebook,[],this.props.color,true,event);
    }else{
      this.props.favNote(this.props._id,this.refs.title.value, this.refs.description.value,this.props.notebook,[],this.props.color,false,event);
    }
  }
  callBackOpenNote(event){
    this.props.openNote(this.props.tags, event);
  }
  handlerSelected(event){
    this.props.setTags(event.target.options, event);
  }


  render(){ 
    const {title,description,tags, isNewNote, color, favorite} = this.props;
    return(
      <div className='col-xs-12 col-sm-6 col-md-3'>
        <div className={isNewNote ? 'note-block note-modal--active': 'note-block'} onClick={this.callBackOpenNote.bind(this)}>
          <div className={color ==='red'? 'note red-note note-modal--content' : color==='blue'?'note blue-note note-modal--content': 'note note-modal--content' }>
            <span className='close'>X</span>
            <textarea className='note--title' maxLength='15' ref='title' defaultValue={title}/>
            <textarea className='note--description' ref='description' defaultValue={description}/>
            <div className='footer'>
              <button onClick={this.callbackDelete.bind(this)} className='footer--icon btn-delete'>
                <i className='fa fa-trash' aria-hidden='true'></i>
              </button>
              <button className='footer--icon footer--btn-fav' onClick={this.callBackFavorite.bind(this)}><i className={favorite ? 'fa fa-star': 'fa fa-star-o'} aria-hidden="true"></i></button>
              <button className='btn btn-default footer--btn-save' onClick={this.callbackClose.bind(this)}>Save</button>
              <button className='footer--icon footer--btn-tag' onClick={this.props.togglerTag}><i className="fa fa-bookmark-o" aria-hidden="true"></i></button>
              <button className='footer--icon btn-color'>
                <i className='fa fa-paint-brush' aria-hidden='true'></i>
              </button>
              <div className='color-picker'>
                <div className='blue' onClick={this.callBackColor.bind(this,'blue')}></div>
                <div className='red'  onClick={this.callBackColor.bind(this,'red')}></div>
                <div className='default' onClick={this.callBackColor.bind(this,'default')}></div>
              </div>
              <div className={this.props.isTagOn? 'tag-selector tag--selector-active': 'tag-selector'}>
                <select className='form-control' multiple defaultValue={this.props.allTags} onChange={this.handlerSelected.bind(this)}>
                  {this.props.allTags.map((option)=> 
                    <option key={option._id} value={option._id} selected={tags.includes(option._id)}>{option.name}</option>
                  )}
                </select>
              </div>
            </div>
            <div className="tag-container">
              {this.props.allTags.map((option)=> 
                  tags.includes(option._id) ? <div key={option.id} className='tags'>{option.name}</div> : null
                )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Note;