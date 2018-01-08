import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginBox from './components/LoginBox';
import LoginPage from './LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Dashboard from './Dashboard/dashboard';
import CaseManagement from './Casemanagment/CaseList';


class App extends Component {
  render() {
    return (
      <div>
      <div>
      <Router history={hashHistory}>
        <Route path='/' component={LoginPage} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/CaseManagement' component={CaseManagement} />
      </Router>
        </div>
      </div>
    )
  }
}

export default App;
