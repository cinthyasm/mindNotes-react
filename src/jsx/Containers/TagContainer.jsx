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
      axios.post('http://localhost:3000/api/tags',{name: event.target.value})
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
    console.log("editable");
  }

  setNoEditable(event){
    event.target.contentEditable = "false";
    console.log("lost focus");
  }

  render(){
    return(
      <div className='element-container'>
          <div className='aside--input'>
            <input type="text" placeholder='Add Name tag + enter' onKeyDown={this.addTag.bind(this)}/>
          </div>
        <div className="aside-items-container">
          {this.state.tags.map((noteB) => {
                return ( 
                  <AsideTag key={noteB._id} {...noteB}
                    onDelete ={this.deleteTag}
                    setEditable={this.setEditable}
                    setNoEditable={this.setNoEditable}
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