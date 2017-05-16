import React from 'react';
import HeaderBrand from './HeaderBrand';
import HeaderSearch from './HeaderSearch'

const Header = React.createClass({
  render() {
    return ( 
      <header className='main-header'>
        <nav className='navbar navbar-default'>
            <div className='container-fluid'>
                <HeaderBrand/>
                <HeaderSearch/>
            </div>
          </nav>
       </header>
    )
  }
});

export default Header;