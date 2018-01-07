import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from './sidebar';


var zIndex = {
  zIndex: "1500"
};

class DashboardHeader extends Component {

  constructor(props) {
    super(props);
  this.state = {
      navOpen : true
    };
  this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer(){
    this.setState({navOpen: (!this.state.navOpen)});
  };

  render() {
    return (
      <div>
      <MuiThemeProvider>

      <AppBar style = {zIndex} title = "Plan Sponser Center"
      onLeftIconButtonClick = {this.handleDrawer}
      iconClassNameRight="muidocs-icon-navigation-expand-more" />
      <Sidebar barOpen = {this.state.navOpen}/>
      </MuiThemeProvider>
      </div>
    );
  }

}

export default DashboardHeader;
