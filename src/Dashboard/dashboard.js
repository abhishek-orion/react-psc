import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../components/Sidebar/sidebar';
import DashboardHeader from '../components/Sidebar/dashboardHeader.js';
import './dashboard.css';
import '../css/sb-admin.css';
import StatWidget from '../components/Widget/index';
class Dashboard extends Component {

  constructor (props) {
    super (props);
  }

  render (){
    return (
      <div className = "container widthAuto">
      <DashboardHeader/>
      <div className = "row dashboardContainer">
      <div className = "col-md-12">
      Dashboard
      </div>
      <div className = "col-md-6">
      <StatWidget
        style="panel-primary"
        icon="fa fa-comments fa-5x"
        count="26"
        headerText="New Comments!"
        footerText="View Details"/>
      </div>
      <div className = "col-md-6">
      2st column
      </div>
      </div>
      </div>
    );
  }
}

export default Dashboard;
