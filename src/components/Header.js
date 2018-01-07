import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EmpowerLogo from '../img/EMPOWER_logo.svg';
import '../styles/components/_loginpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

var padding30 ={
  padding: "30px",
  color: "#7d7d7d",
  fontSize: "1.21428571429em",
  textTransform: "uppercase",
  fonWeight: "300",
  fontFamily: "Arimo,Arial, sans-sarif",
};

var inline_display ={
  display: "-webkit-inline-box"
};

class Header extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id = "Header" className = "App" style = {inline_display}>
        <img className = "header-logo" src = {EmpowerLogo}/>
        <p className = "smoothing" style = {padding30}> Plan Service Center </p>
      </div>
    )
  }

}

export default Header;
