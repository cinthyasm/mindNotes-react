import React from 'react';
import AsideMenu from './AsideMenu';
import AsideNotebook from './AsideNotebook';

class Aside extends React.Component{

   render() {
    return(
      <aside> 
        <AsideMenu onClick={this.props.onClick}/>
        <div>
          {this.props.notebooks.map((noteB) => {
            return ( 
              <AsideNotebook key={noteB.id} {...noteB}/>
            )
          })}
        </div>
      </aside>
    )
  }
}

export default Aside;