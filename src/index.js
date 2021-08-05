import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/Home';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Songs from './pages/Songs';

ReactDOM.render(
  <Router>
    <Route exact path="/"           component={Home}/>
    <Route exact path="/home"       component={Home}/>
    <Route exact path="/characters" component={Characters}/>
    <Route exact path="/episodes"   component={Episodes}/>
    <Route exact path="/songs"      component={Songs}/>
  </Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
