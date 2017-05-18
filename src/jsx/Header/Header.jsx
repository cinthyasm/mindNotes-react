import React from 'react';
import HeaderBrand from './HeaderBrand';
import HeaderSearch from './HeaderSearch'

class Header extends React.Component{
  render() {
    return ( 
      <header className='container-fluid main-header'>
        <nav className='navbar navbar-default'>
          <div id='navbar-toggle' className='nav-toggle-pos'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='container-fluid'>
            <HeaderBrand/>
            <HeaderSearch/>
          </div>
          </nav>
       </header>
    )
  }
}

export default Header;