import React from 'react'
import { render } from 'react-dom'

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = React.createClass({
  render() {
    return ( 
      <div>
        <h1> Hello World! </h1> 
      </div>
    )
  }
});

render( < App / > , document.getElementById('app'));