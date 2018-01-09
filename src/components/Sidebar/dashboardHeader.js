import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from './sidebar';
import ReactDOM from 'react-dom';


var zIndex = {
  zIndex: "1500"
};

const marginLeftValue = {
  'margin-left': '260px',
};
class DashboardHeader extends Component {

  constructor(props) {
    super(props);
  this.state = {
      navOpen : true,
      pageSelected: this.props.pageSelected
    };
  this.handleDrawer = this.handleDrawer.bind(this);
  this.changePage = this.changePage.bind(this);
  }

  changePage(menuClicked){
    this.props.pageSelected(menuClicked);
  };
  componentDidMount(){
      var myDiv = document.getElementById('contentBody');
      ReactDOM.findDOMNode(myDiv).style.marginLeft = '260px';
  }

  handleDrawer(){
    var myDiv = document.getElementById('contentBody');
    if(this.state.navOpen){
      document.getElementById('contentBody').style =""
    }else{
      ReactDOM.findDOMNode(myDiv).style.marginLeft = '260px';
    }
    this.setState({navOpen: (!this.state.navOpen)});
  };

  render() {
    return (
      <div>
      <MuiThemeProvider>
      <AppBar style = {zIndex} title = "Plan Sponser Center"
      onLeftIconButtonClick = {this.handleDrawer}
      iconClassNameRight="muidocs-icon-navigation-expand-more" />
      <Sidebar pageSelectedUpdate = {this.changePage} barOpen = {this.state.navOpen}/>
      </MuiThemeProvider>
      </div>
    );
  }

}

export default DashboardHeader;
