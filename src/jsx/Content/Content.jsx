import React from 'react';
import Aside from './../Aside/Aside';
import Note from './../Note/Note';

class Content extends React.Component{
  render() {
    return(
      <div className='container-fluid'>
        <div className={this.props.isActive ? 'aside aside__active': 'aside'}>
          <Aside onClick={this.props.onClick}/>
        </div>

        <div className={this.props.isActive ? 'row row-notes row-notes__active': 'row row-notes'}>
          <div className="col-md-12">
            <div className="row main--separator">
              <div className="col-xs-12 main--title">
                <h1>Notebook Name</h1>
              </div>
            </div>
            <div className="row">
              {this.props.notes.filter((note) => 
                `${note.title} ${note.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase())>= 0)
              .map((note) => {
                return ( 
                  <Note key={note.id} {...note} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;