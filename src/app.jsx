import React from 'react'
import { render } from 'react-dom'
import Header from './jsx/Header/Header'

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = React.createClass({
  render() {
    return ( 
      <div>
        <Header />
      </div>
    )
  }
});

render( < App / > , document.getElementById('app'));