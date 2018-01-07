import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../components/Sidebar/sidebar';
import DashboardHeader from '../components/Sidebar/dashboardHeader.js';
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

  const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
  ];

class Dashboard extends Component {

  constructor (props) {
    super (props);
  }

  render (){
    return (
      <div className = "widthAuto">
              <DashboardHeader/>
                    <div className = "row dashboardContainer">
                          <div className = "col-md-12">
                              <div className = "page-header">
                                <h1> Dashboard </h1>
                              </div>
                          </div>
                    </div>
                    <div className = "row dashboardContainer">
                          <div className = "col-md-3">
                              <StatWidget
                              style="panel-primary panels blue"
                              icon="chat"
                              count="26"
                              headerText="New Messages"
                              footerText="View Details"/>
                          </div>
                          <div className = "col-md-3">
                              <StatWidget
                              style="panel-primary panels green"
                              icon="notification"
                              count="5"
                              headerText="New Notifications!"
                              footerText="View Details"/>
                          </div><div className = "col-md-3">
                              <StatWidget
                              style="panel-primary panels yellow"
                              icon="fund"
                              count="3"
                              headerText="Top Funds"
                              footerText="View Details"/>
                          </div><div className = "col-md-3">
                              <StatWidget
                              style="panel-primary panels red"
                              icon="support"
                              count="12"
                              headerText="New Cases"
                              footerText="View Details"/>
                          </div>
                  </div>
                  <hr className="divider"/>
          <div className = "row dashboardContainer">
          <div className = "col-md-8">
          <Panel>
          <span>
              <i className="fa fa-bar-chart-o fa-fw" /> Area Chart Example
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Fund 1</MenuItem>
                  <MenuItem eventKey="2">Fund 2</MenuItem>
                  <MenuItem eventKey="3">Fund 3</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">View Investments & Performance</MenuItem>
                </DropdownButton>
              </div>
            </span>
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            </Panel>
            </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
