import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DashboardMain from './dashboardmain';
import CaseManagement from '../Casemanagment/CaseList';
var Page;


class ContentBodyLoader extends Component {

  constructor (props) {
    super (props);
  }

  render (){

    if(this.props.selectedPage == "Dashboard"){
      console.log("This is Dashboard");
    }
    else{
      console.log("This is something else");
    }

    return (
      <div>
       {
        this.props.selectedPage == 'Dashboard' ? <DashboardMain/> : <CaseManagement/>
       }
      </div>
    );
  }
}

export default ContentBodyLoader;
