import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AppContainer from './jsx/AppContainer/AppContainer'
import About from './jsx/About/About'

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

class App extends React.Component{
  render() {
    return ( 
      <BrowserRouter>
        <div>
          <Route exact path ='/' component={AppContainer}/>
          <Route path ='/about' component={About}/>
        </div>
      </BrowserRouter>
    )
  }
}

render( < App / > , document.getElementById('app'));