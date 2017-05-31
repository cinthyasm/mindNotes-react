import React from 'react';
import {Link} from 'react-router-dom'

const HeaderBrand = () => (
  <div className='col-xs-4 col-sm-2 col-md-2'>
      <div className='navbar-header'>
        <Link to={'/'} className='navbar-brand'>
          <img alt='logo' src='./public/images/brain-logo.png'/>
          <h2>MindNotes</h2>
        </Link>
      </div>
  </div>
)

export default HeaderBrand;