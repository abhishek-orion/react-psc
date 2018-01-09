import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withCookies, Cookies } from 'react-cookie';
import CaselistData from './caselistdata';



class CaseList extends Component {
  constructor(props) {
    super(props);
    this.state = {caseList: CaselistData.caseList};
      this.loadSelectedCase = this.loadSelectedCase.bind(this);
  };

  componentDidMount() {
     this.loadCaseList();
   }

  loadSelectedCase(selectedCase){
    this.props.loadCaseDetails(selectedCase);
  }

  loadCaseList() {
  // document.cookie = "JSESSIONID=4E96E3EEC1DBFA19D40FD315BB241DDD; CAS_COOKIE=NULL; ESC_COOKIE=NULL; IPSESSIONID=bFnZjrARxoaP1fJL462USMjQjy3uOEhOnD7C3LnJ4JtWiOMEI-!-648194780; accu_psc=PlanEmpower; XSRF-TOKEN=4655429724634359353; lastUpdateTimekeyLink=1515482126049; JSESSIONID=GMbZxhbnl1p8LkaCyQ3LRjWQRn5hn8gqtJHdH0shCJ5QQPq40N!-648194780; ESC_HP_COOKIE=PLANEMPOWER; _ga=GA1.3.2005128501.1514873096; _gid=GA1.3.1466542496.1515418200; lastUpdateTimepsc=1515482543701; _ga=GA1.2.2005128501.1514873096; _gid=GA1.2.1466542496.1515418200; _gat_A0=1; lastUpdateTimeempower=1515482544831";
  // var cookies  = document.cookie;
  // fetch('https://proj4-plan.retirementpartner.com/empsc/rest/casemanagement/caselist',{
  //     method: "GET",
  //     headers: {
  //       'Accept': 'application/json', // This is set on request
  //       'Content-Type': 'application/json', // This is set on request
  //       'X-XSRF-TOKEN': '4655429724634359353', // This is set on request
  //       'Cookie': cookies // This is missing from request
  //     }
  // }).then(results => this.setState({ caseList: results.caseList })
  //   );
  }
  render() {
    return (
      <div>
        <div className="col s12 board">
           <table id="simple-board">
           <thead>
              <tr>
                <th>Case No</th>
                <th>Status</th>
                <th>Type</th>
                <th>Empl Id</th>
                <th>Ind Id</th>
                <th>Association Name</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Priority</th>
                <th>Title</th>
                <th>Created_Date</th>
              </tr>
          </thead>
             <tbody>
                {this.state.caseList  .map((caseObj, i) => <TableRow callBack = {this.loadSelectedCase}
                  key = {i} caseObj = {caseObj}/>)}
             </tbody>
           </table>
        </div>
      </div>
    )
  }
}

class TableRow extends Component{
    constructor(props) {
      super(props);
      this.loadSelectedCase = this.loadSelectedCase.bind(this);
    };

    loadSelectedCase(selectedCase){
      this.props.callBack(selectedCase);
    };

  render() {
    return (
        <tr>
           <td>
              <a href="javascript:void(0)" onClick= {() => this.loadSelectedCase(this.props.caseObj.requestId)}>
                {this.props.caseObj.requestId}
              </a>
          </td>
          <td>{this.props.caseObj.status}</td>
          <td>{this.props.caseObj.type}</td>
          <td>{this.props.caseObj.employeeId}</td>
          <td>{this.props.caseObj.indId}</td>
          <td>{this.props.caseObj.associationName}</td>
          <td >{this.props.caseObj.category}</td>
          <td>{this.props.caseObj.subCategory}</td>
          <td>{this.props.caseObj.currentPriority}</td>
          <td>{this.props.caseObj.title}</td>
          <td>{this.props.caseObj.createDate}</td>
        </tr>
    );
  }
}


export default CaseList;
