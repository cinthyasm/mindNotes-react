import React from 'react';
import Aside from './../Aside/Aside';
import Note from './../Note/Note';

class MainContent extends React.Component{
  render() {
    return(
      <div className='container-fluid'>
        <div className='aside'>
          <Aside className='aside' />
        </div>

        <div className='row row-notes'>
          <div className="col-md-12">
            <div className="row main--separator">
              <div className="col-xs-12 main--title">
                <h1>Notebook Name</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <Note />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent;