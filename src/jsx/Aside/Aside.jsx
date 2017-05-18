import React from 'react';
import AsideMenu from './AsideMenu';
import AsideNotebook from './AsideNotebook';

const Aside = React.createClass({
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
});

export default Aside;