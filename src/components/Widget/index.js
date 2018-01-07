import React, { Component } from 'react';
import {MenuItem,DropdownButton,Panel, PageHeader, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../css/sb-admin.css'
import '../../css/bootstrap.min.css';
import '../../fonts/FontAwesome.otf';
import Chat from 'react-icons/lib/fa/wechat';
import Notification from 'react-icons/lib/md/notifications-active';
import Fund from 'react-icons/lib/md/attach-money';
import Support from 'react-icons/lib/ti/support';
var Icon;
//const Chat = require('');
//const Notification = require('react-icons/lib/md/notifications-active');

//var FontAwesome = require('react-fontawesome');


//import Link from '../Link';

class StatWidget extends Component{ // eslint-disable-line
  constructor (props){
super (props);
}

  render() {
    if(this.props.icon== "chat"){
     Icon = Chat;
    }
    if(this.props.icon== "notification"){
     Icon = Notification;
    }
    if(this.props.icon== "fund"){
     Icon = Fund;
    }
    if(this.props.icon== "support"){
     Icon = Support;
    }


    return (
      <div>

        <Panel
          className="stat"
          className={this.props.style}>

          <div className="row">
            <div className="col-xs-6">
              <Icon className ="icons" size ={100}/>
            </div>
            <div className="col-xs-6 text-right">
              <div className="huge icons">
                  {this.props.count}
              </div>
              <div className = "panel-text">
                  {this.props.headerText}
              </div>
            </div>
          </div>
        </Panel>
      </div>
    );
  }
}

export default StatWidget;
