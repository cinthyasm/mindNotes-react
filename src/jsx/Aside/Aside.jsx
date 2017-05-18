import React from 'react';
import AsideMenu from './AsideMenu';
import AsideNotebook from './AsideNotebook';

class Aside extends React.Component{

   render() {
    return(
      <aside> 
        <AsideMenu />
        <div>
          <AsideNotebook/>
          <AsideNotebook/>
          <AsideNotebook/>
        </div>
      </aside>
    )
  }
}

export default Aside;