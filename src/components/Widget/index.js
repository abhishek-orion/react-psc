import React, { Component } from 'react';
import {MenuItem,DropdownButton,Panel, PageHeader, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../css/sb-admin.css'
import '../../css/bootstrap.min.css';

//import Link from '../Link';

class StatWidget extends Component{ // eslint-disable-line
  constructor (props){
super (props);

}

  render() {
    return (
      <div>
        <Panel
          className="stat"
          className={this.props.style}

          header={<div className="row">
            <div className="col-xs-3">
              <i
                className={this.props.icon}
              />
            </div>
            <div className="col-xs-9 text-right">
              <div className="huge">
                {
                  this.props.count
                }
              </div>
              <div>
                {
                  this.props.headerText
                }
              </div>
            </div>
          </div>}

        />
      </div>
    );
  }
}

export default StatWidget;
