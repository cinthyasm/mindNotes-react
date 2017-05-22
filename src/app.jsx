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
          <Switch>
            <Route pattern ='/' component={AppContainer}/>
            <Route pattern ='/about' component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

render( < App / > , document.getElementById('app'));