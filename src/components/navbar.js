import React from 'react';
import '../support/css/navbar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {NavItem, NavLink,DropdownItem,DropdownMenu,DropdownToggle,UncontrolledDropdown} from 'reactstrap'
import cookie from 'universal-cookie'
import {resetUser} from '../1. actions'


const objCookie = new cookie()
class Navbar extends React.Component {
  onBtnLogout=()=>{
    objCookie.remove('userData')
    this.props.resetUser()
}
  render() {
    
    
      if(this.props.data_username!==''){
        return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">CRAFT-ART</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
  
              <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search product here.." aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              
            
          <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret style={{color:'white'}}>
                Category
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem >
                   Brush Pen
                </DropdownItem>
                <DropdownItem>
                    Watercolor
                </DropdownItem>
                <DropdownItem>
                  Grid Paper
                </DropdownItem>
                <DropdownItem>
                  Drawing Pencil
                </DropdownItem>
                <DropdownItem>
                  Drawing Pen
                </DropdownItem>
                <DropdownItem>
                  Painting Brush
                </DropdownItem>
               
                </DropdownMenu>
            </UncontrolledDropdown>
            
            <NavItem >
              <NavLink style={{color:'white'}}>Hi, {this.props.data_username}!</NavLink>
            </NavItem>
              <NavItem>
                  <Link to="/login" ><NavLink className="btn btn-default border-primary" style={{fontSize:"14px",color:'white'}}><i className="zmdi zmdi-shopping-cart" /> Keranjang</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                  <DropdownToggle nav caret style={{color:'white'}}>
                  Menu
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem >
                      Transaction History
                  </DropdownItem>
                  <DropdownItem>
                      Change Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <Link to='/'><DropdownItem onClick={this.onBtnLogout}>
                      Logout
                  </DropdownItem></Link>
                  </DropdownMenu>
              </UncontrolledDropdown>
              {/* <a className="nav-item nav-link" href="/"></a> */}
               </div>
              </div>
          </nav>
  
      
      </div>
     
        )
      }else{
    

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">CRAFT-ART</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search item here" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret style={{color:'white'}}>
                Category
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem >
                   Brush Pen
                </DropdownItem>
                <DropdownItem>
                    Watercolor
                </DropdownItem>
                <DropdownItem>
                  Grid Paper
                </DropdownItem>
                <DropdownItem>
               Drawing Pencil
                </DropdownItem>
                <DropdownItem>
                  Drawing Pen
                </DropdownItem>
                <DropdownItem>
                  Painting Brush
                </DropdownItem>
               
                </DropdownMenu>
            </UncontrolledDropdown>
            
           <Link to='/login'><a className="nav-item nav-link" href="/">Login</a></Link>
           <Link to='/signup'><a className="nav-item nav-link" href="/">Register</a></Link> 
            {/* <a className="nav-item nav-link" href="/"></a> */}
             </div>
            </div>
        </nav>

    
    </div>
    );
  }
}
}
const mapStateToProps=(state)=>{
  return {
    data_username : state.user.username
  }
}

export default connect(mapStateToProps,{resetUser})(Navbar)