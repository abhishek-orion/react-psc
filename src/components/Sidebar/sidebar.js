import React, { Component } from 'react';
import classNames from 'classnames';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import {Link} from 'react-router';
import '../../css/sb-admin.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DashboardHeader from './dashboardHeader';
import ReactDOM from 'react-dom';
//import history from '../../History/history';

var style = {
  zIndex: "-1"
};

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        caseListPage : "CaseList",
        dashboardPage : "Dashboard"
    };

    this.setMenuSelected = this.setMenuSelected.bind(this);

  };

  setMenuSelected(menuClicked){
    var myDiv = document.getElementById('contentBody');
    this.props.pageSelectedUpdate(menuClicked);
  };

  render() {
    return (

      <MuiThemeProvider >
          <Drawer open = {this.props.barOpen} style = {style} >
          <div id="sidebar" className = "margin-64">
            <MenuItem onClick= {() => this.setMenuSelected(this.state.dashboardPage)} >Dashboard</MenuItem>
            <MenuItem>Employee</MenuItem>
            <MenuItem>Investments</MenuItem>
            <MenuItem onClick= {() => this.setMenuSelected(this.state.caseListPage)}>
                Case Management
            </MenuItem>
            </div>
          </Drawer>
        </MuiThemeProvider>

    );
  }
}


export default Sidebar;
