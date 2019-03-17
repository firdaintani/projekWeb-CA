import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar'
import LandingPage from './components/landingPage/landingpage';
import {Route, withRouter} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import ProductDetail from './components/productDetail'
import cookie from 'universal-cookie';
import {connect} from 'react-redux'
import {keepLogin} from './1. actions'


const Cookie = new cookie()
class App extends Component {
  componentDidMount(){
    // this.props.keepLogin()
   var nameFromCookie = Cookie.get('userData')
    if(nameFromCookie!==undefined){
    this.props.keepLogin(nameFromCookie)
  }
  }
  render() {
    return (
      <div>
        <Navbar/>
        {/* <LandingPage/> */}
        <Route path='/' component={LandingPage} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/product-detail/:id' component={ProductDetail} exact/>
      </div>
    );
  }
}

export default withRouter(connect(null,{keepLogin})(App));
