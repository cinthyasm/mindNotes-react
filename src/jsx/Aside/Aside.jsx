import React from 'react';
import AsideMenu from './AsideMenu';
import AsideNotebook from './AsideNotebook';
import AsideTags from './AsideTags';
import {Route} from 'react-router-dom'

class Aside extends React.Component{

  render() {
    const self = this;
    return(
      <aside> 
        <AsideMenu onClick={this.props.onClick}/>
        <Route path='/notebooks' render={ () => 
          <div>
            {this.props.notebooks.map((noteB) => {
              return ( <AsideNotebook key={noteB.id} {...noteB}/>)
              })
            }
          </div>
        }/>
       <Route path= '/tags' render={ () => ( <AsideTags/>)} />
      </aside>
    ) // return
  } // render
}

export default Aside;
