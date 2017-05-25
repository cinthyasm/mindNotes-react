import React from 'react';
import {Link} from 'react-router-dom'

class AsideMenu extends React.Component{

    render(){

    return( 
      <header className='row'>    
        <div onClick={this.props.onClick} className='col-xs-1 col-xs-offset-1 fa-1-5'><i className='fa fa-plus' aria-hidden='true'></i></div>
        <Link to={'/notebooks'}><div className='col-xs-1 fa-1-5'><i className='fa fa-sticky-note' aria-hidden='true'></i></div></Link>
        <div className='col-xs-1 fa-1-5'><i className='fa fa-book' aria-hidden='true'></i></div>
        <Link to={'/tags'}><div className='col-xs-1 fa-1-5'><i className='fa fa-bookmark-o' aria-hidden='true'></i></div> </Link>
        <div className='col-xs-1 fa-1-5'><i className='fa fa-star-o' aria-hidden='true'></i></div>
      </header>
    )
}
}

export default AsideMenu;

