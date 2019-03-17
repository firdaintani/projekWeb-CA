import React from 'react';
import '../support/css/style.css';
import '../support/fonts/material-icon/css/material-design-iconic-font.min.css';
import fotoSignUp from '../support/images/signup.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {onRegister} from '../1. actions'
import Loader from 'react-loader-spinner'

class Signup extends React.Component{
    state={error:''}
    onBtnRegisterClick=()=>{
        var username = this.refs.username.value
        var email = this.refs.email.value
        var password = this.refs.password.value
        var repeat_password = this.refs.repeat_password.value
        // alert(username)
        if(username===''||email===''||password===''||repeat_password===''){
            this.setState({error: 'Must fill all'})
        }else if(password!==repeat_password){
            this.setState({error:'Password must match'})
        }
        else{
            this.props.onRegister(username,password,email)
        }
    
    }

    onRenderBtnSignUp=()=>{
        if(this.props.loading===true){
            return <Loader type="ThreeDots" color="#1591A4" height={50} width={50} />   
        }else{
             
            return <input type="button" name="signin" id="signin" className="form-submit" defaultValue="Register" onClick={this.onBtnRegisterClick}/>
            
        }

    }

    renderErrorMessage=()=>{
        if(this.state.error!=='' )
        return (
            <div className='alert alert-danger'>{this.state.error}</div>
        )
        else if(this.props.error!==''){
            return (
                <div className='alert alert-danger'>{this.props.error}</div>
            )
        }
    }
    render(){
        return(
            <div className='container'>
            {/* Sign up form */}
            <section className="signup">
                <div className="container-login-signup">
                <div className="signup-content">
                    <div className="signup-form">
                    <h2 className="form-title">Register</h2>
                    <form className="register-form" id="register-form">
                        {/* <div className="form-group">
                        <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                        <input type="text" name="name" id="name" placeholder="Full Name" />
                        </div> */}
                        <div className="form-group">
                        <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                        <input type="text" name="name" id="name" ref='username' placeholder="Username" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                        <input type="email" name="email" id="email" ref='email' placeholder="Email" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                        <input type="password" name="pass" id="pass" ref='password' placeholder="Password" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                        <input type="password" name="re_pass" id="re_pass" ref='repeat_password' placeholder="Repeat your password" />
                        </div>
                        {/* <div className="form-group">
                        <label htmlFor="phone"><i className="zmdi zmdi-phone" /></label>
                        <input type="number" name="phone" id="phone" placeholder="Phone number" />
                        </div> */}
                        {/* <div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="/" className="term-service">Terms of service</a></label>
                        </div> */}
                            <div>{this.onRenderBtnSignUp()}</div>
                            <div className='mt-4'>{this.renderErrorMessage()}</div>
                    </form>
                    </div>
                    <div className="signup-image">
                    <figure><img src={fotoSignUp} alt="signup" /></figure>
                    <Link to='/login'><a href="/" className="signup-image-link">I am already member</a></Link>
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
     
     loading : state.user.loading,
     error: state.user.error
    }
 }
export default connect(mapStateToProps,{onRegister})(Signup)