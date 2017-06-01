import React from 'react';
import HeaderBrand from './HeaderBrand'
import HeaderSearch from './HeaderSearch'
import PropTypes from 'prop-types';

class Header extends React.Component{
  render() {
    return ( 
      <header className='container-fluid main-header'>
        <nav className='navbar navbar-default'>
          <div id='navbar-toggle' onClick={this.props.onClick} className='nav-toggle-pos'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='container-fluid'>
            <HeaderBrand notebookNameClick={this.props.notebookNameClick}/>
            <HeaderSearch onChange={this.props.onChange} searchTerm={this.props.searchTerm}/>
          </div>
          </nav>
       </header>
    )
  }
}

Header.propTypes = {
  searchTerm: PropTypes.string
}

export default Header;