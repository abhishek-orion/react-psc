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
//import history from '../../History/history';

var style = {
  zIndex: "-1"
};

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        casemnagementPage : "CaseManagement"
    };

    this.setMenuSelected = this.setMenuSelected.bind(this);

  };

  setMenuSelected(menuClicked){
    this.props.pageSelectedUpdate(menuClicked);
  };

  render() {
    return (

      <MuiThemeProvider >
          <Drawer open = {this.props.barOpen} style = {style} >
          <div id="sidebar" className = "margin-64">
            <MenuItem >Dashboard</MenuItem>
            <MenuItem>Employee</MenuItem>
            <MenuItem>Investments</MenuItem>
            <MenuItem onClick= {() => this.setMenuSelected(this.state.casemnagementPage)}>
                Case Management
            </MenuItem>
            </div>
          </Drawer>
        </MuiThemeProvider>

    );
  }
}


export default Sidebar;
