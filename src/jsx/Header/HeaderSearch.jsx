import React from 'react';

class HeaderSearch extends React.Component{
  render() {
    return ( 
      <div className='col-xs-8 col-sm-offset-1 col-sm-8 col-md-offset-1 col-md-8'>
        <form className='navbar-form navbar-left'>
        <div className='search'>
            <input className='form-control' value={this.props.searchTerm} placeholder='Search'/>
            <span className='fa fa-search'></span>
        </div>
        </form>
    </div>
    )
  }
}

export default HeaderSearch;
