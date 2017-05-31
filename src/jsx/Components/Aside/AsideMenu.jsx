import React from 'react';
import {Link} from 'react-router-dom'

const AsideMenu = (props) =>{
  return(
    <header className='aside--menu'>    
      <div className=' fa-1-5'><Link to={'/notebooks'}><i className='fa fa-book' aria-hidden='true'></i></Link></div>
      <div className=' fa-1-5'><Link to={'/tags'}><i className='fa fa-bookmark-o' aria-hidden='true'></i></Link></div> 
      <div className='fa-1-5'><Link to={'/'}> <i className='fa fa-star-o' aria-hidden='true'></i></Link></div>
    </header>
  )
}

export default AsideMenu;

