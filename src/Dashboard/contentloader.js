import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DashboardMain from './dashboardmain';
import CaseManagement from '../Casemanagment/CaseList';
import CaseDetails from '../Casemanagment/CaseDetails';

var Page;


class ContentBodyLoader extends Component {

  constructor (props) {
    super (props);
    this.reRenderComponent = this.reRenderComponent.bind(this);
    this.loadCaseDetails = this.loadCaseDetails.bind(this);
  }

  loadCaseDetails(selectedCase){
  //  this.props.selectedPage = selectedCase;
    this.setState({selectedPage:"CaseDetails"});
    this.props.loadCaseDetails(selectedCase);
  }

 reRenderComponent(){
//   this.forceUpdate();
 }



  render (){
    if(this.props.selectedPage == 'Dashboard'){
      Page = DashboardMain;
    }else if(this.props.selectedPage == 'CaseList'){
        Page = CaseManagement;
    }else if(this.props.selectedPage == 'CaseDetails'){
        Page = CaseDetails;
    }

    return (
      <div id="contentBody">
       {
        <Page caseId = {this.props.caseId} loadCaseDetails = {this.loadCaseDetails} />
       }
      </div>
    );
  }
}

export default ContentBodyLoader;
