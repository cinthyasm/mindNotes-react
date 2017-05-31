import React from 'react';
import {Link} from 'react-router-dom'


const AsideNotebook = (props) =>{

  return(
      <div className="aside--notebook text-center">
        <Link to={{ pathname:`/notebooks/${props.slug}`,query: props._id}}> {props.name}<i className='fa fa-angle-right' aria-hidden='true'></i></Link>
      </div>
  )
}

export default AsideNotebook;