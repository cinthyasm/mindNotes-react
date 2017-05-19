import React from 'react'
import { render } from 'react-dom'
import AppContainer from './jsx/AppContainer/AppContainer'

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

class App extends React.Component{
  render() {
    return ( 
      <div>
        <AppContainer />
      </div>
    )
  }
}

render( < App / > , document.getElementById('app'));