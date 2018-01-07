import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import LoginBox from './../components/LoginBox';
import Employers from '../img/Employers_served.svg';
import Homepage from '../img/Homepage.jpg';
import '../styles/components/_loginpage.css';
import Header from '../components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroPlanAnalytics from '../img/hero_plan_analytics.jpg';
import Alien from '../img/alien.png';

var padding10 = {
  padding: "10px"
};

class LoginPage extends Component {
  constructor (props) {
    super(props)
  }



  render () {
    return(
      <div>
          <div className = "row App" style = {padding10}>
              <div className = "col-md-12 col-lg-12">
                <Header></Header>
              </div>
          </div>
        <div className = "row loginContainer wrap">
              <div id = "carousal" className = "width-70">
                    <Carousel>
                        <div className = "white-background">
                            <img src = {Employers}/>
                            <p className = "legend">Legend 1</p>
                        </div>
                        <div className = "white-background">
                            <img src = {Homepage}/>
                            <p className = "legend">Legend 2</p>
                        </div>
                        <div className = "white-background">
                            <img src = {HeroPlanAnalytics}/>
                            <p className = "legend">Legend 3</p>
                        </div>
                        <div className = "white-background">
                            <img src = {Alien}/>
                            <p className = "legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
                <LoginBox></LoginBox>
          </div>
      </div>
    )
  }
}

export default LoginPage;
