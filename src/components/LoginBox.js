import React, {Component} from 'react'
//import ErrorMessage from './ErrorMessage'
//import LoadingButton from './LoadingButton'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field'
import '../styles/components/_loginbox.css';
import {Tabs, Tab} from 'material-ui/Tabs';

//import {changeForm} from '../../actions'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class LoginBox extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      role: 'sponsor',
    };
  }

  handleChange (value) {
      this.setState({
        role: value,
      });
    };

  render () {
    return(
      <MuiThemeProvider>
      <Tabs
        value={this.state.role}
        onChange={this.handleChange}
        className = "loginTab">
      <Tab label="Sponsor Login" value="sponsor">
      <div className = "loginBox">
        <form className = "form-style">
            <TextField  floatingLabelText = "Enter Username" hintText = "Username"/>
            <PasswordField className = "width-256" floatingLabelText = "Enter Password" hintText = "Max 8 Characters"/>
            <RaisedButton className = "textLeft" label = "Login"/>
        </form>
      </div>
      </Tab>
      <Tab label="Participant Login" value="participant">
      <div className = "loginBox">
        <form className = "form-style">
            <TextField  floatingLabelText = "Enter Username" hintText = "Username"/>
            <PasswordField className = "width-256" floatingLabelText = "Enter Password" hintText = "Max 8 Characters"/>
            <RaisedButton className = "textLeft" label = "Login"/>
        </form>
      </div>
      </Tab>
      </Tabs>
      </MuiThemeProvider>
    )
  }
}

export default LoginBox;
