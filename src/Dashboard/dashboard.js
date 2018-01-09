import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../components/Sidebar/sidebar';
import DashboardHeader from '../components/Sidebar/dashboardHeader.js';
import ContentBody from './contentloader';
import {MenuItem,DropdownButton,Panel, PageHeader, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './dashboard.css';
import '../css/sb-admin.css';
import '../css/bootstrap.min.css';
import StatWidget from '../components/Widget/index';
import {BarChart} from 'recharts';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar,
  ResponsiveContainer } from 'recharts';

//import {Tooltip,XAxis, YAxis, Area,CartesianGrid, AreaChart, Bar, BarChart,ResponsiveContainer } from '../vendor/recharts';



class Dashboard extends Component {

  constructor (props) {
    super (props);

    this.state = {
      pageSelected: "Dashboard",
    };

    this.setPageSelected = this.setPageSelected.bind(this);
    this.loadCaseDetails = this.loadCaseDetails.bind(this);

  };

setPageSelected(page){
  this.setState({pageSelected: page});
}

loadCaseDetails(caseId){
    this.setState({pageSelected: 'CaseDetails',
                  requestId : caseId
                });
}


  render (){
    return (
      <div className = "widthAuto">
              <DashboardHeader pageSelected = {this.setPageSelected}/>
              <ContentBody caseId = {this.state.requestId} loadCaseDetails = {this.loadCaseDetails} selectedPage = {this.state.pageSelected}/>
      </div>
    );
  }
}

export default Dashboard;
