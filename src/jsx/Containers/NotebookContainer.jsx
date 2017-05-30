import React from 'react';
import axios from 'axios';
import AsideNotebook from './../Components/Aside/AsideNotebook';

class NotebookContainer extends React.Component{

  constructor (props){
    super(props);
    this.state= {
      notebooks:[]
    }
  }//constructor

  componentWillMount(){
    axios.get(`http://localhost:3000/api/notebooks`)
      .then((response) => {
        this.setState({notebooks: response.data})
      })
      .catch((error) => console.error('axios error', error))
    }

  addNotebook(event){
    if(event.keyCode == 13){
      axios.post('http://localhost:3000/api/notebooks',{name: event.target.value})
      .then(function(response){
       this.setState({notebooks: this.state.notebooks.concat(response.data)});
    }.bind(this))
     event.target.value = "";
      return false; // returning false will prevent the event from bubbling up.
    }
  }

  render(){
    return(
      <div className='element-container'>
          <div className='aside--input'>
            <input type="text" placeholder='New notebook' onKeyDown={this.addNotebook.bind(this)}/>
          </div>
        <div className="aside-items-container">
          {this.state.notebooks.map((noteB) => {
                return ( 
                  <AsideNotebook key={noteB._id} {...noteB}/>)
                }
              )
          }
        </div>
    </div>
    )
  }
}
export default NotebookContainer;