import React from 'react';
import axios from 'axios';
import AsideTag from './../Components/Aside/AsideTags';

class TagContainer extends React.Component{

  constructor (props){
    super(props);
    this.state= {
      tags:[]
    }
    this.deleteTag = this.deleteTag.bind(this);
    this.updateTag = this.updateTag.bind(this);
  }//constructor


  getTags(){
    axios.get(`http://localhost:3000/api/tags`)   
    .then((response) => {
      this.setState({tags: response.data})
    })
    .catch((error) => console.error('axios error', error))
  }
  componentWillMount(){
    axios.get(`http://localhost:3000/api/tags`)
      .then((response) => {
        this.setState({tags: response.data})
      })
      .catch((error) => console.error('axios error', error))
    }

  addTag(event){
    if(event.keyCode == 13){

      let slug = event.target.value.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-')

      axios.post('http://localhost:3000/api/tags',{name: event.target.value, slug: slug})
      .then(function(response){
       this.setState({tags: this.state.tags.concat(response.data)});
    }.bind(this))
      event.target.value = "";
      return false; // returning false will prevent the event from bubbling up.
    }
  }

  deleteTag(idTag){
    axios.delete(`http://localhost:3000/api/tags/${idTag}`)
    .then(function(response){
      this.setState({
        tags: this.state.tags.filter(item => item._id != response.data._id)
      });
    }.bind(this));
  }

  setEditable(event){
    event.target.contentEditable = "true";
    event.target.focus();
  }

  setNoEditable(event){
    event.target.contentEditable = "false";
    event.target.click();
  }

  updateTag(idNote,  name, event){
    if(event.keyCode == 13){
      event.preventDefault();
       axios.put(`http://localhost:3000/api/tags/${idNote}`, {name: name, color: "blue"})
       .then(function(response){
         const newState = this.state.tags.filter(tag => tag._id != response.data._id) //delete from state the tag
         this.setState({
          tags: newState.concat(response.data)//add the tag updated
        });
       }.bind(this));//end axios
       event.target.contentEditable = "false";
    }//end if
    return false;//prevent event to bubbling up
  }//updateTag

  render(){
    return(
      <div className='element-container'>
          <div className='aside--input'>
            <input type="text" placeholder='New Tag' className='form-control' onKeyDown={this.addTag.bind(this)}/>
          </div>
        <div className="aside-items-container">
          {this.state.tags.map((noteB) => {
                return ( 
                  <AsideTag key={noteB._id} {...noteB}
                    onDelete ={this.deleteTag}
                    setEditable={this.setEditable}
                    setNoEditable={this.setNoEditable}
                    onKeyDown={this.updateTag}
                  />)
                }
              )
          }
        </div>
    </div>
    )
  }
}
export default TagContainer;