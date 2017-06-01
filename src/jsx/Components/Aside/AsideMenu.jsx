import React from 'react'
import {Link} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

const AsideMenu = (props) =>{
  return(
    <header className='aside--menu'>
      <div data-tip="Notebooks" className=' fa-1-5'><Link to={'/notebooks'}><i className='fa fa-book' aria-hidden='true'></i></Link></div>
      <div data-tip="Tags" className=' fa-1-5'><Link to={'/tags'}><i className='fa fa-bookmark-o' aria-hidden='true'></i></Link></div> 
      <div data-tip="Favorites" className='fa-1-5'><Link to={{ pathname:'/favorites',query: {'type':'favorites'}}}> <i className='fa fa-star-o' aria-hidden='true'></i></Link></div>
      <ReactTooltip place="right" effect="float"/> 
    </header>
  )
}

export default AsideMenu;

