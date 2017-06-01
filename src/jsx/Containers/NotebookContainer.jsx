import React from 'react';
import axios from 'axios';
import AsideNotebook from './../Components/Aside/AsideNotebook';

class NotebookContainer extends React.Component{

  constructor (props){
    super(props);
    this.state= {
      notebooks:[]
    }
    this.deleteNotebook = this.deleteNotebook.bind(this);
    this.updateNotebook = this.updateNotebook.bind(this);
    this.createSlug = this.createSlug.bind(this);
  }//constructor

  componentWillMount(){
    axios.get(`http://localhost:3000/api/notebooks`)
    .then((response) => {
      this.setState({notebooks: response.data})
    })
  }
  createSlug(name){
    let slug = name.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-')
    return slug;
  }
  addNotebook(event){
    if(event.keyCode == 13){
      axios.post('http://localhost:3000/api/notebooks',{name: event.target.value, slug: this.createSlug(event.target.value)})
      .then(function(response){
        this.setState({notebooks: this.state.notebooks.concat(response.data)});
      }.bind(this))
      event.target.value = "";
      return false; // returning false will prevent the event from bubbling up.
      }
  }

  deleteNotebook(idNotebook, event){
    event.stopPropagation();
    axios.delete(`http://localhost:3000/api/notebooks/${idNotebook}`)
    .then(function(response){
      this.setState({
        notebooks: this.state.notebooks.filter(noteB => noteB._id != response.data._id)
      });
    }.bind(this));
  }//deleteTag


  updateNotebook(idNote,  name, event){
    if(event.keyCode == 13){
      event.preventDefault();
       axios.put(`http://localhost:3000/api/notebooks/${idNote}`, {name: name, slug: this.createSlug(name)})
       .then(function(response){
         const newState = this.state.notebooks.filter(noteB => noteB._id != response.data._id) //delete from state the tag
         this.setState({
          notebooks: newState.concat(response.data)//add the tag updated
        });
       }.bind(this));//end axios
      event.target.contentEditable = "false";
    }//end if
    return false;//prevent event to bubbling up
  }//updateTag

  setEditable(event){
    event.target.contentEditable = "true";
    event.target.focus();
  }

  setNoEditable(event){
    event.target.contentEditable = "false";
    event.target.click();
  }

  render(){
    return(
      <div className='element-container'>
          <div className='aside--input'>
            <input type="text" placeholder='New Notebook' className='form-control' onKeyDown={this.addNotebook.bind(this)}/>
          </div>
        <div className="aside-items-container">
          {this.state.notebooks.map((noteB) => {
              return ( 
                <AsideNotebook key={noteB._id} {...noteB}
                  onDelete ={this.deleteNotebook}
                  setEditable={this.setEditable}
                  setNoEditable={this.setNoEditable}
                  onKeyDown={this.updateNotebook}
                  notebookNameClick={this.props.notebookNameClick}
                />)
              }
            )
          }
        </div>
    </div>
    )
  }
}
export default NotebookContainer;