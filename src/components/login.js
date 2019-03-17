import React from 'react'
import '../support/css/style.css';
import '../support/fonts/material-icon/css/material-design-iconic-font.min.css';
import fotoSignIn from '../support/images/login.jpg'
import {Link, Redirect} from 'react-router-dom'
import {fnLogin} from '../1. actions'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'
import cookie from 'universal-cookie'

const Cookie = new cookie()


class Login extends React.Component{

    componentWillReceiveProps(NewProps){
        Cookie.set('userData',NewProps.data_username,{path:'/'})
    }

    onBtnLoginClick=()=>{
        var username = this.refs.username.value
        var password = this.refs.password.value
        this.props.fnLogin(username,password)
       
    }

    onRenderBtnLogin=()=>{
        if(this.props.data_loading===true){
            return <Loader type="ThreeDots" color="#1591A4" height={50} width={50} />   
        }else{
             
            return <input type="button" name="signin" id="signin" className="form-submit" defaultValue="Log in" onClick={this.onBtnLoginClick}/>
            
        }

    }

    onRenderErrorMessage=()=>{
        if(this.props.data_error!==''){
            return <div class="alert alert-danger mt-3" role="alert">
            {this.props.data_error}
             </div>
        }
    }

    
    render(){
        if(this.props.data_username!==""){
            return <Redirect to='/'/>        }
        return(
            <div>
                            {/* Sing in  Form */}
            <section className="sign-in">
                <div className="container-login-signup">
                <div className="signin-content">
                    <div className="signin-image">
                    <figure><img src={fotoSignIn} alt="signup" /></figure>
                    <Link to='/signup'><p className="signup-image-link">Create an account</p></Link>
                    </div>
                    <div className="signin-form">
                    <h2 className="form-title">Login</h2>
                    <form method="POST" className="register-form" id="login-form">
                        <div className="form-group">
                        <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                        <input type="text" name="your_name" ref='username' placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                        <input type="password" name="your_pass" ref='password' placeholder="Password" />
                        </div>
                        <div className="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                        <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
                        </div>
                        <div className="form-group form-button">
                            {this.onRenderBtnLogin()}
                            {this.onRenderErrorMessage()}
                        </div>
                    </form>
                    {/* <div className="social-login">
                        <span className="social-label">Or login with</span>
                        <ul className="socials">
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook" /></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter" /></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google" /></a></li>
                        </ul>
                    </div> */}
                    </div>
                </div>
                </div>
            </section>
            </div>

        )
    }
}

const mapStateToProps=(state)=>{
    return {
        data_username:state.user.username,
        data_loading : state.user.loading,
        data_error : state.user.error
    }
}

export default connect(mapStateToProps,{fnLogin})(Login)