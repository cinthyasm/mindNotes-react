import React from 'react';


const AsideNotebook = (props) =>{
  return(
      <div className="aside--notebook text-center">
        <div>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
        <a>{props.name}<i className="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
  )
}

export default AsideNotebook;