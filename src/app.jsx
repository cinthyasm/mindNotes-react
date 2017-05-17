import React from 'react'
import { render } from 'react-dom'
import Header from './jsx/Header/Header'
import MainContent from './jsx/MainContent/MainContent'

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = React.createClass({
  render() {
    return ( 
      <div>
        <Header/>
        <MainContent/>
      </div>
    )
  }
});

render( < App / > , document.getElementById('app'));